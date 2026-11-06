import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { getImageDimensions, hasImageAsset, urlFor } from "@/lib/sanity/image";
import { blockText, isBlock } from "@/lib/blog/utils";
import type {
  PortableTextBlock,
  PortableTextChild,
  PortableTextMarkDef,
  PortableTextNode,
  PortableTextSpan,
  SanityImage,
} from "@/lib/blog/types";

/**
 * Lightweight Portable Text renderer (server component).
 * Kept in-house because the installed @portabletext/react requires React 19,
 * and so heading ids can be shared with the table of contents.
 */

interface Props {
  value: PortableTextNode[] | null | undefined;
  /** Block `_key` → heading id, from `generateHeadingIds`. */
  headingIds?: Map<string, string>;
  className?: string;
}

export default function PortableTextContent({ value, headingIds, className }: Props) {
  const nodes = groupLists(value ?? []);
  return <div className={cn("blog-article", className)}>{nodes.map((n) => renderNode(n, headingIds))}</div>;
}

/* ---------- lists ---------- */

interface ListGroup {
  _type: "__list";
  _key: string;
  listItem: string;
  level: number;
  items: Array<PortableTextBlock | ListGroup>;
}

function groupLists(nodes: PortableTextNode[]): Array<PortableTextNode | ListGroup> {
  const out: Array<PortableTextNode | ListGroup> = [];
  const stack: ListGroup[] = [];

  for (const node of nodes) {
    if (!isBlock(node) || !node.listItem) {
      stack.length = 0;
      out.push(node);
      continue;
    }
    const level = node.level ?? 1;
    while (stack.length && (stack[stack.length - 1].level > level || (stack[stack.length - 1].level === level && stack[stack.length - 1].listItem !== node.listItem))) {
      stack.pop();
    }
    let current = stack[stack.length - 1];
    if (!current || current.level < level) {
      const group: ListGroup = { _type: "__list", _key: `list-${node._key}`, listItem: node.listItem, level, items: [] };
      if (current) current.items.push(group);
      else out.push(group);
      stack.push(group);
      current = group;
    }
    current.items.push(node);
  }
  return out;
}

function renderList(group: ListGroup, headingIds?: Map<string, string>): React.ReactNode {
  const Tag = group.listItem === "number" ? "ol" : "ul";
  return (
    <Tag key={group._key} className={group.listItem === "number" ? "list-decimal" : "list-disc"}>
      {group.items.map((item) =>
        item._type === "__list" ? (
          <li key={item._key} className="list-none">{renderList(item as ListGroup, headingIds)}</li>
        ) : (
          <li key={item._key}>{renderChildren(item as PortableTextBlock)}</li>
        )
      )}
    </Tag>
  );
}

/* ---------- blocks ---------- */

function renderNode(item: PortableTextNode | ListGroup, headingIds?: Map<string, string>): React.ReactNode {
  if (item._type === "__list") return renderList(item as ListGroup, headingIds);
  const node = item as PortableTextNode;
  if (isBlock(node)) return renderBlock(node, headingIds);

  if (node._type === "image") return <BlockImage key={node._key} image={node as SanityImage} />;

  if (node._type === "callout") {
    const n = node as Record<string, unknown>;
    const inner = n.body ?? n.content;
    return (
      <aside key={node._key} className="blog-callout">
        {typeof n.title === "string" && <p className="font-semibold">{n.title}</p>}
        {typeof n.text === "string" && <p>{n.text}</p>}
        {Array.isArray(inner) && <PortableTextContent value={inner as PortableTextNode[]} />}
      </aside>
    );
  }

  return null; // unknown custom types are skipped rather than breaking the page
}

function renderBlock(block: PortableTextBlock, headingIds?: Map<string, string>): React.ReactNode {
  const hasInlineObject = block.children.some((c) => c._type !== "span");
  if (!blockText(block).trim() && !hasInlineObject) return null; // skip empty spacer paragraphs

  const children = renderChildren(block);
  const id = headingIds?.get(block._key);

  switch (block.style) {
    case "h1":
    case "h2":
      return <h2 key={block._key} id={id} tabIndex={id ? -1 : undefined}>{children}</h2>;
    case "h3":
      return <h3 key={block._key} id={id} tabIndex={id ? -1 : undefined}>{children}</h3>;
    case "h4":
    case "h5":
    case "h6":
      return <h4 key={block._key}>{children}</h4>;
    case "blockquote":
      return <blockquote key={block._key}>{children}</blockquote>;
    default:
      return <p key={block._key}>{children}</p>;
  }
}

/* ---------- spans & marks ---------- */

function renderChildren(block: PortableTextBlock): React.ReactNode {
  const markDefs = block.markDefs ?? [];
  return block.children.map((child) => renderChild(child, markDefs));
}

function renderChild(child: PortableTextChild, markDefs: PortableTextMarkDef[]): React.ReactNode {
  if (child._type === "image") return <InlineImage key={child._key} image={child as SanityImage} />;
  if (child._type !== "span" || typeof child.text !== "string") return null;
  const span = child as PortableTextSpan;

  const lines = span.text.split("\n");
  let content: React.ReactNode = lines.map((line, i) => (
    <React.Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </React.Fragment>
  ));

  for (const mark of span.marks ?? []) {
    content = applyMark(mark, content, markDefs);
  }
  return <React.Fragment key={span._key}>{content}</React.Fragment>;
}

function applyMark(mark: string, content: React.ReactNode, markDefs: PortableTextMarkDef[]): React.ReactNode {
  switch (mark) {
    case "strong":
      return <strong>{content}</strong>;
    case "em":
      return <em>{content}</em>;
    case "underline":
      return <u>{content}</u>;
    case "strike-through":
      return <s>{content}</s>;
    case "code":
      return <code>{content}</code>;
  }
  const def = markDefs.find((d) => d._key === mark);
  if (def?._type === "link" && def.href) {
    const external = /^https?:\/\//i.test(def.href);
    const newTab = def.blank ?? external;
    return (
      <a href={def.href} {...(newTab ? { target: "_blank", rel: "noopener noreferrer" } : {})}>
        {content}
      </a>
    );
  }
  return content;
}

/* ---------- images ---------- */

function BlockImage({ image }: { image: SanityImage }) {
  if (!hasImageAsset(image)) return null;
  const { width, height } = getImageDimensions(image);
  return (
    <figure>
      <Image
        src={urlFor(image).width(1400).url()}
        alt={image.alt?.trim() || ""}
        width={width}
        height={height}
        sizes="(min-width: 1024px) 860px, 100vw"
        className="h-auto w-full rounded-[24px]"
      />
      {image.caption && <figcaption>{image.caption}</figcaption>}
    </figure>
  );
}

function InlineImage({ image }: { image: SanityImage }) {
  if (!hasImageAsset(image)) return null;
  const { width, height } = getImageDimensions(image);
  const h = 24;
  return (
    <Image
      src={urlFor(image).height(h * 2).url()}
      alt={image.alt?.trim() || ""}
      width={Math.round((width / height) * h)}
      height={h}
      className="inline-block h-[1.2em] w-auto align-middle"
    />
  );
}
