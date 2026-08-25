"use client";

import * as React from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, CheckCircle2, X, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CapabilityModalProps {
  open: boolean;
  onClose: () => void;
  icon: LucideIcon;
  title: string;
  tagline: string;
  body: string;
  impactAreas: string[];
  outcomes: string[];
  image: string;
}

/**
 * CapabilityModal — full-detail overlay for a capability (photo, tagline,
 * overview, impact areas, business outcomes, and a contact CTA). Shared by
 * the Capabilities grid and the footer's capability links.
 */
export default function CapabilityModal({
  open,
  onClose,
  icon: Icon,
  title,
  tagline,
  body,
  impactAreas,
  outcomes,
  image,
}: CapabilityModalProps) {
  const [mounted, setMounted] = React.useState(false);
  const closeRef = React.useRef<HTMLButtonElement>(null);
  const titleId = React.useId();

  React.useEffect(() => setMounted(true), []);

  React.useEffect(() => {
    if (!open) return;
    const previousFocus = document.activeElement as HTMLElement | null;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => closeRef.current?.focus());
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [open, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open ? (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.99 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="modal-scroll fixed inset-0 z-[1000] overflow-y-auto bg-white text-ink"
        >
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle,rgba(10,102,255,0.12)_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="absolute inset-y-0 right-0 w-full bg-gradient-to-l from-white via-white/95 to-white/70 md:w-[65%]" />
            <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-white to-transparent" />
            <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close capability details"
            className="fixed right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-xl border border-ink/15 bg-white/80 text-ink backdrop-blur transition-colors hover:bg-lightgray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="relative mx-auto flex min-h-full w-full max-w-6xl items-center px-6 py-20 sm:px-10 sm:py-24">
            <div className="grid w-full items-center gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-12 lg:gap-16">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-2xl border border-ink/10 shadow-xl sm:max-w-md"
              >
                <Image
                  src={image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/5 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-br from-deepblue/15 via-transparent to-sky/10 mix-blend-screen" />
                <span className="absolute bottom-5 left-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-deepblue text-white shadow-lg shadow-black/25 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2.5">
                  <h3 id={titleId} className="font-display text-3xl font-bold tracking-normal text-ink sm:text-4xl">
                    {title}
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-deepblue">{tagline}</p>
                </div>

                <p className="text-sm leading-relaxed text-ink/65 sm:text-base">{body}</p>

                {impactAreas.length > 0 ? (
                  <div className="flex flex-col gap-3">
                    <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">
                      Impact Areas
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {impactAreas.map((area) => (
                        <span
                          key={area}
                          className="rounded-full border border-ink/15 bg-lightgray px-3 py-1.5 text-xs font-medium text-ink/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-sky/60 hover:text-ink"
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                ) : null}

                {outcomes.length > 0 ? (
                  <div className="flex flex-col gap-3">
                  <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/45">
                    Business Outcomes
                  </h4>
                  <ul className="flex flex-col gap-2.5">
                    {outcomes.map((outcome) => (
                      <li key={outcome} className="flex items-start gap-2.5 text-sm leading-relaxed text-ink/80">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                  </div>
                ) : null}

                <Button asChild size="lg" className="mt-2 w-fit">
                  <a href="#contact" onClick={onClose}>
                    Start a Conversation
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
