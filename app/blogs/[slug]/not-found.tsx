import Link from "next/link";

export default function BlogNotFound() {
  return (
    <>
      <main className="grid min-h-[70vh] place-items-center bg-[#F4F4F4] px-5 pb-20 pt-32 text-center">
        <div>
          <h1 className="section-title">Blog not found</h1>
          <p className="mt-4 text-[15px] leading-7 text-ink/65 md:text-base">This article may have been moved or is no longer available.</p>
          <Link href="/blogs" className="outline-pill mt-8">
            Back to Blogs
          </Link>
        </div>
      </main>
    </>
  );
}
