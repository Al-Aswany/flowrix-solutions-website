import { demoHref } from "./data";
import { HeroVisual } from "./hero-visual";

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path d="M4 10h11m0 0-4-4m4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section id="top" className="relative isolate min-h-screen overflow-hidden bg-[#07110f] px-5 pb-24 pt-32 text-white sm:px-8 sm:pb-28 sm:pt-40 lg:px-12 lg:pb-32">
      <div className="hero-grid absolute inset-0 -z-20 opacity-40" />
      <div className="absolute -left-[18rem] top-[-15rem] -z-10 h-[700px] w-[700px] rounded-full bg-[#0ac7a4]/[0.11] blur-[120px]" />
      <div className="absolute right-[-16rem] top-[5rem] -z-10 h-[650px] w-[650px] rounded-full bg-[#17dfb9]/[0.08] blur-[130px]" />
      <div className="flowrix-ribbon absolute -left-24 bottom-[-170px] -z-10 hidden h-[330px] w-[780px] rotate-[-9deg] rounded-[90px] border border-[#27dab8]/10 bg-[#11cba8]/[0.035] lg:block" />

      <div className="mx-auto grid max-w-[1400px] items-center gap-16 lg:grid-cols-[.86fr_1.14fr] lg:gap-8">
        <div className="relative z-10 max-w-[700px]">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-[#42e4c5]" />
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#58e6ca] sm:text-[10px]">ERP & Accounting Platform</p>
          </div>
          <h1 className="mt-8 text-[44px] font-medium leading-[.98] tracking-[-0.055em] text-white sm:text-[64px] lg:text-[clamp(56px,4.8vw,80px)]">
            Modern ERP &amp; Accounting Software for <span className="text-gradient">Growing Businesses</span>
          </h1>
          <p className="mt-7 max-w-[620px] text-base leading-8 text-white/55 sm:text-lg sm:leading-8">
            Connect finance, inventory, sales, HR, CRM and reporting in one intelligent operating system.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href={demoHref} className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#26dfbd] px-6 py-3.5 text-sm font-semibold text-[#04110e] shadow-[0_0_35px_rgba(38,223,189,.16)] transition hover:bg-[#67f1d7] focus:outline-none focus:ring-2 focus:ring-[#a8ffef]">
              Request a Demo <ArrowIcon />
            </a>
            <a href="#modules" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.035] px-6 py-3.5 text-sm font-medium text-white/78 transition hover:border-white/25 hover:bg-white/[0.07] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#77efd9]">
              Explore ERP Modules
            </a>
          </div>
          <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/[0.08] pt-5 font-mono text-[8px] uppercase tracking-[0.14em] text-white/30 sm:text-[9px]">
            <span>Accounting</span><span>Inventory</span><span>Sales</span><span>HR</span><span>CRM</span><span>Reports</span>
          </div>
        </div>
        <HeroVisual />
      </div>

      <div className="mx-auto mt-20 flex max-w-[1400px] items-center gap-4 text-white/24 lg:mt-12">
        <span className="font-mono text-[8px] tracking-[0.18em]">SCROLL TO EXPLORE</span><span className="h-px flex-1 bg-gradient-to-r from-white/15 to-transparent" />
      </div>
    </section>
  );
}
