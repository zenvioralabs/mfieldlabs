"use client";

import * as React from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import type { TocItem } from "@/lib/blog/types";

/** Distance from the viewport top (clears the fixed nav) at which a heading counts as "current". */
const ACTIVE_OFFSET = 140;

export default function BlogTableOfContents({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = React.useState(items[0]?.id ?? "");
  const [mobileOpen, setMobileOpen] = React.useState(false);

  React.useEffect(() => {
    if (!items.length) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      let current = items[0].id;
      for (const item of items) {
        const el = document.getElementById(item.id);
        if (el && el.getBoundingClientRect().top <= ACTIVE_OFFSET) current = item.id;
      }
      // At the very bottom of the page, the last section is current even if its heading can't reach the offset.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) {
        current = items[items.length - 1].id;
      }
      setActiveId(current);
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [items]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const top = el.getBoundingClientRect().top + window.scrollY - (ACTIVE_OFFSET - 20);
    window.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    history.replaceState(null, "", `#${id}`);
    setActiveId(id);
    setMobileOpen(false);
    el.focus({ preventScroll: true });
  };

  if (!items.length) return null;

  return (
    <nav
      aria-label="Article sections"
      className="rounded-[18px] bg-white px-6 pb-5 pt-6 shadow-[0_4px_18px_rgba(17,24,39,.08)] sm:px-7 lg:pb-7"
    >
      <button
        type="button"
        onClick={() => setMobileOpen((o) => !o)}
        aria-expanded={mobileOpen}
        aria-controls="blog-toc-list"
        className="flex w-full items-center justify-between border-b border-ink/70 pb-3 text-left lg:pointer-events-none"
      >
        <span className="font-display text-base font-extrabold text-ink">Sections</span>
        <ChevronDown className={cn("h-5 w-5 text-ink/60 transition-transform lg:hidden", mobileOpen && "rotate-180")} aria-hidden="true" />
      </button>

      <ol
        id="blog-toc-list"
        data-lenis-prevent
        className={cn("[scrollbar-width:thin] lg:block lg:max-h-[calc(100vh-14rem)] lg:overflow-y-auto", mobileOpen ? "block" : "hidden")}
      >
        {items.map((item) => {
          const active = item.id === activeId;
          return (
            <li key={item.id} className="border-b border-ink/70">
              <a
                href={`#${item.id}`}
                onClick={(e) => handleClick(e, item.id)}
                aria-current={active ? "location" : undefined}
                className={cn(
                  "flex items-start justify-between gap-3 py-3.5 text-[13px] leading-5 transition-colors",
                  item.level === 3 && "pl-4 text-xs",
                  active ? "font-semibold text-deepblue" : "text-ink/70 hover:text-deepblue"
                )}
              >
                <span>{item.text}</span>
                <ChevronRight className={cn("h-4 w-4 shrink-0 transition-opacity", active ? "opacity-100" : "opacity-0")} aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
