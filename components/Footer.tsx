import Image from "next/image";
import { footerCompanyLinks } from "@/content/nav";
import { capabilities } from "@/content/capabilities";
import { contact } from "@/content/contact";

export default function Footer() {
  return (
    <footer className="bg-navy px-5 py-12 text-white sm:px-8 md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-[1160px] gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
        <div>
          <div className="relative mb-5 h-16 w-44">
            <Image src="/logo/field-logo-png.png" alt="Mfield Labs" fill className="object-contain object-left" />
          </div>
          <p className="max-w-sm text-xs leading-6 text-white/55">Trusted Intelligence and Digital Evolution Partner. Turning Complexity into Clarity.</p>
        </div>
        <div><p className="eyebrow mb-4 !text-sky">Company</p>{footerCompanyLinks.map(l=><a key={l.href} href={l.href} className="block py-1 text-xs text-white/60 hover:text-white">{l.label.trim()}</a>)}</div>
        <div><p className="eyebrow mb-4 !text-sky">Capabilities</p>{capabilities.map(c=><a key={c.n} href="#services" className="block py-1 text-xs text-white/60 hover:text-white">{c.title}</a>)}</div>
        <div><p className="eyebrow mb-4 !text-sky">Contact</p><a href={`mailto:${contact.email}`} className="text-xs text-white/60 hover:text-white">{contact.email}</a></div>
      </div>
      <div className="mx-auto mt-10 max-w-[1160px] border-t border-white/10 pt-5 text-[10px] text-white/35">© {new Date().getFullYear()} Mfieldlabs. All rights reserved.</div>
    </footer>
  );
}
