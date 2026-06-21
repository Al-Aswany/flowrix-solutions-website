"use client";

import { useEffect, useState } from "react";
import { BrandLogo } from "./brand-logo";
import { consultationHref, navLinks } from "./data";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path d="M4 10h11m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5, 1] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/[0.08] bg-[#07110f]/85 backdrop-blur-xl shadow-[0_10px_40px_-12px_rgba(0,0,0,0.6)]"
          : "border-b border-transparent bg-gradient-to-b from-[#07110f]/70 to-transparent"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[1400px] items-center justify-between px-5 transition-all duration-300 sm:px-8 lg:px-12 ${
          isScrolled ? "h-[64px]" : "h-[78px]"
        }`}
        aria-label="Primary navigation"
      >
        <a href="#top" aria-label="Flowrix Solutions home" className="rounded-md transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#19e3c0]">
          <BrandLogo />
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-white/[0.07] bg-white/[0.03] p-1 backdrop-blur-sm lg:flex">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                style={{ color: isActive ? "#07110f" : "#ffffff" }}
                className="relative rounded-full px-4 py-2 text-[13px] font-medium transition-colors duration-200"
              >
                {isActive ? (
                  <span className="absolute inset-0 -z-0 rounded-full bg-[#22dfbd] shadow-[0_0_20px_rgba(34,223,189,.35)]" />
                ) : null}
                <span className="relative z-10">{link.label}</span>
              </a>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={consultationHref}
            className="group inline-flex items-center gap-2 rounded-full border border-[#44f5d4]/30 bg-[#22dfbd] px-5 py-2.5 text-[13px] font-semibold text-[#04110e] shadow-[0_0_30px_rgba(34,223,189,.14)] transition hover:bg-[#64f7dc] hover:shadow-[0_0_36px_rgba(34,223,189,.3)] focus:outline-none focus:ring-2 focus:ring-[#a7ffef]"
          >
            Book a consultation
            <ArrowIcon />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 bg-white/[0.03] text-white transition hover:bg-white/[0.07] lg:hidden"
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="relative h-3.5 w-5">
            <span className={`absolute left-0 top-0 h-px w-5 bg-current transition duration-300 ${isOpen ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[6px] h-px w-5 bg-current transition duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`absolute bottom-0 left-0 h-px w-5 bg-current transition duration-300 ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </span>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/10 bg-[#07110f]/95 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-[420px] opacity-100" : "max-h-0 border-transparent opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-[1400px] flex-col px-5 pb-6 pt-2">
          {navLinks.map((link) => {
            const isActive = activeId === link.href.replace("#", "");
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{ color: isActive ? "#5de9ce" : "#ffffff" }}
                className="flex items-center justify-between border-b border-white/8 py-4 text-sm transition-colors"
              >
                {link.label}
                <ArrowIcon />
              </a>
            );
          })}
          <a
            href={consultationHref}
            onClick={() => setIsOpen(false)}
            className="mt-5 flex items-center justify-center gap-2 rounded-full bg-[#22dfbd] px-5 py-3 text-sm font-semibold text-[#04110e]"
          >
            Book a consultation <ArrowIcon />
          </a>
        </div>
      </div>
    </header>
  );
}
