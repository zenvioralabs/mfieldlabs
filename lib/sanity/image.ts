import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImage } from "@/lib/blog/types";
import { sanityConfig } from "./env";

const builder = createImageUrlBuilder({
  projectId: sanityConfig.projectId,
  dataset: sanityConfig.dataset,
});

/** True when the image object carries an asset reference we can build a URL from. */
export function hasImageAsset(image?: SanityImage | null): image is SanityImage {
  return Boolean(image?.asset?._ref || image?.asset?._id);
}

export function urlFor(image: SanityImage) {
  return builder.image(image).auto("format").fit("max");
}

/** Reads intrinsic dimensions from an asset ref like `image-<id>-1024x884-jpg`. */
export function getImageDimensions(image: SanityImage): { width: number; height: number } {
  const ref = image.asset?._ref ?? image.asset?._id ?? "";
  const match = ref.match(/-(\d+)x(\d+)-/);
  if (!match) return { width: 1600, height: 900 };
  return { width: Number(match[1]), height: Number(match[2]) };
}
