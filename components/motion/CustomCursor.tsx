"use client";

import * as React from "react";
import { gsap } from "@/lib/gsap";

const INTERACTIVE_SELECTOR = "a, button, [role='button'], input, textarea, select";

export default function CustomCursor() {
  const [active, setActive] = React.useState(false);
  const ringRef = React.useRef<HTMLDivElement>(null);
  const dotRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (
      window.matchMedia("(pointer: fine)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setActive(true);
    }
  }, []);

  React.useEffect(() => {
    if (!active) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    document.body.classList.add("has-custom-cursor");

    gsap.set([ring, dot], {
      autoAlpha: 0,
      xPercent: -50,
      yPercent: -50,
    });

    const onMove = (e: PointerEvent) => {
      gsap.set([ring, dot], {
        autoAlpha: 1,
        x: e.clientX,
        y: e.clientY,
      });
    };
    window.addEventListener("pointermove", onMove);

    const getInteractive = (target: EventTarget | null) =>
      target instanceof Element ? target.closest(INTERACTIVE_SELECTOR) : null;

    const onOver = (e: PointerEvent) => {
      if (getInteractive(e.target)) {
        document.body.classList.add("cursor-hover");
      }
    };
    const onOut = (e: PointerEvent) => {
      const current = getInteractive(e.target);
      const next = getInteractive(e.relatedTarget);
      if (current && current !== next) {
        document.body.classList.remove("cursor-hover");
      }
    };
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);

    return () => {
      document.body.classList.remove("has-custom-cursor", "cursor-hover");
      gsap.killTweensOf([ring, dot]);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
    };
  }, [active]);

  if (!active) return null;

  return (
    <>
      <div
        ref={ringRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-9 w-9 rounded-full border-2 border-white mix-blend-difference transition-[width,height,border-color] duration-200 [.cursor-hover_&]:h-16 [.cursor-hover_&]:w-16"
      />
      <div
        ref={dotRef}
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9998] h-1.5 w-1.5 rounded-full bg-white mix-blend-difference"
      />
    </>
  );
}
