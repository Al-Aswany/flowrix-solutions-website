import { BrandLogo } from "./brand-logo";
import { consultationHref, navLinks, services } from "./data";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-white px-5 pb-8 pt-20 sm:px-8 sm:pt-24 lg:px-12">
      <div className="mx-auto max-w-[1400px] border-t border-black/10 pt-10">
        <div className="grid gap-12 pb-16 lg:grid-cols-[1.3fr_.7fr_.7fr]">
          <div>
            <BrandLogo light={false} />
            <p className="mt-6 max-w-md text-sm leading-7 text-[#65726e]">Flowrix Solutions designs, builds, automates, and connects the digital systems behind scalable operations.</p>
            <a href="mailto:hello@flowrix-solutions.com" className="mt-6 inline-block text-sm font-medium text-[#0b765f] transition hover:text-[#075746]">hello@flowrix-solutions.com</a>
          </div>
          <div>
            <h2 className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#0a785f]">Services</h2>
            <ul className="mt-5 space-y-3">
              {services.slice(0, 6).map((service) => <li key={service.title}><a href="#services" className="text-sm text-[#5a6763] transition hover:text-[#0a1714]">{service.title}</a></li>)}
            </ul>
          </div>
          <div>
            <h2 className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#0a785f]">Explore</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => <li key={link.href}><a href={link.href} className="text-sm text-[#5a6763] transition hover:text-[#0a1714]">{link.label}</a></li>)}
              <li><a href={consultationHref} className="text-sm font-medium text-[#08735d]">Book a consultation ↗</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-black/10 py-6 text-xs text-[#87918e] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Flowrix Solutions. All rights reserved.</p>
          <p>Systems designed to keep business moving.</p>
        </div>
      </div>
    </footer>
  );
}
