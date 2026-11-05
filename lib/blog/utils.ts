import type { PortableTextBlock, PortableTextNode, TocItem } from "./types";

export function isBlock(node: PortableTextNode): node is PortableTextBlock {
  return node._type === "block" && Array.isArray((node as PortableTextBlock).children);
}

export function blockText(block: PortableTextBlock): string {
  return block.children.map((c) => (c._type === "span" && typeof c.text === "string" ? c.text : "")).join("");
}

export function slugify(text: string): string {
  return (
    text
      .toLowerCase()
      .normalize("NFKD")
      .replace(/[̀-ͯ]/g, "")
      .replace(/[^a-z0-9\s-]/g, "")
      .trim()
      .replace(/[\s-]+/g, "-")
      .slice(0, 80) || "section"
  );
}

const HEADING_LEVEL: Record<string, 2 | 3> = { h1: 2, h2: 2, h3: 3 };

/**
 * Generates stable, unique ids for H2/H3 blocks (keyed by block `_key`) and the
 * matching table of contents. The renderer and the TOC both read from this
 * result, so every TOC link resolves to a heading.
 */
export function generateHeadingIds(body: PortableTextNode[] | null | undefined, reserved: string[] = []) {
  const ids = new Map<string, string>();
  const toc: TocItem[] = [];
  const used = new Set(reserved);

  for (const node of body ?? []) {
    if (!isBlock(node) || node.listItem) continue;
    const level = HEADING_LEVEL[node.style ?? ""];
    if (!level) continue;
    const text = blockText(node).trim();
    if (!text) continue;

    const base = slugify(text);
    let id = base;
    for (let i = 2; used.has(id); i++) id = `${base}-${i}`;
    used.add(id);

    ids.set(node._key, id);
    toc.push({ id, text, level });
  }

  return { ids, toc };
}

/** "2026-11-03T…" → "03 November 2026" */
export function formatPublishedDate(iso: string | null | undefined): string {
  if (!iso) return "";
  const date = new Date(iso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric", timeZone: "UTC" });
}

export function matchesSearch(term: string, ...fields: Array<string | null | undefined>): boolean {
  const q = term.trim().toLowerCase();
  if (!q) return true;
  return fields.some((f) => f?.toLowerCase().includes(q));
}
