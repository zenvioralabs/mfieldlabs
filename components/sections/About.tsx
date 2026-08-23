"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/content/about";
import WordReveal from "@/components/motion/WordReveal";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 border-t border-ink/10 bg-lightgray px-6 pb-28 pt-16 md:px-16 md:pt-20">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-8"
        >
          {about.eyebrow}
        </motion.p>

        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-start lg:gap-16">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -18 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="mb-7 max-w-md border-l-2 border-deepblue pl-5 font-display text-3xl font-bold leading-[1.2] text-ink md:text-4xl"
            >
              <WordReveal text={about.title} />
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex max-w-4xl flex-col items-start gap-6 border-y border-ink/10 py-7 md:py-8"
            >
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="whitespace-pre-line text-base leading-[1.75] text-ink/70 md:text-lg"
            >
              {about.problem}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ x: 5 }}
              className="whitespace-pre-line border-l-2 border-teal pl-5 text-base font-medium leading-relaxed text-ink/80 md:text-lg"
            >
              {about.solution}
            </motion.p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-[0_18px_50px_rgba(17,24,39,0.10)] lg:mt-2"
          >
            <Image
              src="/logo/professional-tech-team-collaborating-on-software-d-2026-07-08-22-09-10-utc.JPG"
              alt="Mfield Labs team collaborating on a technology project"
              fill
              sizes="(min-width: 1024px) 35vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-deepblue/10" />
            <div className="absolute bottom-5 left-5 rounded-lg bg-white/90 px-4 py-3 backdrop-blur">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-deepblue">Mfield Labs</p>
              <p className="mt-1 text-sm font-medium text-ink">Clarity that moves business forward.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
