"use client";

import { useState } from "react";
import { BrandLogo } from "./brand-logo";
import { consultationHref, navLinks } from "./data";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path d="M4 10h11m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/[0.08] bg-[#07110f]/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-[72px] max-w-[1400px] items-center justify-between px-5 sm:px-8 lg:px-12" aria-label="Primary navigation">
        <a href="#top" aria-label="Flowrix Solutions home" className="rounded-md focus:outline-none focus:ring-2 focus:ring-[#19e3c0]">
          <BrandLogo />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-[13px] font-medium text-white/58 transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <a href={consultationHref} className="group hidden items-center gap-2 rounded-full border border-[#44f5d4]/30 bg-[#22dfbd] px-5 py-2.5 text-[13px] font-semibold text-[#04110e] shadow-[0_0_30px_rgba(34,223,189,.14)] transition hover:bg-[#64f7dc] focus:outline-none focus:ring-2 focus:ring-[#a7ffef] lg:flex">
          Book a consultation
          <ArrowIcon />
        </a>

        <button type="button" onClick={() => setIsOpen((value) => !value)} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white lg:hidden" aria-label="Toggle navigation" aria-expanded={isOpen}>
          <span className="relative h-3.5 w-5">
            <span className={`absolute left-0 top-0 h-px w-5 bg-current transition ${isOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[6px] h-px w-5 bg-current transition ${isOpen ? "opacity-0" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-px w-5 bg-current transition ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      {isOpen ? (
        <div className="border-t border-white/10 bg-[#07110f] px-5 pb-6 pt-4 lg:hidden">
          <div className="mx-auto flex max-w-[1400px] flex-col">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="border-b border-white/8 py-4 text-sm text-white/70">
                {link.label}
              </a>
            ))}
            <a href={consultationHref} className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#22dfbd] px-5 py-3 text-sm font-semibold text-[#04110e]">
              Book a consultation <ArrowIcon />
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
