import type { Metadata } from "next";
import BlogListing from "@/components/blog/BlogListing";
import { getBlogListing } from "@/lib/blog/service";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Blogs — Mfieldlabs",
  description: "Articles and insights from Mfieldlabs.",
  alternates: { canonical: "/blogs" },
  openGraph: { title: "Blogs — Mfieldlabs", description: "Articles and insights from Mfieldlabs.", type: "website", url: "/blogs" },
};

export default async function BlogsPage() {
  const { featured, recent, all } = await getBlogListing();

  return (
    <>
      <main className="blog-page bg-white px-5 pb-20 pt-28 sm:px-8 sm:pt-32 md:px-12 lg:px-16 lg:pb-28 lg:pt-32">
        <h1 className="sr-only">Mfieldlabs Blogs</h1>
        <div className="mx-auto max-w-[1440px]">
          <BlogListing featured={featured} recent={recent} all={all} />
        </div>
      </main>
    </>
  );
}
