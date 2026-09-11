"use client";

import * as React from "react";
import Image from "next/image";
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
      className="relative flex flex-col justify-center overflow-hidden bg-white px-6 pb-16 pt-32 md:px-16 md:pb-48 md:pt-40"
    >
      <div className="container relative grid gap-8 md:grid-cols-[1.15fr_0.85fr] md:items-start md:gap-16">
        <div>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-4 flex flex-wrap items-center gap-2 md:mb-6 md:gap-3"
        >
          
          <span className="hidden text-ink/20 sm:inline"></span>
          <TaglineSwap />
        </motion.p>

        <motion.h1
          style={{ y: titleY, opacity: titleOpacity, scale: titleScale }}
          className="max-w-4xl font-display text-5xl font-extrabold leading-[1.05] text-ink sm:text-6xl md:text-7xl"
        >
          <WordReveal
            text={hero.headlineLines[0]}
            className="inline max-w-full"
            mode="mount"
            active={ready}
            delay={0.1}
          />
          <br />
          <WordReveal
            text={hero.headlineLines[1]}
            className="inline max-w-full"
            mode="mount"
            active={ready}
            delay={0.4}
          />
          <br />
          <span className="relative mt-1 inline-block max-w-full text-5xl text-deepblue sm:text-6xl md:mt-2 md:whitespace-nowrap md:text-7xl">
            <WordReveal
              text={hero.headlineLines[2]}
              className="inline max-w-full"
              mode="mount"
              active={ready}
              delay={0.7}
            />
            <span
              aria-hidden="true"
              className="ml-2 inline-block h-[0.22em] w-[0.22em] translate-y-[-0.04em] animate-pulse rounded-full bg-deepblue align-baseline"
            />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-6 max-w-xl font-body text-lg text-ink/60 leading-relaxed md:mt-10 md:text-xl"
        >
          {hero.subheading}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="mt-4 max-w-xl font-body text-sm text-ink/45 leading-relaxed md:mt-6 md:text-base"
        >
          {hero.supportingStatement}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 1.35 }}
          className="mt-8 flex flex-wrap gap-3 md:mt-12 md:gap-4">
        
          <Button
            asChild
            size="lg"
            className="border border-deepblue bg-white text-deepblue hover:bg-deepblue hover:text-white active:bg-deepblue active:text-white"
          >
            <a href="#contact" className="group">
              Start with a Sprint
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            className="border border-deepblue bg-white text-deepblue hover:bg-deepblue hover:text-white active:bg-deepblue active:text-white"
          >
            <a href="#services" className="group">
              See How We Work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
        </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="flex w-full items-center justify-center pt-2 md:pt-20"
        >
          <Image
            src="/logo/Logo+field-png.png"
            alt="MField Labs"
            width={620}
            height={265}
            className="h-auto w-full max-w-[220px] object-contain md:max-w-[620px]"
          />
        </motion.div>
      </div>
    </section>
  );
}
