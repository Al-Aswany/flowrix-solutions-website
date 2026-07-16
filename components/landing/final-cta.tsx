import { consultationHref, demoHref } from "./data";

export function FinalCta() {
  return (
    <section className="bg-white px-5 py-5 sm:px-8 sm:py-8 lg:px-12">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-[#07110f] px-6 py-20 text-white sm:px-12 sm:py-28 lg:px-20 lg:py-32">
        <div className="hero-grid absolute inset-0 opacity-30" />
        <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full border-[70px] border-[#21d9b7]/[0.055]" />
        <div className="absolute bottom-[-180px] left-1/3 h-[360px] w-[680px] -rotate-6 rounded-[100px] border border-[#37e4c3]/10 bg-[#21d9b7]/[0.025]" />
        <div className="relative max-w-4xl">
          <p className="section-label text-[#4ce5c8]">See it in action</p>
          <h2 className="mt-6 text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[74px]">Request a walkthrough of the ERP platform.</h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">A focused demo of the modules that matter most to your business — accounting, inventory, HR, CRM, or all of them. No long slides. Just the system, live, on your data.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={demoHref} className="inline-flex items-center gap-3 rounded-full bg-[#2adfbe] px-6 py-3.5 text-sm font-semibold text-[#04110e] transition hover:bg-[#75f1da]">
              Request a Demo <span aria-hidden="true">↗</span>
            </a>
            <a href={consultationHref} className="inline-flex items-center gap-3 rounded-full border border-white/14 bg-white/[0.035] px-6 py-3.5 text-sm font-medium text-white/78 transition hover:border-white/25 hover:bg-white/[0.07] hover:text-white">
              Book a consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
