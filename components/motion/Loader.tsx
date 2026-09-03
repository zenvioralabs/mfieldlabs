"use client";

import * as React from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap";
import { markAppReady } from "@/lib/appReady";

export default function Loader() {
  const [visible, setVisible] = React.useState(true);
  const rootRef = React.useRef<HTMLDivElement>(null);
  const barRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    document.body.classList.add("is-loading");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.body.classList.remove("is-loading");
      setVisible(false);
      markAppReady();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.classList.remove("is-loading");
        setVisible(false);
        markAppReady();
      },
    });

    tl.to(barRef.current, { width: "100%", duration: 1.15, ease: "power2.inOut" });
    tl.to(
      rootRef.current,
      { clipPath: "inset(0 0 100% 0)", duration: 1.05, ease: "power4.inOut" },
      "+=0.15"
    );

    return () => {
      tl.kill();
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[9999] grid place-items-center bg-navy text-white"
      aria-hidden="true"
    >
      <div className="text-center">
        <div className="relative mx-auto mb-7 h-9 w-40">
          <Image
            src="/logo/field-logo-png.png"
            alt=""
            fill
            sizes="160px"
            className="object-contain"
            priority
          />
        </div>
        <div className="mx-auto h-[2px] w-44 overflow-hidden bg-white/15">
          <div ref={barRef} className="h-full w-0 bg-deepblue" />
        </div>
      </div>
    </div>
  );
}
