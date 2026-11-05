import { ChevronDown } from "lucide-react";
import PortableTextContent from "./PortableTextContent";
import type { PostFaqItem } from "@/lib/blog/types";

export const FAQ_SECTION_ID = "frequently-asked-questions";

export function hasFaqContent(faq?: PostFaqItem[] | null): faq is PostFaqItem[] {
  return Boolean(faq?.some((f) => f.question?.trim()));
}

export default function BlogFAQ({ faq }: { faq?: PostFaqItem[] | null }) {
  if (!hasFaqContent(faq)) return null;
  const items = faq.filter((f) => f.question?.trim());

  return (
    <section aria-labelledby={FAQ_SECTION_ID} className="mt-16">
      <div className="blog-article">
        <h2 id={FAQ_SECTION_ID} tabIndex={-1}>
          Frequently Asked Questions
        </h2>
      </div>
      <div className="mt-6 divide-y divide-ink/15 rounded-[24px] bg-white px-6 shadow-[0_4px_18px_rgba(17,24,39,.06)] sm:px-8">
        {items.map((item, i) => (
          <details key={item._key ?? i} className="group py-5">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-[15px] font-extrabold leading-snug text-ink marker:hidden [&::-webkit-details-marker]:hidden">
              {item.question}
              <ChevronDown className="mt-0.5 h-4 w-4 shrink-0 text-deepblue transition-transform group-open:rotate-180" aria-hidden="true" />
            </summary>
            <div className="mt-3 text-[.92rem] leading-[1.85] text-ink/80">
              {typeof item.answer === "string" ? (
                <p className="whitespace-pre-line">{item.answer}</p>
              ) : (
                <PortableTextContent value={item.answer} className="blog-article--compact" />
              )}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
