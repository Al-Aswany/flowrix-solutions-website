import { reasons } from "./data";

function SystemBlueprint() {
  return (
    <div className="relative min-h-[500px] overflow-hidden rounded-[28px] bg-[#091713] p-5 text-white shadow-[0_35px_90px_rgba(8,23,19,.18)] sm:p-8">
      <div className="operations-grid absolute inset-0 opacity-30" />
      <div className="relative flex items-center justify-between border-b border-white/[0.07] pb-5">
        <p className="font-mono text-[9px] tracking-[0.18em] text-[#53e7cb]">FLOWRIX / SYSTEM BLUEPRINT</p>
        <span className="h-2 w-2 rounded-full bg-[#35e2c1] shadow-[0_0_12px_#35e2c1]" />
      </div>
      <div className="relative mt-8">
        <div className="absolute left-6 top-0 h-[350px] w-px bg-gradient-to-b from-[#31dfbf] via-[#31dfbf]/30 to-transparent" />
        {[
          ["01", "Business context", "People, process, constraints"],
          ["02", "System architecture", "Data, permissions, integrations"],
          ["03", "Delivery layer", "Build, test, train, launch"],
          ["04", "Improvement loop", "Monitor, learn, extend"],
        ].map(([number, title, detail], index) => (
          <div key={title} className={`relative ml-2 flex gap-5 ${index > 0 ? "mt-6" : ""}`}>
            <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#3de3c3]/30 bg-[#0d251f] font-mono text-[8px] text-[#55e8cc]">{number}</span>
            <div className="flex-1 rounded-2xl border border-white/[0.07] bg-white/[0.025] px-5 py-4">
              <p className="text-sm font-medium text-white/85">{title}</p>
              <p className="mt-1.5 text-xs text-white/34">{detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="relative mt-7 rounded-2xl border border-[#39e1c0]/15 bg-[#2ddcba]/[0.055] p-4">
        <p className="font-mono text-[8px] tracking-[0.15em] text-[#55e8cb]">DESIGN BEFORE DEVELOPMENT</p>
      </div>
    </div>
  );
}

export function WhyFlowrix() {
  return (
    <section id="approach" className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[.9fr_1.1fr] lg:items-center lg:gap-20">
        <div>
          <p className="section-label text-[#087a68]">Why Flowrix</p>
          <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-[#081511] sm:text-5xl lg:text-[62px]">The code is only one part of the work.</h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-[#53625e] sm:text-lg">Good systems come from understanding the operation, making sound architectural choices, and staying accountable after launch.</p>

          <div className="mt-10 border-t border-black/10">
            {reasons.map((reason, index) => (
              <article key={reason.title} className="grid grid-cols-[34px_1fr] gap-3 border-b border-black/10 py-5 sm:grid-cols-[44px_190px_1fr] sm:gap-4">
                <span className="font-mono text-[9px] text-[#079a82]">0{index + 1}</span>
                <h3 className="text-sm font-semibold text-[#10211c]">{reason.title}</h3>
                <p className="col-start-2 text-sm leading-6 text-[#64716d] sm:col-start-3">{reason.description}</p>
              </article>
            ))}
          </div>
        </div>
        <SystemBlueprint />
      </div>
    </section>
  );
}
