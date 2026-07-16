import { BrandLogo } from "./brand-logo";
import { contactInfo, demoHref, erpModules, navLinks } from "./data";

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-white px-5 pb-8 pt-20 sm:px-8 sm:pt-24 lg:px-12">
      <div className="mx-auto max-w-[1400px] border-t border-black/10 pt-10">
        <div className="grid gap-12 pb-16 lg:grid-cols-[1.4fr_.7fr_.7fr_.7fr]">
          {/* Brand + contact */}
          <div>
            <BrandLogo light={false} />
            <p className="mt-6 max-w-xs text-sm leading-7 text-[#65726e]">
              Modern ERP and accounting software for growing businesses — finance, inventory, sales, HR, CRM and reporting in one platform.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-2 text-sm font-medium text-[#0b765f] transition hover:text-[#075746]"
              >
                <MailIcon />
                {contactInfo.email}
              </a>

              {contactInfo.phone ? (
                <a
                  href={`tel:${contactInfo.phone.replace(/\s/g, "")}`}
                  className="flex items-center gap-2 text-sm text-[#5a6763] transition hover:text-[#0a1714]"
                >
                  <PhoneIcon />
                  {contactInfo.phone}
                </a>
              ) : (
                <p className="flex items-center gap-2 text-sm text-[#b0bab6]">
                  <PhoneIcon />
                  <span>Phone — add number before launch</span>
                </p>
              )}

              {contactInfo.whatsapp ? (
                <a
                  href={`https://wa.me/${contactInfo.whatsapp.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-[#5a6763] transition hover:text-[#0a1714]"
                >
                  <WhatsAppIcon />
                  WhatsApp
                </a>
              ) : (
                <p className="flex items-center gap-2 text-sm text-[#b0bab6]">
                  <WhatsAppIcon />
                  <span>WhatsApp — add number before launch</span>
                </p>
              )}
            </div>

            <a
              href={demoHref}
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#0b765f] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0a6352]"
            >
              Request a Demo ↗
            </a>
          </div>

          {/* ERP Modules */}
          <div>
            <h2 className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#0a785f]">ERP Modules</h2>
            <ul className="mt-5 space-y-3">
              {erpModules.map((mod) => (
                <li key={mod.title}>
                  <a href="#modules" className="text-sm text-[#5a6763] transition hover:text-[#0a1714]">
                    {mod.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h2 className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#0a785f]">Services</h2>
            <ul className="mt-5 space-y-3">
              <li><a href="#services" className="text-sm text-[#5a6763] transition hover:text-[#0a1714]">ERP & Operations</a></li>
              <li><a href="#services" className="text-sm text-[#5a6763] transition hover:text-[#0a1714]">Custom Software</a></li>
              <li><a href="#services" className="text-sm text-[#5a6763] transition hover:text-[#0a1714]">Business Automation</a></li>
              <li><a href="#services" className="text-sm text-[#5a6763] transition hover:text-[#0a1714]">AI Solutions</a></li>
              <li><a href="#services" className="text-sm text-[#5a6763] transition hover:text-[#0a1714]">System Integrations</a></li>
              <li><a href="#services" className="text-sm text-[#5a6763] transition hover:text-[#0a1714]">POS & Retail</a></li>
            </ul>
          </div>

          {/* Explore */}
          <div>
            <h2 className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#0a785f]">Explore</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-[#5a6763] transition hover:text-[#0a1714]">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-black/10 py-6 text-xs text-[#87918e] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Flowrix Solutions. All rights reserved.</p>
          <p>Modern ERP & Accounting Software for Growing Businesses</p>
        </div>
      </div>
    </footer>
  );
}

function MailIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-[#0b765f]" fill="none">
      <path d="M3 5a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 0l7 5 7-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4 shrink-0 text-[#b0bab6]" fill="none">
      <path d="M2 3.5A1.5 1.5 0 013.5 2h1.148a1.5 1.5 0 011.465 1.175l.716 3.223a1.5 1.5 0 01-1.052 1.767l-.933.267c-.41.117-.643.555-.48.95a11.542 11.542 0 006.254 6.254c.395.163.833-.07.95-.48l.267-.933a1.5 1.5 0 011.767-1.052l3.223.716A1.5 1.5 0 0118 15.352V16.5a1.5 1.5 0 01-1.5 1.5H15C7.82 18 2 12.18 2 5v-1.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-[#b0bab6]" fill="currentColor">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
