// `next-sanity`'s root entry re-exports @portabletext/react@7, which requires React 19.
// This project is on React 18, so the client is created from @sanity/client directly
// (the same client next-sanity wraps). No read token is used; the dataset is public.
import { createClient } from "@sanity/client";
import { sanityConfig } from "./env";

export const client = createClient({
  ...sanityConfig,
  useCdn: false,
});
