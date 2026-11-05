import Image from "next/image";
import { cn } from "@/lib/utils";
import { hasImageAsset, urlFor } from "@/lib/sanity/image";
import type { SanityImage } from "@/lib/blog/types";

interface BlogCoverImageProps {
  image?: SanityImage | null;
  fallbackAlt: string;
  sizes: string;
  /** Max pixel width requested from the Sanity CDN. */
  width?: number;
  priority?: boolean;
  className?: string;
}

/** Fills its (relatively positioned, sized) parent. Shows a neutral brand panel when no image is set. */
export default function BlogCoverImage({ image, fallbackAlt, sizes, width = 1600, priority, className }: BlogCoverImageProps) {
  if (!hasImageAsset(image)) {
    return (
      <div className={cn("absolute inset-0 grid place-items-center bg-navy", className)} aria-hidden="true">
        <div className="relative h-10 w-10 opacity-40">
          <Image src="/logo/mfield-white.png" alt="" fill sizes="40px" className="object-contain" />
        </div>
      </div>
    );
  }

  return (
    <Image
      src={urlFor(image).width(width).url()}
      alt={image.alt?.trim() || fallbackAlt}
      fill
      sizes={sizes}
      priority={priority}
      className={cn("object-cover", className)}
    />
  );
}
