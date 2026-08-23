"use client";

import Image from "next/image";
import { differentiators, differentiatorsSection } from "@/content/differentiators";
import WordReveal from "@/components/motion/WordReveal";

export default function Differentiators() {
  return (
    <section id="why-choose-us" className="scroll-mt-28 bg-white px-6 py-20 text-ink md:px-16 xl:min-h-screen xl:py-4">
      <div className="container">
        <p className="eyebrow mb-5" style={{ color: "#38bdf8" }}>
          {differentiatorsSection.eyebrow}
        </p>
        <h2 className="mb-3 max-w-2xl font-display text-4xl font-bold leading-[1.1] xl:text-3xl">
          <WordReveal text={differentiatorsSection.title} />
        </h2>
        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-ink/60 xl:mb-4 xl:text-base">
          {differentiatorsSection.description}
        </p>

        <div className="divide-y divide-ink/10 border-t border-ink/10 bg-white">
          {differentiators.map((d) => (
            <div
              key={d.n}
              className="differentiator-row group flex flex-col gap-4 bg-white py-5 transition-colors hover:bg-lightgray/60 sm:flex-row sm:items-center sm:gap-6 xl:gap-3 xl:py-1.5"
            >
              <span className="font-mono text-xl text-deepblue md:text-2xl">{d.n}</span>
              <div className="min-w-0 flex-1">
                <h3 className="mb-1 font-display text-lg font-semibold text-ink md:text-xl">
                  {d.title}
                </h3>
                <p className="max-w-2xl text-sm leading-relaxed text-ink/55 md:text-base">{d.body}</p>
                <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink/70">{d.narrative}</p>
                  </div>
                </div>
              </div>
              <div className="relative right-3 hidden h-14 w-24 shrink-0 origin-right overflow-hidden rounded-xl transition-transform duration-500 ease-out group-hover:z-10 group-hover:scale-125 sm:block">
                <Image
                  src={d.image}
                  alt=""
                  fill
                  sizes="8rem"
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
