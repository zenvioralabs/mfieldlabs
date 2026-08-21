"use client";

import { motion } from "framer-motion";
import { about } from "@/content/about";
import WordReveal from "@/components/motion/WordReveal";

export default function About() {
  return (
    <section id="about" className="bg-lightgray py-28 px-6 md:px-16">
      <div className="container">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="eyebrow mb-10"
        >
          {about.eyebrow}
        </motion.p>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <h2 className="font-display font-bold text-3xl md:text-4xl leading-[1.3] text-ink">
            <WordReveal text={about.title} />
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-col gap-5 rounded-2xl border border-deepblue/15 bg-white p-8 md:p-10"
          >
            <p className="whitespace-pre-line text-lg text-ink/70 leading-relaxed">{about.problem}</p>
            <p className="text-lg text-ink/70 leading-relaxed">{about.solution}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
