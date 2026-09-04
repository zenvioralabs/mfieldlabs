"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";
import { differentiators } from "@/content/differentiators";
import { engagementModels } from "@/content/engagementModels";

const boxes = [
  "We build things your team can run without us. You won't be stuck depending on us forever.",
  "We connect your data, your people, and your day-to-day work so things flow instead of getting stuck.",
  "We build things that can grow and change without breaking, not a fix that breaks the moment something changes.",
  "We use AI to save your team time, not to replace your team's judgment.",
  "We give you one clear picture of your business, instead of scattered reports that don't agree with each other.",
];

export default function Differentiators() {
  const [active, setActive] = React.useState(1);
  return (
    <section id="why-choose-us" className="relative -top-[80px] bg-white px-5 pt-8 pb-16 sm:px-8 md:px-12 lg:px-16 lg:pt-12 lg:pb-20">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <div>
            <h2 className="blue-subheading mb-6">Why choose MField Labs</h2>
            <div className="differentiator-grid">
              {boxes.map((box, index) => (
                <button key={box} onClick={() => setActive(index)} className="differentiator-box">
                  {box}
                </button>
              ))}
              <a href="/#contact" className="differentiator-box touch-box">Get In<br />Touch <ArrowRight className="h-7 w-7" /></a>
            </div>
          </div>

          <div id="how-we-work-together" className="how-work-box">
            <h2 className="blue-subheading mb-7">How We Work Together</h2>
            <div className="work-list">
              {engagementModels.map((model, index) => (
                <button key={model.title} onClick={() => setActive(index)}>
                  <span className="work-number">{index + 1}</span>
                  <span className="work-title">{model.title}</span>
                  <span className="work-body">{model.body.split("Typical outcomes:")[0].trim()}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
