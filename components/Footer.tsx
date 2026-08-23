"use client";

import * as React from "react";
import Image from "next/image";
import { Database, Workflow, LayoutPanelLeft, Sparkles } from "lucide-react";
import { footerCompanyLinks } from "@/content/nav";
import { capabilities, type CapabilityIcon } from "@/content/capabilities";
import { contact } from "@/content/contact";
import CapabilityModal from "@/components/ui/CapabilityModal";

const ICONS: Record<CapabilityIcon, typeof Database> = {
  database: Database,
  workflow: Workflow,
  layout: LayoutPanelLeft,
  sparkles: Sparkles,
};

export default function Footer() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);
  const active = openIndex !== null ? capabilities[openIndex] : null;
  const ActiveIcon = active ? ICONS[active.icon] : null;

  return (
    <footer className="bg-navy px-6 py-16 text-white md:px-16">
      <div className="container grid gap-10 md:grid-cols-4">
        <div>
          <div className="relative mb-4 h-20 w-96 max-w-full">
            <Image
              src="/logo/mfield-logo-white-text.png"
              alt="Mfield"
              fill
              sizes="10rem"
              className="object-contain object-left"
            />
          </div>
          <p className="max-w-xs text-sm leading-relaxed text-white">
            Trusted Intelligence and Digital Evolution Partner. Turning Complexity into Clarity.
          </p>
        </div>
        <div>
          <p className="eyebrow mb-4" style={{ color: "#38bdf8" }}>
            Company
          </p>
          <ul className="space-y-2 text-sm text-white">
            {footerCompanyLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-white">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4" style={{ color: "#38bdf8" }}>
            Capabilities
          </p>
          <ul className="space-y-2 text-sm text-white">
            {capabilities.map((c, i) => (
              <li key={c.n}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(i)}
                  className="text-left transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky"
                >
                  {c.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4" style={{ color: "#38bdf8" }}>
            Contact
          </p>
          <ul className="space-y-2 text-sm text-white">
            <li>
              <a href={`mailto:${contact.email}`} className="transition-colors hover:text-white">
                {contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mt-14 border-t border-white/10 pt-6 text-xs text-white">
        © {new Date().getFullYear()} Mfield. All rights reserved.
      </div>

      {active && ActiveIcon ? (
        <CapabilityModal
          open={openIndex !== null}
          onClose={() => setOpenIndex(null)}
          icon={ActiveIcon}
          title={active.title}
          tagline={active.tagline}
          body={active.body}
          impactAreas={active.impactAreas}
          outcomes={active.outcomes}
          image={active.image}
        />
      ) : null}
    </footer>
  );
}
