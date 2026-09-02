"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { hero } from "@/content/hero";
import { useAppReady } from "@/lib/appReady";

export default function Hero() {
  const ready = useAppReady();
  const reduced = useReducedMotion();
  const ref = useScroll();
  const y = useTransform(ref.scrollY, [0, 650], [0, -90]);
  const opacity = useTransform(ref.scrollY, [0, 650], [1, 0.55]);

  return (
    <section id="top" className="relative overflow-hidden bg-white px-5 pb-16 pt-28 sm:px-8 md:px-12 lg:px-16 lg:pb-20 lg:pt-36">
      <div className="mx-auto grid max-w-[1240px] items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-4">
        <motion.div
          style={{ y, opacity }}
          initial={{ opacity: 0, y: 25 }}
          animate={ready ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: reduced ? 0 : 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative z-10 max-w-[650px]"
        >
          <p className="eyebrow mb-5">WHERE IDEAS GAIN MOMENTUM</p>
          <h1 className="font-display text-[3rem] font-extrabold leading-[0.98] tracking-[-0.045em] text-ink sm:text-[4rem] lg:text-[5.2rem]">
            {hero.headlineLines[0]}
            <br />
            {hero.headlineLines[1]}
            <br />
            <span className="text-deepblue">{hero.headlineLines[2]}</span>
          </h1>
          <p className="mt-7 max-w-xl text-[15px] leading-7 text-ink/65 md:text-base">
            {hero.subheading}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="blue-pill group">
              Start with a Sprint <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#services" className="outline-pill group">
              See How We Work <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>

        <div className="relative min-h-[560px] sm:min-h-[650px] lg:min-h-[690px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, x: 30 }}
            animate={ready ? { opacity: 1, scale: 1, x: 0 } : undefined}
            transition={{ duration: reduced ? 0 : 1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src="/images/HERO-IMAGE.png"
              alt="Business leader using technology to create momentum"
              fill
              priority
              sizes="(min-width: 1024px) 55vw, 100vw"
              className="relative z-10 object-contain object-center"
            />
          </motion.div>
        </div>
      </div>

      <div className="mx-auto mt-5 flex max-w-[1240px] items-center justify-between border-t border-ink/10 pt-5 text-xs text-ink/45">
        <span>Trusted Intelligence &amp; Digital Evolution Partner</span>
        <a href="#about" className="hidden items-center gap-2 md:flex">Scroll to explore <ArrowDown className="h-3.5 w-3.5" /></a>
      </div>
    </section>
  );
}
