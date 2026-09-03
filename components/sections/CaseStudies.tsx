"use client";

import * as React from "react";
import Image from "next/image";
import CaseStudyModal, { type CaseStudyDetail } from "@/components/ui/CaseStudyModal";

const cases: CaseStudyDetail[] = [
  {
    image: "/images/CASE-STUDY-1-IMAGE.jpg",
    title: "Getting Leadership One Set of Numbers They Could Trust",
    tagline: "Illustrative example, professional services",
    situation:
      "A growing professional services firm was closing out its month on spreadsheets pulled from three different systems, with each department reporting slightly different numbers.",
    approach:
      "Build a single dashboard pulling directly from the firm's existing systems, so leadership sees the same numbers, updated automatically.",
    outcome:
      "A monthly close-out process that used to take most of a week, down to a few hours, with everyone working from the same numbers.",
  },
  {
    image: "/images/CASE-STUDY-2-IMAGE.jpg",
    title: "Freeing Up a Full Day a Week of Manual Work",
    tagline: "Illustrative example, distribution and logistics",
    situation:
      "A regional distribution company had one employee spending most of each day manually re-entering order and invoice data between systems, with errors slipping through during busy periods.",
    approach:
      "Connect the systems directly and automate the handoff, with exceptions flagged for a person to review instead of every order requiring manual entry.",
    outcome:
      "A meaningful chunk of a staff member's week freed up, and fewer errors reaching the accounting team.",
  },
  {
    image: "/images/CASE-STUDY-3-IMAGE.jpg",
    title: "Adopting AI Without the Hype",
    tagline: "Illustrative example, legal or financial services",
    situation:
      "A mid-size firm's leadership was under pressure to \"do something with AI,\" but wary of tools that overpromised or didn't fit how the team actually worked.",
    approach:
      "A short assessment of where AI would actually save time, a governed rollout of Microsoft Copilot, and no recommendation in the areas where AI wasn't the right fit yet.",
    outcome:
      "A small, well-governed set of AI tools the team actually uses, instead of a broad rollout nobody adopts.",
  },
];

export default function CaseStudies() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const active = openIndex !== null ? cases[openIndex] : null;

  return (
    <section id="case-studies" className="bg-white px-5 py-16 pt-24 sm:px-8 sm:pt-28 md:px-12 lg:px-16 lg:py-20 lg:pt-32">
      <div className="mx-auto max-w-[1160px]">
        <p className="eyebrow mb-4">CASE STUDIES</p>
        <h2 className="section-heading-with-rule mb-7">Turning Challenges Into Success Stories</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {cases.map((item, index) => (
            <article key={item.title} className="case-card cursor-pointer" onClick={() => setOpenIndex(index)}>
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <Image src={item.image} alt="" fill sizes="(min-width: 768px) 36vw, 100vw" className="object-cover" />
              </div>
              <h3>{item.title}</h3>
              <p>{item.situation}</p>
              <button type="button" onClick={(e) => { e.stopPropagation(); setOpenIndex(index); }}>Read More&gt;&gt;</button>
            </article>
          ))}
        </div>
      </div>

      <CaseStudyModal open={openIndex !== null} onClose={() => setOpenIndex(null)} study={active} />
    </section>
  );
}

