"use client";

import * as React from "react";
import { gsap } from "@/lib/gsap";

interface MagneticProps {
  children: React.ReactElement;
  strength?: number;
}

export default function Magnetic({ children, strength = 0.16 }: MagneticProps) {
  const ref = React.useRef<HTMLElement | null>(null);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      !window.matchMedia("(pointer: fine)").matches ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      gsap.to(el, {
        x: (e.clientX - r.left - r.width / 2) * strength,
        y: (e.clientY - r.top - r.height / 2) * strength,
        duration: 0.35,
        ease: "power3.out",
      });
    };
    const onLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1,0.5)" });
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, [strength]);

  return React.cloneElement(children, { ref } as any);
}
