"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { differentiators, differentiatorsSection } from "@/content/differentiators";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import WordReveal from "@/components/motion/WordReveal";

export default function Differentiators() {
  const listRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const rows = gsap.utils.toArray<HTMLElement>(".differentiator-row");
        rows.forEach((row) => {
          gsap.fromTo(
            row,
            { y: 60, scale: 0.96, opacity: 0.35 },
            {
              y: 0,
              scale: 1,
              opacity: 1,
              ease: "none",
              scrollTrigger: {
                trigger: row,
                start: "top 90%",
                end: "top 60%",
                scrub: true,
              },
            }
          );
        });
      });
      return () => mm.revert();
    },
    { scope: listRef }
  );

  return (
    <section id="why-choose-us" className="bg-navy py-28 px-6 md:px-16 text-white">
      <div className="container">
        <p className="eyebrow mb-5" style={{ color: "#38bdf8" }}>
          {differentiatorsSection.eyebrow}
        </p>
        <h2 className="font-display font-bold text-4xl leading-[1.1] mb-4 max-w-2xl">
          <WordReveal text={differentiatorsSection.title} />
        </h2>
        <p className="text-lg text-white/60 leading-relaxed mb-16 max-w-2xl">
          {differentiatorsSection.description}
        </p>

        <div ref={listRef} className="divide-y divide-white/10 border-t border-white/10">
          {differentiators.map((d) => (
            <a
              key={d.n}
              href="#contact"
              className="differentiator-row group flex flex-col gap-4 py-7 transition-colors hover:bg-white/[0.03] sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="font-mono text-xl text-deepblue/70 md:text-2xl">{d.n}</span>
              <div className="min-w-0 flex-1">
                <h3 className="font-display font-semibold text-lg md:text-xl text-white mb-1">
                  {d.title}
                </h3>
                <p className="text-sm md:text-base text-white/55 leading-relaxed max-w-2xl">{d.body}</p>
                <div className="grid grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr]">
                  <div className="overflow-hidden">
                    <p className="mt-3 max-w-2xl text-sm text-white/70 leading-relaxed">{d.narrative}</p>
                  </div>
                </div>
              </div>
              <div className="relative hidden h-20 w-32 shrink-0 overflow-hidden rounded-xl sm:block">
                <Image
                  src={d.image}
                  alt=""
                  fill
                  sizes="8rem"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />
              </div>
              <ArrowRight className="h-5 w-5 shrink-0 text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-white" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
