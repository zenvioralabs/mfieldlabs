"use client";

import * as React from "react";
import { engagementModels, engagementModelsSection } from "@/content/engagementModels";
import WordReveal from "@/components/motion/WordReveal";

export default function EngagementModels() {
  const rootRef = React.useRef<HTMLDivElement>(null);

  return (
    <section id="engagement-models" ref={rootRef} className="bg-white pb-28 pt-16 px-6 md:px-16 md:pt-20">
      <div className="container">
        <div className="mb-10 max-w-2xl">
          <p className="eyebrow mb-5 text-base">{engagementModelsSection.eyebrow}</p>
          <h2 className="mb-4 font-display text-4xl font-bold leading-[1.05] text-ink md:text-5xl">
            <WordReveal text={engagementModelsSection.title} />
          </h2>
          <p className="text-base leading-relaxed text-ink/60">{engagementModelsSection.description}</p>
        </div>

        <div className="mb-8 h-px w-full bg-ink/15" />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {engagementModels.map((m) => (
            <div
              key={m.title}
              className="flex min-h-[260px] h-full flex-col rounded-xl border border-ink/10 bg-white p-7 shadow-[0_12px_30px_rgba(17,24,39,0.08)]"
            >
              <h3 className="mb-4 font-display text-base font-semibold text-blue">{m.title}</h3>
              <p className="text-base leading-relaxed text-ink/60">{m.body}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
