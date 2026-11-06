"use client";

import Link from "next/link";

export default function BlogsError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="grid min-h-[70vh] place-items-center px-5 pb-20 pt-32 text-center">
      <div>
        <h1 className="section-title">We couldn&rsquo;t load the blogs</h1>
        <p className="mt-4 text-[15px] leading-7 text-ink/65 md:text-base">Please try again in a moment.</p>
        <div className="mt-8 flex justify-center gap-3">
          <button type="button" onClick={reset} className="blue-pill">
            Try again
          </button>
          <Link href="/" className="outline-pill">
            Go home
          </Link>
        </div>
      </div>
    </main>
  );
}
