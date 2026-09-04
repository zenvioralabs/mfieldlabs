"use client";

import * as React from "react";
import Image from "next/image";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, X } from "lucide-react";

export interface CaseStudyDetail {
  image: string;
  title: string;
  tagline: string;
  situation: string;
  approach: string;
  outcome: string;
}

interface CaseStudyModalProps {
  open: boolean;
  onClose: () => void;
  study: CaseStudyDetail | null;
}

export default function CaseStudyModal({ open, onClose, study }: CaseStudyModalProps) {
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

  if (!mounted || !study) return null;

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
            aria-label="Close case study details"
            className="fixed right-5 top-5 z-20 flex h-11 w-11 items-center justify-center rounded-xl border border-ink/15 bg-white/80 text-ink backdrop-blur transition-colors hover:bg-lightgray focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" aria-hidden="true" />
          </button>

          <div className="relative mx-auto flex min-h-full w-full max-w-6xl items-center px-6 py-20 sm:px-10 sm:py-24">
            <div className="w-full">
              <motion.h3
                id={titleId}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="mb-8 max-w-4xl font-display text-2xl font-bold tracking-normal text-ink sm:text-3xl"
              >
                {study.title}
              </motion.h3>

              <div className="grid items-start gap-10 md:grid-cols-[0.85fr_1.15fr] md:gap-12 lg:gap-16">
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative mx-auto aspect-[4/3] w-full max-w-xs overflow-hidden rounded-2xl border border-ink/10 shadow-xl sm:max-w-md"
                >
                  <Image
                    src={study.image}
                    alt=""
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/45 via-ink/5 to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-6"
                >

                <p className="text-sm leading-relaxed text-ink/70 sm:text-base">{study.situation}</p>
                <p className="text-sm leading-relaxed text-ink/70 sm:text-base">{study.approach}</p>
                <p className="text-sm leading-relaxed text-ink/70 sm:text-base">{study.outcome}</p>
                <a href="#contact" onClick={onClose} className="outline-pill mt-2 h-10 w-fit !px-3 !py-1.5 hover:!bg-transparent hover:!text-deepblue">
                  Start Conversation <ArrowRight className="h-4 w-4" />
                </a>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
