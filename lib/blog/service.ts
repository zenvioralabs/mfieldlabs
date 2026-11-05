import { client } from "@/lib/sanity/client";
import { ALL_POSTS_QUERY, BLOG_DETAIL_QUERY, FEATURED_POST_QUERY, POST_SLUGS_QUERY } from "@/lib/sanity/queries";
import type { PostDetail, PostListItem } from "./types";

const fetchOptions = { next: { revalidate: 60 } };

export async function getAllPosts(): Promise<PostListItem[]> {
  return (await client.fetch<PostListItem[]>(ALL_POSTS_QUERY, {}, fetchOptions)) ?? [];
}

export async function getFeaturedPost(): Promise<PostListItem | null> {
  return client.fetch<PostListItem | null>(FEATURED_POST_QUERY, {}, fetchOptions);
}

export async function getPostBySlug(slug: string): Promise<PostDetail | null> {
  return client.fetch<PostDetail | null>(BLOG_DETAIL_QUERY, { slug }, fetchOptions);
}

export async function getPostSlugs(): Promise<string[]> {
  return (await client.fetch<string[]>(POST_SLUGS_QUERY, {}, fetchOptions)) ?? [];
}

/**
 * Everything the listing page needs: the featured post (falls back to the
 * latest post when none is flagged), the remaining posts for the recent list
 * (newest first), and the full list used as the search index.
 */
export async function getBlogListing() {
  const [featuredFlagged, all] = await Promise.all([getFeaturedPost(), getAllPosts()]);
  const featured = featuredFlagged ?? all[0] ?? null;
  const others = featured ? all.filter((p) => p._id !== featured._id) : all;
  // Keep the recent column populated: if the featured post is the only one, list it there too.
  const recent = others.length ? others : all;
  return { featured, recent, all };
}
