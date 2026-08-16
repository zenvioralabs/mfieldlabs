"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface QuoteBannerProps {
  eyebrow?: string;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function QuoteBanner({ eyebrow, children, className, id }: QuoteBannerProps) {
  return (
    <section id={id} className="bg-white px-6 py-16 md:px-16">
      <motion.div
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "container relative overflow-hidden rounded-2xl bg-navy px-8 py-16 text-center md:px-16 md:py-24",
          className
        )}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-deepblue/25 blur-[100px]"
        />
        {eyebrow && (
          <p className="eyebrow relative mb-6" style={{ color: "#38bdf8" }}>
            {eyebrow}
          </p>
        )}
        <div className="relative mx-auto max-w-3xl font-display text-2xl md:text-3xl leading-snug text-white">
          {children}
        </div>
      </motion.div>
    </section>
  );
}
