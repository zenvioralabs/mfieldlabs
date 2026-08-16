"use client";

import * as React from "react";
import { motion, AnimatePresence, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { hero } from "@/content/hero";
import { useAppReady } from "@/lib/appReady";
import WordReveal from "@/components/motion/WordReveal";
import { Button } from "@/components/ui/button";

function TaglineSwap() {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = React.useState(0);

  React.useEffect(() => {
    if (reduceMotion) return;
    const id = setInterval(() => {
      setActive((prev) => (prev + 1) % hero.taglineOptions.length);
    }, 3200);
    return () => clearInterval(id);
  }, [reduceMotion]);

  return (
    <span className="relative inline-flex h-4 min-w-[240px] items-center overflow-hidden align-middle md:min-w-[320px]">
      <AnimatePresence mode="wait">
        <motion.span
          key={hero.taglineOptions[active]}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="absolute left-0 whitespace-nowrap"
        >
          {hero.taglineOptions[active]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const ready = useAppReady();
  const heroRef = React.useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.5]);
  const titleScale = useTransform(scrollYProgress, [0, 1], [1, 0.94]);

  return (
    <section
      id="top"
      ref={heroRef}
      className="relative flex flex-col justify-center overflow-hidden bg-white px-6 pb-20 pt-40 md:px-16 md:pb-28"
    >
      <div className="container relative">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6 flex flex-wrap items-center gap-3"
        >
          For founders, teams &amp; enterprises
          <span className="hidden text-ink/20 sm:inline">/</span>
          <TaglineSwap />
        </motion.p>

        <motion.h1
          style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
          className="font-display font-extrabold text-5xl md:text-7xl leading-[1.05] max-w-4xl text-ink"
        >
          <WordReveal text={hero.headlineLines[0]} mode="mount" active={ready} delay={0.1} />
          <br />
          <WordReveal text={hero.headlineLines[1]} mode="mount" active={ready} delay={0.4} />
          <br />
          <span className="relative text-deepblue">
            <WordReveal text={hero.headlineLines[2]} mode="mount" active={ready} delay={0.7} />
            <span className="relative ml-2 inline-flex h-3 w-3 align-middle md:h-4 md:w-4">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-deepblue/60" />
              <span className="relative inline-flex h-full w-full rounded-full bg-deepblue" />
            </span>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-8 max-w-xl text-lg text-ink/60 leading-relaxed"
        >
          {hero.subheading}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-4 max-w-xl text-base text-ink/45 leading-relaxed"
        >
          {hero.supportingStatement}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 1.35 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <Button asChild size="lg">
            <a href="#contact" className="group">
              Start Your Transformation
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button asChild variant="outline" size="lg">
            <a href="#services" className="group">
              Explore Our Capabilities
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
