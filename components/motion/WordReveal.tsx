"use client";

import * as React from "react";
import { motion, useReducedMotion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface WordRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  /** "inView" reveals when scrolled into view (default). "mount" reveals once `active` becomes true. */
  mode?: "inView" | "mount";
  active?: boolean;
}

export default function WordReveal({
  text,
  className,
  delay = 0,
  stagger = 0.05,
  mode = "inView",
  active = true,
}: WordRevealProps) {
  const reduceMotion = useReducedMotion();
  const ref = React.useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px -10% 0px" });
  const words = text.split(" ");

  if (reduceMotion) {
    return <span className={cn("inline-block align-bottom", className)}>{text}</span>;
  }

  const isActive = mode === "mount" ? active : inView;
  const hidden = { y: "110%" };
  const shown = { y: 0 };

  return (
    <span ref={ref} className={cn("inline-block align-bottom", className)}>
      {words.map((word, i) => (
        <span
          key={i}
          className="-mb-[0.12em] mr-[0.28em] inline-block overflow-hidden pb-[0.12em] align-bottom last:mr-0"
        >
          <motion.span
            className="inline-block"
            initial={hidden}
            animate={isActive ? shown : hidden}
            transition={{
              duration: 0.7,
              delay: delay + i * stagger,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </span>
  );
}
