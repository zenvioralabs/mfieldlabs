"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Copy } from "lucide-react";
import { contact } from "@/content/contact";
import { positioning } from "@/content/positioning";
import Magnetic from "@/components/motion/Magnetic";
import WordReveal from "@/components/motion/WordReveal";

const PROJECT_INQUIRY_MAILTO = `mailto:${contact.email}?subject=${encodeURIComponent(
  "New project inquiry"
)}`;

export default function ContactSection() {
  const [copied, setCopied] = React.useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <section id="contact" className="scroll-mt-28 bg-white px-6 pb-28 pt-16 md:px-16 md:pt-20">
      <div className="container">
        <div className="mb-10 max-w-2xl xl:mb-7">
          <p className="eyebrow mb-5">Contact Us</p>
          <h2 className="font-display font-bold text-4xl leading-[1.1] text-ink mb-4">
            <WordReveal text={contact.heading} />
          </h2>
          <p className="text-lg text-ink/60 leading-relaxed">{contact.body}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center py-2 lg:pr-8"
          >
            <div className="mb-6 h-px w-full bg-sky" />
            <p className="max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg">
              {positioning.statement}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-ink/10 bg-lightgray p-6 text-ink shadow-[0_18px_50px_rgba(17,24,39,0.06)] md:p-8 xl:p-6"
          >
            <p className="eyebrow mb-4 text-deepblue">
              New project inquiry
            </p>
            <p className="mb-6 leading-relaxed text-ink/60">
              Email directly. When reaching out, please include industry, team size, the problem to solve, and a rough timeline.
            </p>

            <Magnetic>
              <a
                href={PROJECT_INQUIRY_MAILTO}
                className="group mb-3 flex items-center justify-between gap-4 rounded-xl bg-gradient-to-r from-deepblue to-electric px-5 py-3.5 font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                Email Mfieldlabs
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </a>
            </Magnetic>

            <button
              type="button"
              onClick={handleCopy}
                className="flex w-full items-center justify-between gap-4 rounded-xl border border-ink/15 px-5 py-3.5 text-sm text-ink/70 transition-colors hover:border-ink/30 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
            >
              <span>{contact.email}</span>
              {copied ? (
                <Check className="h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
              ) : (
                <Copy className="h-4 w-4 shrink-0" aria-hidden="true" />
              )}
              <span className="sr-only" role="status">
                {copied ? "Email address copied" : ""}
              </span>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
