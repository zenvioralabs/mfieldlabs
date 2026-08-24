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

  function handleAnchorClick(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
    if (!href.startsWith("#")) return;

    const target = document.getElementById(href.slice(1));
    if (!target) return;

    event.preventDefault();
    setMenuOpen(false);

    const headerHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 0;
    const targetTop = Math.max(0, target.getBoundingClientRect().top + window.scrollY - headerHeight - 16);

    window.history.pushState({}, "", href);
    window.scrollTo({ top: targetTop, behavior: "auto" });
  }

  return (
    <motion.header
      initial={{ y: -120, opacity: 0 }}
      animate={ready ? { y: 0, opacity: 1 } : { y: -120, opacity: 0 }}
      transition={reduceMotion ? { duration: 0 } : { duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 z-50 w-full px-2 pt-4 md:px-8"
    >
      <div className="container mx-auto w-[calc(100%-1rem)] max-w-full px-0 md:w-full md:px-6">
        <div
          className={cn(
            "flex min-w-0 items-center justify-between rounded-full border px-2 py-2.5 backdrop-blur transition-all duration-500 md:px-6",
            scrolled
              ? "border-ink/8 bg-white/95 shadow-[0_4px_24px_rgba(17,24,39,0.08)]"
              : "border-transparent bg-white/70 shadow-none"
          )}
        >
          <a
            href="#top"
            onClick={(event) => handleAnchorClick(event, "#top")}
            className="relative h-14 w-36 shrink-0 md:h-14 md:w-48"
          >
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
              <a
                key={l.href}
                href={l.href}
                onClick={(event) => handleAnchorClick(event, l.href)}
                className="transition-colors hover:text-deepblue"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-1 md:gap-2">
            <div className="hidden sm:block">
              <Magnetic>
                <Button
                  size="sm"
                  asChild
                  className="border border-deepblue bg-white text-deepblue hover:bg-deepblue hover:text-white active:bg-deepblue active:text-white"
                >
                  <a href="#contact" onClick={(event) => handleAnchorClick(event, "#contact")}>
                    Contact Us
                  </a>
                </Button>
              </Magnetic>
            </div>
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
                  onClick={(event) => handleAnchorClick(event, l.href)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-ink/80 transition-colors hover:bg-lightgray hover:text-deepblue"
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(event) => handleAnchorClick(event, "#contact")}
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
