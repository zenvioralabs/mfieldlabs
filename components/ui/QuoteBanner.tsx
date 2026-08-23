"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface QuoteBannerProps {
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
  tone?: "dark" | "light";
}

export default function QuoteBanner({ eyebrow, children, className, id, tone = "dark" }: QuoteBannerProps) {
  const isLight = tone === "light";

  return (
    <section id={id} className="bg-white px-6 py-16 md:px-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "container relative overflow-hidden rounded-2xl border px-8 py-16 text-center md:px-16 md:py-24",
          isLight
            ? "border-ink/10 bg-lightgray shadow-[0_12px_40px_rgba(17,24,39,0.06)]"
            : "border-transparent bg-navy",
          className
        )}
      >
        {!isLight && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-deepblue/25 blur-[100px]"
          />
        )}
        {eyebrow && (
          <p className="eyebrow relative mb-6 text-sky">
            {eyebrow}
          </p>
        )}
        <div
          className={cn(
            "relative mx-auto max-w-3xl font-display text-2xl leading-snug md:text-3xl",
            isLight ? "text-ink" : "text-white"
          )}
        >
          {children}
        </div>
      </motion.div>
    </section>
  );
}
