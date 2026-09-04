"use client";

import * as React from "react";
import { ArrowRight } from "lucide-react";

const bullets = [
  "Our data is everywhere, and nobody fully trusts the numbers.",
  "Our finance team spends days assembling reports by hand.",
  "Our people spend hundreds of hours a month on work that should be automated.",
  "Our systems don't talk to each other.",
  "Everyone's talking about AI, but we don't know where it would actually make or save us money.",
  "We've grown fast, and our technology hasn't kept up.",
  "We know we need to modernize, but a massive consulting engagement doesn't make sense for us.",
];

export default function About() {
  return (
    <section id="about" className="bg-white px-5 py-20 sm:px-8 md:px-12 lg:px-16 lg:py-28">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="eyebrow mb-4">WHY MFIELDLABS</p>
            <h2 className="section-heading-with-rule mb-7">Why MField Labs Exists</h2>
            <div className="prose-mfield text-ink/80">
              <p>Growing businesses face many of the same challenges as large enterprises. You need reliable data. You need less manual work. You need a team that actually helps instead of just sounding good in a meeting. You need systems that talk to each other.</p>
              <p>But the traditional consulting model was built around large enterprise budgets and large enterprise timelines, not yours. So most growing businesses either go without, or cobble together freelancers and hope it works.</p>
              <p>MField Labs was built differently. The intelligence your business needs, in your data, your people, your systems, your institutional knowledge, is probably already there. Our job is to connect it into something coherent, using senior judgment and an efficient delivery model, so you get enterprise-caliber thinking without enterprise-level cost or commitment.</p>
            </div>
            <div className="blue-callout mt-9 min-h-[80px] w-full text-base italic leading-5 lg:-mr-10 lg:w-[calc(100%+2.5rem)]">
              <span className="text-[16px]">If you're a growing business,our model was actually built<br />with you in mind.</span>
              <a href="#contact" aria-label="Go to contact" className="circle-arrow h-10 w-10"><ArrowRight className="h-5 w-5" /></a>
            </div>
          </div>

          <div className="pt-2 lg:pt-8">
            <h3 className="blue-subheading text-right !text-[20px]">A Different Model, By Design</h3>
            <p className="mt-2 text-right text-[.92rem] leading-5 text-ink/70">We're not a smaller version of a big consulting firm, and we're not a cheaper alternative to one either. We were built for a different customer, with a different model.</p>

            <div className="comparison mt-7">
              <div className="comparison-head">
                <span className="comparison-label">Traditional big-firm consulting</span>
                <b>VS</b>
                <span className="comparison-label">MField Labs</span>
              </div>
            </div>
            <div className="comparison-cards">
              <div className="comparison-card">
                <p className="!text-[.92rem]">Large teams</p><p className="!text-[.92rem]">High overhead</p><p className="!text-[.92rem]">Long, broad engagements</p><p className="!text-[.92rem]">Transformation programs that touch everything</p>
              </div>
              <div className="comparison-card">
                <p className="!text-[.92rem]">Focused team, senior-led</p><p className="!text-[.92rem]">Efficient global delivery</p><p className="!text-[.92rem]">Start with a sprint, prove value fast</p><p className="!text-[.92rem]">Solve the highest-value problem first</p>
              </div>
            </div>
          </div>
        </div>

        <div id="more-than-access" className="scroll-mt-40 mt-28 grid items-start gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div className="max-w-[650px]">
            <h2 className="blue-subheading mb-7 !text-[20px]">More Than Access To Talent</h2>
            <div className="prose-mfield text-ink/80">
              <p>You can already hire an AI developer, a Power BI analyst, or an automation specialist online. Good talent isn't hard to find anymore.</p>
              <p>What's harder to find is judgment: knowing which problem to solve first, how the pieces fit together, and who's accountable when they don't. Hire five independent specialists and you become the project manager, the quality reviewer, and the person who owns the outcome if something doesn't work.</p>
              <p>MField Labs is one accountable team. We diagnose the problem, decide what to tackle first, bring together the right expertise, make sure the pieces fit together, and stand behind the result. You don't have to assemble and manage the team. We do that.</p>
            </div>
          </div>

          <div>
            <div className="blue-callout relative -top-20">
              <span><strong className="text-lg">Sounds Familiar?</strong><br /><small className="text-[14px]">If any of these sound familiar, that's exactly what we work on.</small></span>
              <a href="#contact" aria-label="Go to contact" className="circle-arrow h-10 w-10"><ArrowRight className="h-5 w-5" /></a>
            </div>
            <div className="familiar-box relative -top-20">
              <ul>{bullets.map((bullet) => <li className="!text-[.92rem]" key={bullet}>{bullet}</li>)}</ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
