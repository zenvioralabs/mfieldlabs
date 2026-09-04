"use client";

import * as React from "react";
import { Copy, Check, ArrowRight } from "lucide-react";
import { contact } from "@/content/contact";

export default function ContactSection() {
  const [copied, setCopied] = React.useState(false);
  const copy = async () => { await navigator.clipboard.writeText(contact.email); setCopied(true); setTimeout(() => setCopied(false), 1800); };
  return (
    <section id="contact" className="bg-white px-5 pt-24 pb-16 sm:px-8 md:px-12 lg:px-16 lg:pt-28 lg:pb-20">
      <div className="mx-auto max-w-[1160px]">
        <div className="grid gap-12 lg:grid-cols-[1fr_.9fr] lg:items-start">
          <div>
            <p className="eyebrow mb-6">CONTACT US</p>
            <h2 className="section-heading-with-rule mb-7">Let's Build Intelligent Organizations<br />Together</h2>
            <p className="max-w-[610px] text-[14px] leading-5 text-ink/80">Whether you're exploring a first initiative or planning enterprise-wide transformation, our consultants are ready to discuss your goals and the outcomes that matter most.</p>
            <div className="my-8 h-px max-w-[570px] bg-deepblue/60" />
            <p className="max-w-[600px] text-[14px] leading-5 text-ink/80">Mfieldlabs is a Trusted Intelligence and Digital Evolution Partner. We help organizations transform fragmented operations into connected, data-driven, and AI-enabled ecosystems. By turning complexity into clarity and information into foresight, we build future-ready capabilities through decision intelligence, automation, and AI-powered innovation.</p>
          </div>
          <div className="relative top-[120px] rounded-2xl bg-[#f1f5fb] p-7">
            <p className="eyebrow mb-4 !text-[18px]">NEW PROJECT INQUIRY</p>
            <p className="mb-5 text-[14px] leading-5 text-ink/80">Email directly. When reaching out, please include industry, team size, the problem to solve, and a rough timeline.</p>
            <a href={`mailto:${contact.email}?subject=New project inquiry`} className="blue-pill w-full justify-between">Email Mfieldlabs <ArrowRight className="h-4 w-4" /></a>
            <button onClick={copy} className="mt-2 flex w-full items-center justify-between rounded-full border border-ink/10 px-4 py-2 text-xs text-ink/70">{contact.email} {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}</button>
          </div>
        </div>
      </div>
    </section>
  );
}
