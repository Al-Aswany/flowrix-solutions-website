import Link from "next/link";
import { services } from "./data";

function CardGraphic({ index }: { index: number }) {
  if (index === 0) {
    return (
      <div className="mt-8 grid grid-cols-[1fr_auto_1fr] items-center gap-2">
        <div className="space-y-2">{["Sales", "Stock", "Finance"].map((item) => <div key={item} className="rounded-lg border border-white/8 bg-white/[0.035] px-3 py-2 font-mono text-[8px] text-white/45">{item}</div>)}</div>
        <div className="h-px w-6 bg-[#32e1c0]/60" />
        <div className="rounded-xl border border-[#37e4c3]/20 bg-[#29d9b7]/10 p-4 text-center font-mono text-[9px] text-[#60efd3]">ERP CORE</div>
      </div>
    );
  }
  if (index === 3) {
    return (
      <div className="relative mt-8 h-20 overflow-hidden rounded-xl border border-white/8 bg-black/10 p-3">
        <div className="space-y-2">{[75, 52, 64].map((width) => <div key={width} className="h-1.5 rounded-full bg-white/8"><div className="h-full rounded-full bg-gradient-to-r from-[#15a68c] to-[#49e6c8]" style={{ width: `${width}%` }} /></div>)}</div>
        <span className="absolute bottom-2 right-2 rounded-md border border-[#52eace]/20 bg-[#0c3029] px-2 py-1 font-mono text-[7px] text-[#73f1d7]">GROUNDED</span>
      </div>
    );
  }
  if (index === 6) {
    return (
      <div className="mt-7 flex gap-2">{["01", "02", "03"].map((item) => <div key={item} className="flex-1 rounded-xl border border-white/8 bg-white/[0.03] p-3"><div className="h-8 rounded-md bg-gradient-to-br from-[#1b4038] to-[#0d211d]" /><p className="mt-2 font-mono text-[7px] text-white/30">BRANCH {item}</p></div>)}</div>
    );
  }
  return null;
}

export function ServicesBento() {
  return (
    <section id="services" className="bg-[#f3f6f4] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="section-label text-[#087a68]">Beyond ERP</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-[#081511] sm:text-5xl lg:text-[64px]">ERP is the foundation. We build everything around it.</h2>
          </div>
          <div className="max-w-xl lg:ml-auto">
            <p className="text-base leading-8 text-[#53625e] lg:text-lg">Beyond the ERP core — custom software, AI, automation, cloud infrastructure, POS, and web applications that complete your operating layer.</p>
            <Link
              href="/services"
              className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0b765f] transition hover:text-[#075746]"
            >
              Explore all services →
            </Link>
          </div>
        </div>

        <div className="mt-14 grid auto-rows-[minmax(220px,auto)] gap-3 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const isDark = service.tone === "dark";
            const isTeal = service.tone === "teal";
            const feature = index === 0 || index === 3;
            const classes = isDark
              ? "border-[#17352e] bg-[#0a1714] text-white"
              : isTeal
                ? "border-[#00a88b]/10 bg-[#24dcbc] text-[#05251f]"
                : "border-black/[0.07] bg-white text-[#0a1714]";
            return (
              <article key={service.slug} className={`service-card group relative overflow-hidden rounded-[22px] border p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-7 ${feature ? "lg:col-span-2" : ""} ${index === 6 ? "lg:col-span-2" : ""} ${classes}`}>
                <div className="flex items-center justify-between">
                  <p className={`font-mono text-[9px] tracking-[0.17em] ${isDark ? "text-[#4ce6c9]" : isTeal ? "text-[#063e34]/65" : "text-[#087a68]"}`}>{service.detail}</p>
                  <p className={`font-mono text-[10px] ${isDark ? "text-white/25" : "text-black/25"}`}>{service.code}</p>
                </div>
                <div className={feature || index === 6 ? "max-w-[70%]" : ""}>
                  <h3 className={`mt-12 text-2xl font-medium leading-tight tracking-[-0.03em] ${feature ? "sm:text-3xl" : ""}`}>{service.title}</h3>
                  <p className={`mt-4 max-w-lg text-sm leading-6 ${isDark ? "text-white/52" : isTeal ? "text-[#073e34]/72" : "text-[#5e6b67]"}`}>{service.description}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className={`mt-5 inline-flex text-sm font-semibold transition ${
                      isDark
                        ? "text-[#5de9ce] hover:text-[#a8ffef]"
                        : isTeal
                          ? "text-[#063e34] hover:text-[#041f1a]"
                          : "text-[#0b765f] hover:text-[#075746]"
                    }`}
                  >
                    Learn about {service.title}
                  </Link>
                </div>
                <CardGraphic index={index} />
                {isTeal ? <div className="absolute -bottom-12 -right-8 h-36 w-36 rounded-full border-[24px] border-[#e0fff8]/20" /> : null}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
