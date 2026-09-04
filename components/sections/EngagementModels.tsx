"use client";

import * as React from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const sprints = [
  { title: "Executive Intelligence Sprint", body: "Give leadership reliable, real-time visibility into the business." },
  { title: "Automation Sprint", body: "Find and automate the most expensive repetitive process in your operation." },
  { title: "AI Opportunity Sprint", body: "Identify the highest-value practical use of AI in your business, and implement one." },
];

export default function EngagementModels() {
  const [active, setActive] = React.useState(0);
  const lineRef = React.useRef<HTMLDivElement>(null);
  const firstDotRef = React.useRef<HTMLSpanElement>(null);
  const lastDotRef = React.useRef<HTMLSpanElement>(null);
  const [lineBounds, setLineBounds] = React.useState({ top: 0, bottom: 0 });
  const { scrollYProgress } = useScroll({ target: lineRef, offset: ["start center", "end center"] });
  const lineScale = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), { stiffness: 300, damping: 40 });

  React.useLayoutEffect(() => {
    const measure = () => {
      const container = lineRef.current;
      const first = firstDotRef.current;
      const last = lastDotRef.current;
      if (!container || !first || !last) return;
      const containerRect = container.getBoundingClientRect();
      const firstRect = first.getBoundingClientRect();
      const lastRect = last.getBoundingClientRect();
      setLineBounds({
        top: firstRect.top + firstRect.height / 2 - containerRect.top,
        bottom: containerRect.bottom - (lastRect.top + lastRect.height / 2),
      });
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section id="engagement-models" className="relative -mt-20 bg-white px-5 pb-16 pt-0 sm:px-8 md:px-12 lg:-mt-32 lg:px-16">
      <div className="mx-auto w-full max-w-[1160px] rounded-[26px] bg-[#f1f5fb] p-7 sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="blue-subheading mb-12 !text-[1.5rem]">Start Small. Prove Value.<br />Scale What Works.</h2>
            <p className="max-w-[430px] text-[14px] leading-5 text-ink/80">Committing to a big engagement with a new firm is a real leap. So don't. Start with a Velocity Sprint, a tightly scoped project that solves one important problem in four to six weeks and shows results before you commit to anything larger.</p>
            <div className="mt-8 max-w-[360px] rounded-xl bg-deepblue px-7 py-5 text-sm italic leading-5 text-white">Each one produces something real.<br />You see the value before you decide what comes next.</div>
          </div>
          <div ref={lineRef} className="relative pl-8">
            <div style={{ top: lineBounds.top, bottom: lineBounds.bottom }} className="absolute left-3 w-1 rounded-full bg-ink/15" />
            <motion.div
              style={{ top: lineBounds.top, bottom: lineBounds.bottom, scaleY: lineScale }}
              className="absolute left-3 w-1 origin-top rounded-full bg-deepblue"
            />
            <div className="space-y-5">
              {sprints.map((m, i) => (
                <motion.button type="button" key={m.title} onClick={() => setActive(i)} aria-pressed={active === i} whileHover={{ x: 3 }} className={`relative z-10 flex w-full cursor-pointer items-center gap-5 rounded-xl border bg-white p-5 text-left shadow-[0_7px_18px_rgba(10,102,255,.12)] ${active === i ? "border-deepblue" : "border-transparent"}`}>
                  <span ref={i === 0 ? firstDotRef : i === 2 ? lastDotRef : undefined} className="absolute -left-[26px] h-4 w-4 rounded-full border-2 border-white bg-deepblue" />
                  <span><strong className="block text-base font-bold">{m.title}</strong><small className="mt-1.5 block text-[14px] leading-5 text-ink/70">{m.body}</small></span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
