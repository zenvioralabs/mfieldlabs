"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { engagementModels } from "@/content/engagementModels";

export default function EngagementModels() {
  const [active, setActive] = React.useState(0);
  return (
    <section id="engagement-models" className="bg-white px-5 py-14 sm:px-8 md:px-12 lg:px-16 lg:py-16">
      <div className="mx-auto max-w-[1160px] rounded-[26px] bg-[#f1f5fb] p-7 sm:p-10 lg:p-12">
        <div className="grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="blue-subheading mb-6">Start Small. Prove Value.<br />Scale What Works.</h2>
            <p className="max-w-[430px] text-[13px] leading-5 text-ink/80">Committing to a big engagement with a new firm is a real leap. So don't. Start with a Velocity Sprint, a tightly scoped project that solves one important problem in four to six weeks and shows results before you commit to anything larger.</p>
            <div className="mt-8 max-w-[360px] rounded-xl bg-deepblue px-7 py-5 text-sm italic leading-5 text-white">Each one produces something real.<br />You see the value before you decide what comes next.</div>
          </div>
          <div className="relative pl-6">
            <div className="absolute bottom-5 left-2 top-5 w-px bg-ink/30" />
            <div className="space-y-5">
              {engagementModels.slice(0, 3).map((m, i) => (
                <motion.button key={m.title} onClick={() => setActive(i)} whileHover={{ x: 3 }} className={`relative flex w-full items-center gap-5 rounded-xl border bg-white p-4 text-left shadow-[0_7px_18px_rgba(10,102,255,.12)] ${active === i ? "border-deepblue" : "border-transparent"}`}>
                  <span className={`absolute -left-[29px] h-4 w-4 rounded-full border-2 border-white ${active === i ? "bg-deepblue" : "bg-deepblue/60"}`} />
                  <span><strong className="block text-sm font-bold">{m.title}</strong><small className="mt-1 block text-[10px] leading-4 text-ink/70">{m.body.split("Typical outcomes:")[0].trim()}</small></span>
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
