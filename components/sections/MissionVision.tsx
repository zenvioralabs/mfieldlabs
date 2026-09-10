"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { mission } from "@/content/mission";
import { philosophy } from "@/content/philosophy";
import WordReveal from "@/components/motion/WordReveal";

export default function MissionVision() {
  const sectionRef = React.useRef<HTMLDivElement>(null);
  const missionRef = React.useRef<HTMLDivElement>(null);
  const visionRef = React.useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        [missionRef.current, visionRef.current].forEach((node) => {
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
    <section id="mission" ref={sectionRef} className="bg-white px-6 pb-44 pt-28 md:px-16">
      <div className="container">
        <div className="grid items-stretch gap-16 lg:grid-cols-2">
          <div>
            <p className="eyebrow mb-5">{mission.eyebrow}</p>
            <motion.div
              ref={missionRef}
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-2xl border border-ink/10 bg-white p-10 shadow-[0_18px_50px_rgba(17,24,39,0.08)] transition-shadow"
            >
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
          </div>

          <div>
            <p className="eyebrow mb-5">{philosophy.eyebrow}</p>
            <motion.div
              ref={visionRef}
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-15%" }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="h-full rounded-2xl border border-ink/10 bg-white p-10 text-center text-ink shadow-[0_18px_50px_rgba(17,24,39,0.08)] transition-shadow flex flex-col items-center justify-center"
            >
              <h2 className="max-w-xl font-display font-bold text-4xl leading-[1.15] mb-6 text-ink">
                <WordReveal text={philosophy.heading} />
              </h2>
              <p className="max-w-xl text-ink/60 leading-relaxed">{philosophy.body}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
