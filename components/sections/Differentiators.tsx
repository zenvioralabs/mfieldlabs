"use client";

import * as React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { differentiators, differentiatorsSection } from "@/content/differentiators";
import CapabilityModal from "@/components/ui/CapabilityModal";
import WordReveal from "@/components/motion/WordReveal";

export default function Differentiators() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const active = openIndex !== null ? differentiators[openIndex] : null;

  return (
    <section id="why-choose-us" className="scroll-mt-28 bg-white px-6 py-20 text-ink md:px-16 xl:min-h-screen xl:py-4">
      <div className="container">
        <p className="eyebrow mb-5 text-deepblue">
          {differentiatorsSection.eyebrow}
        </p>
        <h2 className="mb-3 max-w-2xl font-display text-4xl font-bold leading-[1.1] xl:text-3xl">
          <WordReveal text={differentiatorsSection.title} />
        </h2>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-ink/60 xl:mb-4 xl:text-base">
          {differentiatorsSection.description}
        </p>

        <div className="mb-6 h-px w-full bg-sky" />

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
          {differentiators.map((d, i) => (
            <button
              key={d.n}
              type="button"
              onClick={() => setOpenIndex(i)}
              className="group flex min-h-[480px] flex-col rounded-[20px] border border-ink/10 bg-white p-6 text-left text-ink shadow-[0_18px_50px_rgba(17,24,39,0.08)] transition-shadow duration-300 hover:shadow-[0_28px_70px_rgba(10,102,255,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky md:min-h-[480px] xl:min-h-[420px]"
            >
              <h3 className="font-display text-xl font-bold leading-tight text-deepblue">{d.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{d.body}</p>
              <div className="mt-5 border-t border-ink/10 pt-5">
                <p className="line-clamp-6 text-xs leading-relaxed text-ink/70">{d.narrative}</p>
              </div>
              <div className="mt-auto flex items-center justify-between border-t border-ink/10 pt-5">
                <span className="text-xs font-semibold text-ink/70">Explore</span>
                <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/20 transition-colors group-hover:border-deepblue group-hover:bg-deepblue group-hover:text-white">
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {active ? (
        <CapabilityModal
          open={openIndex !== null}
          onClose={() => setOpenIndex(null)}
          icon={Sparkles}
          title={active.title}
          tagline={active.body}
          body={active.narrative}
          impactAreas={[]}
          outcomes={[]}
          image={active.image}
        />
      ) : null}
    </section>
  );
}
