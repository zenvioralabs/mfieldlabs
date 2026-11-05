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
    <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-4 sm:max-w-[520px]">
      {name && (
        <div className="flex items-center gap-3.5">
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
          <span>
            <span className="block font-display text-sm font-extrabold text-ink">{name}</span>
            {author?.designation && <span className="block text-[13px] leading-5 text-ink/65">{author.designation}</span>}
          </span>
        </div>
      )}
      {date && (
        <time dateTime={publishedAt} className="text-[13px] font-medium text-ink/70">
          {date}
        </time>
      )}
    </div>
  );
}
