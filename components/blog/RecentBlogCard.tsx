import Link from "next/link";
import BlogCoverImage from "./BlogCoverImage";
import type { PostListItem } from "@/lib/blog/types";

export default function RecentBlogCard({ post }: { post: PostListItem }) {
  return (
    <li className="border-b border-ink/15">
      <Link
        href={`/blogs/${post.slug}`}
        className="group grid grid-cols-[1fr_7.5rem] items-center gap-4 py-6 sm:grid-cols-[1fr_11rem] sm:gap-8 sm:px-6 xl:grid-cols-[1fr_13rem] xl:gap-10"
      >
        <div className="min-w-0">
          <h3 className="line-clamp-2 font-display text-[15px] font-extrabold leading-[1.25] tracking-[-0.01em] text-ink transition-colors group-hover:text-deepblue sm:text-base lg:text-[1.1rem]">
            {post.title}
          </h3>
          {post.excerpt && <p className="mt-2 line-clamp-3 text-[13px] leading-5 text-ink/70">{post.excerpt}</p>}
        </div>
        <div className="relative aspect-[16/9] overflow-hidden rounded-[14px] bg-navy sm:rounded-[18px]">
          <BlogCoverImage image={post.coverImage} fallbackAlt={post.title} sizes="(min-width: 1280px) 208px, (min-width: 640px) 176px, 120px" width={480} />
        </div>
      </Link>
    </li>
  );
}
