import { orderJourney } from "./data";

export function OrderJourney() {
  const { badge, title, intro, steps, footnote } = orderJourney;

  return (
    <section id="operations" className="relative overflow-hidden bg-[#07110f] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
      <div className="operations-grid absolute inset-0 opacity-40" />
      <div className="absolute left-1/2 top-1/3 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#19d5b3]/[0.05] blur-3xl" />

      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="section-label text-[#45e3c5]">{badge}</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-[60px]">
              {title}
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/50 lg:ml-auto lg:text-lg">{intro}</p>
        </div>

        <div className="relative mt-16 rounded-[26px] border border-white/[0.08] bg-[#0a1815]/80 p-4 shadow-[0_40px_100px_rgba(0,0,0,.35)] sm:p-7 lg:p-10">
          <ol className="relative grid gap-3 lg:grid-cols-5">
            <div className="absolute left-[8%] right-[8%] top-[34px] hidden h-px bg-gradient-to-r from-transparent via-[#38e2c2]/45 to-transparent lg:block" />
            {steps.map((step, index) => (
              <li key={step.team} className="group relative">
                <article className="relative z-10 flex min-h-[210px] flex-col rounded-2xl border border-white/[0.08] bg-[#0c1e1a] p-5 transition duration-300 hover:border-[#3de4c5]/30 hover:bg-[#102720]">
                  <div className="flex items-center justify-between">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#42e4c6]/20 bg-[#33dfbe]/10 font-mono text-[9px] text-[#55eacc]">
                      {step.icon}
                    </span>
                    <span className="font-mono text-[9px] tracking-[0.1em] text-white/30">{step.time}</span>
                  </div>
                  <h3 className="mt-7 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5de9ce]">{step.team}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/55">{step.text}</p>
                </article>
                {index < steps.length - 1 ? (
                  <div className="absolute -right-2 top-[34px] z-20 hidden h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full border border-[#48e5c7]/30 bg-[#0c211c] text-[8px] text-[#4ee7ca] lg:flex">
                    ›
                  </div>
                ) : null}
              </li>
            ))}
          </ol>

          <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-[#3ddfbe]/15 bg-[#2edcba]/[0.055] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#3fe3c4] shadow-[0_0_14px_#3fe3c4]" />
              <p className="text-sm text-white/62">{footnote}</p>
            </div>
            <p className="font-mono text-[8px] tracking-[0.16em] text-[#5de9ce]">CAPTURED ONCE / SHARED EVERYWHERE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
