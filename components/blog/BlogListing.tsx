"use client";

import * as React from "react";
import { Search, X } from "lucide-react";
import FeaturedBlogCard from "./FeaturedBlogCard";
import RecentBlogCard from "./RecentBlogCard";
import { matchesSearch } from "@/lib/blog/utils";
import type { PostListItem } from "@/lib/blog/types";

interface BlogListingProps {
  featured: PostListItem | null;
  recent: PostListItem[];
  /** Every published post — the search index. */
  all: PostListItem[];
}

export default function BlogListing({ featured, recent, all }: BlogListingProps) {
  const [query, setQuery] = React.useState("");
  const deferredQuery = React.useDeferredValue(query);
  const searching = deferredQuery.trim().length > 0;

  const results = React.useMemo(
    () => (searching ? all.filter((p) => matchesSearch(deferredQuery, p.title, p.excerpt)) : recent),
    [searching, deferredQuery, all, recent]
  );

  if (!featured) {
    return <p className="py-24 text-center text-[15px] text-ink/65 md:text-base">No blogs have been published yet.</p>;
  }

  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,1.03fr)_minmax(0,1fr)] lg:gap-14">
      {/* Left: featured + search */}
      <div className="min-w-0">
        <FeaturedBlogCard post={featured} />

        <form role="search" onSubmit={(e) => e.preventDefault()} className="relative mt-10 sm:mt-16">
          <label htmlFor="blog-search" className="sr-only">
            Search for Blogs
          </label>
          <Search className="pointer-events-none absolute left-6 top-1/2 h-5 w-5 -translate-y-1/2 text-ink/35 sm:hidden" aria-hidden="true" />
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for Blogs"
            autoComplete="off"
            className="h-14 w-full rounded-full bg-[#F1F1F1] pl-14 pr-14 text-[15px] text-ink outline-none transition placeholder:text-ink/40 focus-visible:ring-2 focus-visible:ring-deepblue/40 sm:h-16 sm:px-8 md:text-base [&::-webkit-search-cancel-button]:hidden"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Clear search"
              className="absolute right-5 top-1/2 grid h-9 w-9 -translate-y-1/2 place-items-center rounded-full text-ink/50 transition hover:bg-black/5 hover:text-ink"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          )}
        </form>
      </div>

      {/* Right: recent posts / search results — scrolls independently on desktop */}
      <section aria-label={searching ? "Search results" : "Recent blogs"} className="relative min-w-0">
        <p className="sr-only" aria-live="polite">
          {searching ? `${results.length} ${results.length === 1 ? "result" : "results"} found` : ""}
        </p>
        <div data-lenis-prevent className="blog-scroll lg:absolute lg:inset-0 lg:overflow-y-scroll lg:pr-6">
          {results.length > 0 ? (
            <ul className="border-t border-ink/15 lg:border-t-0">
              {results.map((post) => (
                <RecentBlogCard key={post._id} post={post} />
              ))}
            </ul>
          ) : (
            <div className="rounded-[24px] bg-[#F1F1F1] px-6 py-12 text-center lg:mt-2">
              {searching ? (
                <>
                  <p className="font-display text-base font-extrabold text-ink">No blogs match &ldquo;{deferredQuery.trim()}&rdquo;</p>
                  <p className="mt-2 text-[13px] leading-5 text-ink/65">Try a different keyword, or clear the search.</p>
                  <button type="button" onClick={() => setQuery("")} className="outline-pill mt-6">
                    Clear search
                  </button>
                </>
              ) : (
                <p className="text-[13px] text-ink/65">More articles are coming soon.</p>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
