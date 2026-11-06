import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import BlogAuthorInfo from "./BlogAuthorInfo";
import BlogCoverImage from "./BlogCoverImage";
import type { PostDetail } from "@/lib/blog/types";

export default function BlogHero({ post }: { post: PostDetail }) {
  return (
    <header>
      <div className="flex flex-col-reverse gap-6 sm:flex-row sm:items-start sm:justify-between sm:gap-10">
        <h1 className="max-w-[860px] font-display text-[2.1rem] font-extrabold leading-[1.02] tracking-[-0.045em] text-ink sm:text-[2.75rem] lg:text-[3.4rem]">
          {post.title}
        </h1>
        <Link
          href="/blogs"
          className="inline-flex shrink-0 items-center gap-[.55rem] self-start rounded-full bg-white px-[1.15rem] py-[.72rem] text-xs font-bold text-ink shadow-[0_1px_2px_rgba(17,24,39,.04)] transition hover:text-deepblue sm:mt-2"
        >
          Back to Blogs
          <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:gap-14">
        <div className="order-2 flex flex-col justify-start gap-7 lg:order-1">
          {post.excerpt && <p className="max-w-xl whitespace-pre-line text-[15px] leading-7 text-ink/65 md:text-base">{post.excerpt}</p>}
          <BlogAuthorInfo author={post.author} publishedAt={post.publishedAt} />
        </div>

        <div className="relative order-1 aspect-[16/9] overflow-hidden rounded-[24px] bg-navy sm:rounded-[32px] lg:order-2 lg:aspect-[1.8/1]">
          <BlogCoverImage image={post.coverImage} fallbackAlt={post.title} sizes="(min-width: 1024px) 50vw, 100vw" priority />
        </div>
      </div>
    </header>
  );
}
