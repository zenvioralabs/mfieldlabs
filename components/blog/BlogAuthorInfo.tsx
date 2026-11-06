import Image from "next/image";
import { hasImageAsset, urlFor } from "@/lib/sanity/image";
import { formatPublishedDate } from "@/lib/blog/utils";
import type { PostAuthor } from "@/lib/blog/types";

export default function BlogAuthorInfo({ author, publishedAt }: { author?: PostAuthor | null; publishedAt?: string }) {
  const name = author?.name?.trim();
  const date = formatPublishedDate(publishedAt);
  const avatar = author?.profileImage;
  if (!name && !date) return null;

  const initials = name
    ? name
        .split(/\s+/)
        .slice(0, 2)
        .map((w) => w[0]?.toUpperCase())
        .join("")
    : "";

  return (
    <div className="flex items-center gap-3.5">
      {name && (
        <span className="relative grid h-11 w-11 shrink-0 place-items-center overflow-hidden rounded-full bg-navy text-xs font-bold text-white">
            {hasImageAsset(avatar) ? (
              <Image
                src={urlFor(avatar).width(120).height(120).fit("crop").url()}
                alt={avatar.alt?.trim() || name}
                fill
                sizes="44px"
                className="object-cover"
              />
            ) : (
              <span aria-hidden="true">{initials}</span>
            )}
        </span>
      )}
      <span className="min-w-0">
        {name && <span className="block font-display text-sm font-extrabold text-ink">{name}</span>}
        <span className="block text-[13px] leading-5 text-ink/65">
          {author?.designation && <span>{author.designation}</span>}
          {author?.designation && date && <span aria-hidden="true"> · </span>}
          {date && <time dateTime={publishedAt}>{date}</time>}
        </span>
      </span>
    </div>
  );
}
