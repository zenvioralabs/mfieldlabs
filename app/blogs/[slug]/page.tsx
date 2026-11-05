import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ScrollToTopButton from "@/components/layout/ScrollToTopButton";
import BlogHero from "@/components/blog/BlogHero";
import BlogTableOfContents from "@/components/blog/BlogTableOfContents";
import PortableTextContent from "@/components/blog/PortableTextContent";
import BlogFAQ, { FAQ_SECTION_ID, hasFaqContent } from "@/components/blog/BlogFAQ";
import { getPostBySlug, getPostSlugs } from "@/lib/blog/service";
import { generateHeadingIds } from "@/lib/blog/utils";
import { hasImageAsset, urlFor } from "@/lib/sanity/image";

export const revalidate = 60;

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);
  if (!post) return { title: "Blog not found — Mfieldlabs" };

  const title = post.seo?.metaTitle?.trim() || post.title;
  const description = post.seo?.metaDescription?.trim() || post.excerpt || undefined;
  const ogSource = hasImageAsset(post.seo?.ogImage) ? post.seo?.ogImage : post.coverImage;
  const ogImage = hasImageAsset(ogSource) ? urlFor(ogSource).width(1200).height(630).fit("crop").url() : undefined;
  const url = `/blogs/${post.slug}`;

  return {
    title: `${title} — Mfieldlabs`,
    description,
    alternates: { canonical: post.seo?.canonicalUrl || url },
    robots: post.seo?.noIndex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "article",
      title,
      description,
      url,
      publishedTime: post.publishedAt,
      modifiedTime: post._updatedAt,
      authors: post.author?.name ? [post.author.name] : undefined,
      images: ogImage ? [{ url: ogImage, width: 1200, height: 630, alt: post.coverImage?.alt || post.title }] : undefined,
    },
    twitter: { card: ogImage ? "summary_large_image" : "summary", title, description, images: ogImage ? [ogImage] : undefined },
  };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) notFound();

  const showFaq = hasFaqContent(post.faq);
  const { ids, toc } = generateHeadingIds(post.body, showFaq ? [FAQ_SECTION_ID] : []);
  if (showFaq) toc.push({ id: FAQ_SECTION_ID, text: "Frequently Asked Questions", level: 2 });

  return (
    <>
      <main className="blog-page bg-[#F4F4F4] px-5 pb-20 pt-28 sm:px-8 sm:pt-32 md:px-12 lg:px-16 lg:pb-28 lg:pt-40">
        <article className="mx-auto max-w-[1240px]">
          <BlogHero post={post} />

          <div
            className={
              toc.length
                ? "mt-16 grid gap-10 lg:mt-24 lg:grid-cols-[minmax(0,300px)_minmax(0,1fr)] lg:gap-16 xl:gap-24"
                : "mx-auto mt-16 max-w-[860px] lg:mt-24"
            }
          >
            {toc.length > 0 && (
              <aside className="lg:sticky lg:top-28 lg:self-start">
                <BlogTableOfContents items={toc} />
              </aside>
            )}
            <div className="min-w-0">
              <PortableTextContent value={post.body} headingIds={ids} />
              {showFaq && <BlogFAQ faq={post.faq} />}
            </div>
          </div>
        </article>
      </main>
      <ScrollToTopButton />
    </>
  );
}
