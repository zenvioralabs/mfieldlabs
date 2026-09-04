"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowLeft, ArrowRight, Database, Workflow, LayoutPanelLeft, Sparkles } from "lucide-react";
import { capabilities, type CapabilityIcon } from "@/content/capabilities";
import CapabilityModal from "@/components/ui/CapabilityModal";

const ICONS: Record<CapabilityIcon, typeof Database> = {
  database: Database,
  workflow: Workflow,
  layout: LayoutPanelLeft,
  sparkles: Sparkles,
};

const CARD_POINTS: Record<string, string[]> = {
  "Data & Intelligence": [
    "Dashboards that show you what's happening, in real time",
    "One set of numbers your whole team trusts",
    "Reports that used to take you days, done automatically",
  ],
  "Automation & Operations": [
    "Automate repetitive work without rebuilding your operation",
    "Move information between systems without manual handoffs",
    "Create processes that keep moving when people are busy",
  ],
  "Digital Experiences & Software Engineering": [
    "Connected experiences for employees, customers, and partners",
    "Business applications built around how your teams actually work",
    "Modern integrations that remove workarounds and friction",
  ],
  "AI & Microsoft Innovation": [
    "Practical AI opportunities tied to measurable business value",
    "Microsoft Copilot adoption with the right guardrails",
    "AI assistants and intelligent workflows your teams can actually use",
  ],
};

export default function Capabilities() {
  const [active, setActive] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const reduced = useReducedMotion();
  const current = capabilities[active];
  const ActiveIcon = ICONS[current.icon];
  const points = CARD_POINTS[current.title] ?? current.impactAreas.slice(0, 3);

  const go = (direction: 1 | -1) => {
    setActive((index) => (index + direction + capabilities.length) % capabilities.length);
  };

  return (
    <section id="services" className="relative bg-white px-5 py-20 pb-32 sm:px-8 md:px-12 lg:px-16 lg:py-28 lg:pb-40">
      <div className="mx-auto max-w-[1160px]">
        <div className="mb-9">
          <p className="eyebrow mb-4">OUR CAPABILITIES</p>
          <h2 className="section-heading-with-rule">Areas We Help With</h2>
        </div>

        <div className="capability-stage">
          <div className="capability-card-column">
            <button className="cap-arrow cap-arrow-left" onClick={() => go(-1)} aria-label="Previous capability">
              <ArrowLeft className="h-5 w-5" />
            </button>

            <div className="capability-carousel-card">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={current.n}
                  initial={{ opacity: 0, x: reduced ? 0 : 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reduced ? 0 : -18 }}
                  transition={{ duration: reduced ? 0 : 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="h-full"
                >
                  <div className="flex h-full flex-col">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3>{current.title === "Data & Intelligence" ? "Data Intelligence:" : current.title}</h3>
                      </div>
                      <span className="capability-icon"><ActiveIcon className="h-6 w-6" /></span>
                    </div>
                    <ul className="capability-points">
                      {points.map((point) => <li key={point}>{point}</li>)}
                    </ul>
                    <button onClick={() => setOpen(true)} className="capability-explore max-w-[350px] justify-between">
                      Explore <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button className="cap-arrow cap-arrow-right" onClick={() => go(1)} aria-label="Next capability">
              <ArrowRight className="h-5 w-5" />
            </button>

            <div className="capability-dots" aria-label="Capability selector">
              {capabilities.map((capability, index) => (
                <button
                  key={capability.n}
                  onClick={() => setActive(index)}
                  aria-label={`Show ${capability.title}`}
                  aria-current={index === active}
                  className={index === active ? "is-active" : ""}
                />
              ))}
            </div>
          </div>

          <div className="capability-image-wrap">
            <Image
              src="/images/SERVICE-SEC-IMAGE.png"
              alt="Mfield Labs consultant using technology"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-contain object-center"
            />
          </div>

          <div className="capability-outcomes">
            <h3>What Would It Mean If...</h3>
            <ul>
              <li>Reporting went from days to real time?</li>
              <li>Hundreds of hours of manual work a month simply went away?</li>
              <li>A six-week project uncovered real, ongoing savings?</li>
              <li>You could add capability without adding headcount?</li>
            </ul>
            <div className="capability-quote">
              That's the conversation worth having before "what does this cost." The real question is what the problem is already costing you.
            </div>
          </div>
        </div>
      </div>

      <motion.a href="#engagement-models" aria-label="Continue to Start Small, Prove Value, Scale What Works" animate={reduced ? undefined : { y: [0, 8, 0] }} transition={reduced ? undefined : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }} className="capability-next-link absolute bottom-52 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-deepblue">
        <span className="text-[10px] font-bold uppercase tracking-[.14em]">Next</span>
        <ArrowRight className="h-5 w-5 rotate-90" />
      </motion.a>

      <CapabilityModal
        open={open}
        onClose={() => setOpen(false)}
        icon={ActiveIcon}
        title={current.title}
        tagline={current.tagline}
        body={current.body}
        impactAreas={current.impactAreas}
        outcomes={current.outcomes}
        image={current.image}
      />
    </section>
  );
}
