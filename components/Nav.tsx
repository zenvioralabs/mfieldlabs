"use client";

import * as React from "react";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useMotionValueEvent, useReducedMotion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/motion/Magnetic";
import { useAppReady } from "@/lib/appReady";
import { cn } from "@/lib/utils";
import { navLinks } from "@/content/nav";

export default function Nav() {
  const ready = useAppReady();
  const reduceMotion = useReducedMotion();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 80));

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={ready ? { y: 0, opacity: 1 } : { y: -120, opacity: 0 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 z-50 w-full px-4 pt-4 md:px-8"
    >
      <div className="container px-2 md:px-6">
        <div
          className={cn(
            "flex items-center justify-between rounded-full border px-4 py-2.5 backdrop-blur transition-all duration-500 md:px-6",
            scrolled
              ? "border-ink/8 bg-white/95 shadow-[0_4px_24px_rgba(17,24,39,0.08)]"
              : "border-transparent bg-white/70 shadow-none"
          )}
        >
          <a href="#top" className="relative h-10 w-32 shrink-0 md:h-12 md:w-45">
            <Image
              src="/logo/mfield-logo-dark-text.png"

              alt="Mfield"
              fill
              className="object-contain object-left"
              priority
            />
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-ink/70 md:flex">
            {navLinks.map((l) => (
              <a key={l.href} href={l.href} className="transition-colors hover:text-deepblue">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <Magnetic>
              <Button
                size="sm"
                asChild
                className="border border-deepblue bg-white text-deepblue hover:bg-deepblue hover:text-white active:bg-deepblue active:text-white"
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </Magnetic>
            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink/70 transition-colors hover:text-deepblue md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.nav
              initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 flex flex-col gap-1 rounded-2xl border border-ink/8 bg-white/95 p-3 shadow-[0_12px_40px_rgba(17,24,39,0.12)] backdrop-blur md:hidden"
            >
              {navLinks.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-ink/80 transition-colors hover:bg-lightgray hover:text-deepblue"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-deepblue transition-colors hover:bg-lightgray"
              >
                Contact Us
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
