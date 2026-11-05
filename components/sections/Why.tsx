"use client";

import React from "react";
import { why } from "@/content/why";

export default function Why() {
  return (
    <section id="why" className="min-h-screen bg-white px-6 pb-28 pt-16 md:px-16 md:pt-20">
      <div className="container">
        <div className="grid gap-10 lg:grid-cols-2">
          
            <p className="eyebrow mb-5 text-base">{why.eyebrow}</p>
            <h2 className="mb-7 max-w-md border-l-2 border-deepblue pl-5 font-display text-3xl font-bold leading-[1.2] text-ink md:text-4xl">
              {why.heading}
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-6">
              {why.description}
            </p>
          
          <div className="flex flex-col gap-8">
            <div>
              <p className="text-xs font-bold text-gray-600 uppercase tracking-wider mb-4">
                {why.talent.eyebrow}
              </p>
              <p className="text-base text-gray-700 leading-relaxed mb-6">
                {why.talent.description}
              </p>
              <div className="border-l-4 border-blue-600 bg-blue-50 px-5 py-4">
                <p className="text-sm text-gray-800 leading-relaxed">
                  {why.talent.accountableTeam}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
