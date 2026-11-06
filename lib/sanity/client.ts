// Created from @sanity/client directly (the client next-sanity wraps). `next-sanity` is not
// used: it requires the full Sanity Studio as a peer dependency, which pulled in the Sanity
// CLI and its vulnerable transitive packages. No read token is used; the dataset is public.
import { createClient } from "@sanity/client";
import { sanityConfig } from "./env";

export const client = createClient({
  ...sanityConfig,
  useCdn: false,
});
