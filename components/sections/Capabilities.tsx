"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Database, Workflow, LayoutPanelLeft, Sparkles } from "lucide-react";
import { capabilities, capabilitiesSection, type CapabilityIcon } from "@/content/capabilities";
import CapabilityModal from "@/components/ui/CapabilityModal";
import WordReveal from "@/components/motion/WordReveal";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const ICONS: Record<CapabilityIcon, typeof Database> = {
  database: Database,
  workflow: Workflow,
  layout: LayoutPanelLeft,
  sparkles: Sparkles,
};

const DEFAULT_BG = "#F1F4F8";

const HOVER_TINTS: Record<CapabilityIcon, string> = {
  database: "#E9F1FF",
  workflow: "#E4F9F4",
  layout: "#F0EBFF",
  sparkles: "#E6F6FF",
};

export default function Capabilities() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const [bg, setBg] = React.useState(DEFAULT_BG);
  const active = openIndex !== null ? capabilities[openIndex] : null;
  const ActiveIcon = active ? ICONS[active.icon] : null;

  const sectionRef = React.useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1280px) and (prefers-reduced-motion: no-preference)", () => {
        const cards = gsap.utils.toArray<HTMLElement>(".capability-card");
        if (!cards.length) return;

        gsap.set(cards, { x: 480, opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "+=130%",
            scrub: 0.6,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, i) => {
          tl.to(card, { x: 0, opacity: 1, ease: "power2.out", duration: 0.6 }, i * 0.32);
        });

        return () => {
          gsap.set(cards, { clearProps: "transform,opacity" });
        };
      });
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      className="scroll-mt-28 overflow-hidden py-28 transition-colors duration-500"
      style={{ background: bg }}
    >
      <div className="container">
        <div className="max-w-2xl mb-14">
          <p className="eyebrow mb-5">{capabilitiesSection.eyebrow}</p>
          <h2 className="font-display font-bold text-4xl leading-[1.1] text-ink mb-4">
            <WordReveal text={capabilitiesSection.title} />
          </h2>
          <p className="text-lg text-ink/60 leading-relaxed">{capabilitiesSection.description}</p>
          <div className="mt-10 flex items-center gap-6">
            <span className="h-px flex-1 bg-gradient-to-r from-deepblue to-deepblue/5" />
            <span className="font-mono text-[10px] font-semibold tracking-[0.18em] text-ink/40">
              C_{String(capabilities.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>

      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-6 pt-2 md:px-16 xl:snap-none xl:overflow-visible xl:justify-center">
        {capabilities.map((c, i) => {
          const Icon = ICONS[c.icon];
          return (
            <div key={c.n} className="capability-card flex shrink-0 snap-start">
              <motion.button
                type="button"
                onClick={() => setOpenIndex(i)}
                onMouseEnter={() => setBg(HOVER_TINTS[c.icon])}
                onMouseLeave={() => setBg(DEFAULT_BG)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group flex min-h-[520px] w-[300px] flex-col rounded-[34px] bg-navy p-8 text-left text-white shadow-[0_28px_70px_rgba(0,0,0,0.14)] transition-shadow duration-300 hover:shadow-[0_35px_90px_rgba(10,102,255,0.22)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky md:w-[320px]"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="font-display font-bold text-2xl leading-tight">{c.title}</h3>
                    <p className="mt-2 text-sm font-semibold text-sky">{c.tagline}</p>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>

                <p className="mt-3 font-mono text-[10px] tracking-[0.16em] text-white/35">// {c.n}</p>

                <div className="mt-6 border-t border-white/10 pt-6">
                  <p className="text-sm leading-relaxed text-white/60">{c.businessOutcomes}</p>
                  <ul className="mt-5 space-y-2.5">
                    {c.impactAreas.map((area) => (
                      <li key={area} className="flex items-start gap-2 text-xs leading-relaxed text-white/70">
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-sky" aria-hidden="true" />
                        {area}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-xs font-semibold text-white/70">Explore</span>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/25 transition-colors group-hover:border-deepblue group-hover:bg-deepblue">
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
