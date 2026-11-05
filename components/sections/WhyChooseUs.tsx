"use client";

import React, { useState } from "react";
import { why } from "@/content/why";

export default function WhyChooseUs() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <section 
      id="why-choose-us" 
      className="min-h-screen bg-white px-6 md:px-16"
      style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}
    >
      {/* Main Content */}
      <main className="container flex flex-col md:flex-row">
        {/* Left Panel - 52% */}
        <div className="w-full bg-white py-12 md:w-[52%] md:border-r md:border-gray-200">
          <div className="eyebrow mb-4 text-base">
            Why MField Labs
          </div>
          <h2 className="mb-5 text-left font-display text-4xl font-bold leading-[1.15] text-blue-600 md:text-5xl">
            Why MField Labs Exists
          </h2>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p className="!text-lg md:!text-xl">
              Growing businesses face many of the same challenges as large enterprises. You need reliable data. You need 
              less manual work. You need AI that actually helps instead of just sounding good in a meeting. You need systems 
              that talk to each other.
            </p>
            <p className="!text-lg md:!text-xl">
              But the traditional consulting model was built around large enterprise budgets and large enterprise timelines, 
              not yours. So most growing businesses either go without, or cobble together freelancers and hope it works.
            </p>
            <p className="!text-lg md:!text-xl">
              MField Labs was built differently. The intelligence your business needs, in your data, your people, your systems, 
              your institutional knowledge, is probably already there. Our job is to connect it into something coherent, using 
              senior judgment and an efficient delivery model, so you get enterprise-caliber thinking without enterprise-level 
              cost or commitment.
            </p>
          </div>
        </div>

        {/* Right Panel - 48% */}
        <div className="w-full bg-white pt-6 pb-12 md:w-[48%] md:pl-12">
          {/* A Different Model, By Design Card */}
          <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4 shadow-[0_8px_24px_rgba(17,24,39,0.08)]">
            <div className="text-base font-bold text-gray-600 uppercase tracking-wider mb-2">
              A DIFFERENT MODEL, BY DESIGN
            </div>
            <p className="text-base text-gray-600 mb-4">
              We&apos;re not a smaller version of a big consulting firm, and we&apos;re not a cheaper alternative to one either.
            </p>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {/* Traditional Big Consulting */}
              <div>
                <h4 className="text-base font-bold text-gray-600 uppercase mb-2">
                  Traditional Big Consulting
                </h4>
                <div className="space-y-2">
                  <div className="text-base text-gray-600 opacity-65 !no-underline">Large teams</div>
                  <div className="text-base text-gray-600 opacity-65 !no-underline">High overhead</div>
                  <div className="text-base text-gray-600 opacity-65 !no-underline">Long, broad engagements</div>
                  <div className="text-base text-gray-600 opacity-65 !no-underline">Transformation programs that touch everything</div>
                </div>
              </div>

              {/* MField Labs */}
              <div>
                <h4 className="text-base font-bold text-gray-600 uppercase mb-2 pb-1.5 border-b border-gray-200">
                  MField Labs
                </h4>
                <div className="space-y-2">
                  <div className="text-base text-blue-600 font-semibold">✓ Focused team, senior-led</div>
                  <div className="text-base text-blue-600 font-semibold">✓ Efficient global delivery</div>
                  <div className="text-base text-blue-600 font-semibold">✓ Start with a sprint, prove value fast</div>
                  <div className="text-base text-blue-600 font-semibold">✓ Solve the highest-value problem first</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex gap-1 rounded-md bg-gray-300 p-1 flex-shrink-0">
            <button
              onClick={() => setActiveTab("tab1")}
              className={`flex-1 rounded-md px-2 py-2.5 text-xs font-semibold text-center transition-all ${
                activeTab === "tab1"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "bg-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              Sound Familiar?
            </button>
            <button
              onClick={() => setActiveTab("tab2")}
              className={`flex-1 rounded-md px-2 py-2.5 text-xs font-semibold text-center transition-all ${
                activeTab === "tab2"
                  ? "bg-white text-gray-900 shadow-sm"
                  : "bg-transparent text-gray-600 hover:text-gray-900"
              }`}
            >
              More Than Access to Talent
            </button>
          </div>

          {/* Tab Content 1: Sound Familiar */}
          {activeTab === "tab1" && (
            <div className="flex-1 overflow-y-auto">
              <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3">
                
              </div>
              <div className="space-y-1.5 mb-3">
                {why.symptoms.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="rounded-md border border-sky/30 border-l-3 border-l-blue-600 bg-sky/10 px-3 py-2 text-sm italic text-gray-900 transition-shadow hover:shadow-sm"
                  >
                    {item}
                  </div>
                ))}
              </div>
              <div className="text-xs font-semibold text-gray-900 mt-10.5">
                <i>If any of this sounds familiar, you&apos;re not alone - and it&apos;s fixable.,</i>
              </div>
            </div>
          )}

          {/* Tab Content 2: More Than Access to Talent */}
          {activeTab === "tab2" && (
            <div className="flex-1 overflow-y-auto">
              <div className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-3">
                
              </div>
              <div className="space-y-2.5 text-2xl text-gray-600 leading-relaxed"><br></br>
                <p>
                  You can already hire an AI developer, a Power BI analyst, or an automation specialist online. Good talent 
                  isn&apos;t hard to find anymore.
                </p>
                <p>
                  What&apos;s harder to find is judgment: knowing which problem to solve first, how the pieces fit together, and 
                  who&apos;s accountable when they don&apos;t. Hire five independent specialists and you become the project manager, the 
                  quality reviewer, and the person who owns the outcome if something doesn&apos;t work.
                </p>
                <div className="border-l-4 border-blue-600 bg-blue-50 px-3.5 py-3 text-base text-gray-900">
                  <strong>MField Labs is one accountable team.</strong> We diagnose the problem, decide what to tackle first, 
                  bring together the right expertise, make sure the pieces fit together, and stand behind the result. You don&apos;t 
                  have to assemble and manage the team. We do that.
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
    </section>
  );
}
