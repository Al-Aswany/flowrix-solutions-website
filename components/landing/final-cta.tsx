import { consultationHref } from "./data";

export function FinalCta() {
  return (
    <section className="bg-white px-5 py-5 sm:px-8 sm:py-8 lg:px-12">
      <div className="relative mx-auto max-w-[1400px] overflow-hidden rounded-[28px] bg-[#07110f] px-6 py-20 text-white sm:px-12 sm:py-28 lg:px-20 lg:py-32">
        <div className="hero-grid absolute inset-0 opacity-30" />
        <div className="absolute -right-24 -top-28 h-96 w-96 rounded-full border-[70px] border-[#21d9b7]/[0.055]" />
        <div className="absolute bottom-[-180px] left-1/3 h-[360px] w-[680px] -rotate-6 rounded-[100px] border border-[#37e4c3]/10 bg-[#21d9b7]/[0.025]" />
        <div className="relative max-w-4xl">
          <p className="section-label text-[#4ce5c8]">Start a conversation</p>
          <h2 className="mt-6 text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-6xl lg:text-[78px]">Ready to build smarter business systems?</h2>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/50 sm:text-lg">Tell us where work slows down, where data gets lost, or what you need to build next. We will help map the right path forward.</p>
          <a href={consultationHref} className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#2adfbe] px-6 py-3.5 text-sm font-semibold text-[#04110e] transition hover:bg-[#75f1da]">
            Book a consultation <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
