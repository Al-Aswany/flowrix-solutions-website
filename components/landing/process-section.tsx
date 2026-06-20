import { processSteps } from "./data";

export function ProcessSection() {
  return (
    <section className="overflow-hidden bg-[#dff8f1] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-[.75fr_1.25fr] lg:items-end">
          <div>
            <p className="section-label text-[#087a68]">How we work</p>
            <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-[#081511] sm:text-5xl lg:text-[60px]">A disciplined path from question to system.</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-[#425d55] lg:ml-auto">We design before we develop, integrate before we scale, and keep the operation at the center from first workshop to long-term improvement.</p>
        </div>

        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-[27px] hidden h-px bg-[#0c6656]/20 lg:block" />
          <ol className="grid gap-3 sm:grid-cols-2 lg:grid-cols-7">
            {processSteps.map((step, index) => (
              <li key={step.title} className="relative rounded-2xl border border-[#0d6958]/10 bg-white/55 p-5 backdrop-blur-sm lg:border-0 lg:bg-transparent lg:p-0 lg:pr-5">
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#087963]/20 bg-[#edfffa] font-mono text-[9px] text-[#087963] shadow-[0_8px_24px_rgba(8,121,99,.08)]">0{index + 1}</div>
                <h3 className="mt-5 text-base font-semibold tracking-[-0.02em] text-[#0a1d18]">{step.title}</h3>
                <p className="mt-2 text-xs leading-5 text-[#4b675f]">{step.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
