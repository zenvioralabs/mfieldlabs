"use client";

import * as React from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/content/nav";

export default function Nav() {
  const [open, setOpen] = React.useState(false);
  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-10">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between rounded-full border border-black/5 bg-white/85 px-3 py-2 shadow-[0_8px_30px_rgba(17,24,39,.06)] backdrop-blur-xl">
        <a href="#top" className="relative h-10 w-32 sm:h-11 sm:w-40">
          <Image src="/logo/mfield-logo-png.png" alt="Mfield Labs" fill className="object-contain object-left" priority />
        </a>
        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => <a key={l.href} href={l.href} className="text-xs font-semibold text-ink/60 transition hover:text-deepblue">{l.label.trim()}</a>)}
        </nav>
        <div className="flex items-center gap-2">
          <a href="#contact" className="blue-pill !px-4 !py-2">Contact Us</a>
          <button onClick={() => setOpen(!open)} className="flex h-9 w-9 items-center justify-center rounded-full md:hidden" aria-label="Toggle menu">
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && <motion.nav initial={{opacity:0,y:-8}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} className="mx-auto mt-2 max-w-[1240px] rounded-2xl border border-black/5 bg-white p-3 shadow-xl md:hidden">
          {navLinks.map(l => <a key={l.href} href={l.href} onClick={()=>setOpen(false)} className="block rounded-xl px-4 py-3 text-sm font-semibold">{l.label.trim()}</a>)}
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}
