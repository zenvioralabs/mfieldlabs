"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { mission, vision } from "@/content/mission";
import WordReveal from "@/components/motion/WordReveal";

export default function MissionVision() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const missionRef = React.useRef<HTMLDivElement>(null);
  const visionRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        [missionRef.current, visionRef.current].forEach((node, i) => {
          if (!node) return;
          gsap.set(node, { "--fill": 0 } as gsap.TweenVars);
          ScrollTrigger.create({
            trigger: node,
            start: "top 78%",
            end: "top 38%",
            scrub: 0.4,
            onUpdate: (self) => gsap.set(node, { "--fill": self.progress } as gsap.TweenVars),
          });
        });
      });
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section id="mission-vision" ref={sectionRef} className="bg-white py-28 px-6 md:px-16">
      <div className="container grid gap-16 lg:grid-cols-2">
        <motion.div
          ref={missionRef}
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl border p-10 transition-colors"
          style={{
            borderColor: "color-mix(in srgb, #0a66ff calc(var(--fill, 1) * 100%), rgba(17,24,39,0.08))",
            backgroundColor: "color-mix(in srgb, #0a66ff calc(var(--fill, 1) * 4%), transparent)",
          }}
        >
          <p className="eyebrow mb-5">
            <span className="mr-2 font-mono text-deepblue/50">01</span>
            {mission.eyebrow}
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-[1.1] text-ink mb-6">
            <WordReveal text={mission.heading} />
          </h2>
          <p className="text-ink/60 leading-relaxed mb-6">{mission.intro}</p>
          <ul className="space-y-4">
            {mission.points.map((p) => (
              <li key={p} className="flex gap-3 text-ink/65 leading-relaxed">
                <Check className="h-5 w-5 text-teal shrink-0 mt-0.5" aria-hidden="true" />
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          ref={visionRef}
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-2xl bg-navy p-10 text-white flex flex-col transition-colors"
          style={{
            boxShadow:
              "inset 0 0 0 1px color-mix(in srgb, #38bdf8 calc(var(--fill, 1) * 60%), rgba(255,255,255,0.08))",
          }}
        >
          <p className="eyebrow mb-5" style={{ color: "#38bdf8" }}>
            <span className="mr-2 font-mono text-sky/60">02</span>
            {vision.eyebrow}
          </p>
          <h2 className="font-display font-bold text-3xl leading-[1.15] mb-6">
            <WordReveal text={vision.heading} />
          </h2>
          <p className="text-white/65 leading-relaxed">{vision.body}</p>
        </motion.div>
      </div>
    </section>
  );
}
