import Link from "next/link";
import BlogCoverImage from "./BlogCoverImage";
import type { PostListItem } from "@/lib/blog/types";

export default function FeaturedBlogCard({ post }: { post: PostListItem }) {
  return (
    <article>
      <Link href={`/blogs/${post.slug}`} className="group block rounded-[32px] focus-visible:outline-offset-4">
        <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] bg-navy sm:rounded-[36px] lg:rounded-[44px]">
          <BlogCoverImage
            image={post.coverImage}
            fallbackAlt={post.title}
            sizes="(min-width: 1024px) 50vw, 100vw"
            priority
            className="transition-transform duration-700 ease-out group-hover:scale-[1.02]"
          />
        </div>

        <span className="soft-pill mt-8 inline-flex font-semibold !text-ink/70 sm:mt-10">Featured</span>

        <h2 className="mt-4 font-display text-[1.5rem] font-extrabold leading-[1.1] tracking-[-0.025em] text-ink transition-colors group-hover:text-deepblue lg:text-[1.85rem]">
          {post.title}
        </h2>
      </Link>

      {post.excerpt && <p className="mt-4 line-clamp-3 max-w-xl text-[15px] leading-7 text-ink/65 md:text-base">{post.excerpt}</p>}
    </article>
  );
}
