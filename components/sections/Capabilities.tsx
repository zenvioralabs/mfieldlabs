"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database, Workflow, LayoutPanelLeft, Sparkles } from "lucide-react";
import { capabilities, capabilitiesSection, type CapabilityIcon } from "@/content/capabilities";
import CapabilityModal from "@/components/ui/CapabilityModal";
import WordReveal from "@/components/motion/WordReveal";

const ICONS: Record<CapabilityIcon, typeof Database> = {
  database: Database,
  workflow: Workflow,
  layout: LayoutPanelLeft,
  sparkles: Sparkles,
};

export default function Capabilities() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const active = openIndex !== null ? capabilities[openIndex] : null;
  const ActiveIcon = active ? ICONS[active.icon] : null;

  return (
    <section
      id="services"
      className="scroll-mt-28 overflow-hidden bg-white px-6 pb-24 pt-28 md:px-16 xl:pb-12 xl:pt-16"
    >
      <div className="container">
        <div className="mb-10 max-w-2xl xl:mb-6">
          <p className="eyebrow mb-5">{capabilitiesSection.eyebrow}</p>
          <h2 className="mb-4 font-display text-4xl font-bold leading-[1.05] text-ink md:text-5xl">
            <WordReveal text={capabilitiesSection.heading} />
          </h2>
          <p className="text-base leading-relaxed text-ink/60">
            {capabilitiesSection.description}
          </p>
        </div>
      </div>

      <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-6 pt-2 xl:justify-center xl:gap-4 xl:overflow-visible xl:px-0 xl:pb-2 xl:pt-0 xl:snap-none">
        {capabilities.map((c, i) => {
          const Icon = ICONS[c.icon];
          return (
            <div key={c.n} className="capability-card flex shrink-0 snap-start">
              <motion.button
                type="button"
                onClick={() => setOpenIndex(i)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group flex min-h-[380px] w-[280px] flex-col rounded-[20px] border border-ink/10 bg-white p-6 text-left text-ink shadow-[0_18px_50px_rgba(17,24,39,0.08)] transition-shadow duration-300 hover:shadow-[0_28px_70px_rgba(10,102,255,0.16)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky md:w-[300px] xl:min-h-[340px] xl:w-[320px] xl:p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold leading-tight xl:text-xl">{c.title}</h3>
                  </div>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-deepblue/15 bg-deepblue/5 text-deepblue">
                    <Icon className="h-4 w-4" aria-hidden="true" />
                  </span>
                </div>

                <div className="mt-5 border-t border-ink/10 pt-5">
                  <ul className="space-y-3">
                    {c.impactAreas.map((area) => (
                      <li key={area} className="flex items-start gap-2 text-sm leading-snug text-ink/70">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky" aria-hidden="true" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-ink/10 pt-5">
                  <span className="text-xs font-semibold text-ink/70">Explore</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-ink/20 transition-colors group-hover:border-deepblue group-hover:bg-deepblue group-hover:text-white">
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                </div>
              </motion.button>
            </div>
          );
        })}
      </div>

      {active && ActiveIcon ? (
        <CapabilityModal
          open={openIndex !== null}
          onClose={() => setOpenIndex(null)}
          icon={ActiveIcon}
          title={active.title}
          tagline={active.tagline}
          body={active.body}
          impactAreas={active.impactAreas}
          outcomes={active.outcomes}
          image={active.image}
        />
      ) : null}
    </section>
  );
}
