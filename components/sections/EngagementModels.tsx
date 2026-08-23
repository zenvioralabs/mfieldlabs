"use client";

import * as React from "react";
import { Badge } from "@/components/ui/badge";
import ProgressBar from "@/components/ui/ProgressBar";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { engagementModels, deliveryModels, engagementModelsSection } from "@/content/engagementModels";
import WordReveal from "@/components/motion/WordReveal";

export default function EngagementModels() {
  const rootRef = React.useRef<HTMLDivElement>(null);
  const cardsRef = React.useRef<HTMLDivElement>(null);
  const progressFillRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px) and (prefers-reduced-motion: no-preference)", () => {
        const row = cardsRef.current;
        if (!row) return;
        const cards = gsap.utils.toArray<HTMLElement>(row.children);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "+=120%",
            scrub: 0.5,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, i) => {
          tl.fromTo(
            card,
            {
              x: () => {
                const rowRect = row.getBoundingClientRect();
                const cardRect = card.getBoundingClientRect();
                return rowRect.left + rowRect.width / 2 - (cardRect.left + cardRect.width / 2);
              },
              scale: 0.85,
              zIndex: cards.length - Math.abs(i - (cards.length - 1) / 2),
            },
            { x: 0, scale: 1, ease: "power2.out", duration: 0.6 },
            i * 0.35
          );
        });

        return () => {
          gsap.set(cards, { clearProps: "transform,zIndex" });
        };
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <section id="engagement-models" ref={rootRef} className="bg-white py-28 px-6 md:px-16">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <p className="eyebrow mb-5">{engagementModelsSection.eyebrow}</p>
          <h2 className="font-display font-bold text-4xl leading-[1.1] text-ink mb-4">
            <WordReveal text={engagementModelsSection.title} />
          </h2>
          <p className="text-lg text-ink/60 leading-relaxed">{engagementModelsSection.description}</p>
        </div>

        <div id="engagement-models-progress" className="scroll-mt-28">
          <ProgressBar fillRef={progressFillRef} className="mb-14" />
        </div>

        <div ref={cardsRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {engagementModels.map((m) => (
            <div
              key={m.title}
              className="flex h-full flex-col rounded-2xl border border-ink/8 bg-white p-7 shadow-[0_1px_2px_rgba(17,24,39,0.04)]"
            >
              <h3 className="font-display font-semibold text-lg text-ink mb-3">{m.title}</h3>
              <p className="text-sm text-ink/60 leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-12">
          <p className="text-sm font-semibold text-ink/50 mb-4">Delivery &amp; Commercial Models</p>
          <div className="flex flex-wrap gap-3">
            {deliveryModels.map((d) => (
              <Badge key={d}>{d}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
