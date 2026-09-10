"use client";

import { differentiators, differentiatorsSection } from "@/content/differentiators";
import WordReveal from "@/components/motion/WordReveal";

export default function Differentiators() {
  return (
    <section id="why-choose-us" className="scroll-mt-28 bg-white px-6 py-20 text-ink md:px-16">
      <div className="container">
        <p className="eyebrow mb-5">
          {differentiatorsSection.eyebrow}
        </p>
        <div className="mb-12 max-w-3xl">
          <h2 className="mb-5 font-display text-4xl font-bold leading-[1.1] md:text-5xl">
            <WordReveal text={differentiatorsSection.title} />
          </h2>
          <p className="text-lg leading-relaxed text-ink/65">{differentiatorsSection.description}</p>
        </div>

        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {differentiators.map((item) => (
            <a
              key={item.n}
              href="#contact"
              className="differentiator-row group flex flex-col gap-4 py-6 pl-4 transition-colors hover:bg-lightgray/60 sm:flex-row sm:items-center sm:gap-6 md:pl-6"
            >
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 font-display text-lg font-semibold text-ink md:text-xl">{item.title}</h3>
                <p className="max-w-2xl text-sm leading-relaxed text-ink/55 md:text-base">{item.body}</p>
                <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">{item.narrative}</p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
