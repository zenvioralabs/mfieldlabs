"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { about } from "@/content/about";
import { mission } from "@/content/mission";
import { philosophy } from "@/content/philosophy";
import WordReveal from "@/components/motion/WordReveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-ink/10 bg-white px-6 pb-40 pt-16 md:px-16 md:pt-20">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-8"
        >
          {about.eyebrow}
        </motion.p>

        <div className="grid gap-10">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex w-full flex-col items-start gap-6 border-y border-ink/10 py-6 md:gap-8 md:py-8"
            >
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="whitespace-pre-line text-sm leading-[1.65] text-ink/70 sm:text-base md:text-lg"
              >
                {about.problem}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="whitespace-pre-line text-sm leading-[1.65] text-ink/70 sm:text-base md:text-lg"
              >
                {about.solution}
              </motion.p>
            </motion.div>
          </div>

          <div className="grid items-stretch gap-6 md:gap-8 lg:grid-cols-2">
            <div>
              <p className="eyebrow mb-5">{mission.eyebrow}</p>
              <div className="rounded-2xl border border-ink/10 bg-white p-5 shadow-[0_18px_50px_rgba(17,24,39,0.08)] sm:p-7 md:p-10 lg:h-full">
                <h2 className="mb-4 font-display text-2xl font-bold leading-[1.1] text-ink sm:text-3xl md:mb-6 md:text-4xl">
                  <WordReveal text={mission.heading} />
                </h2>
                <p className="mb-4 text-sm leading-relaxed text-ink/60 sm:text-base md:mb-6">{mission.intro}</p>
                <ul className="space-y-2.5 text-sm sm:space-y-3 sm:text-base md:space-y-4">
                  {mission.points.map((point) => (
                    <li key={point} className="flex gap-3 leading-relaxed text-ink/65">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-teal" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <p className="eyebrow mb-5">{philosophy.eyebrow}</p>
              <div className="flex flex-col items-center justify-center rounded-2xl border border-ink/10 bg-white p-5 text-center text-ink shadow-[0_18px_50px_rgba(17,24,39,0.08)] sm:p-7 md:p-10 lg:h-full">
                <h2 className="mb-4 max-w-xl font-display text-2xl font-bold leading-[1.15] text-ink sm:text-3xl md:mb-6 md:text-4xl">
                  <WordReveal text={philosophy.heading} />
                </h2>
                <p className="max-w-xl text-sm leading-relaxed text-ink/60 sm:text-base">{philosophy.body}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
