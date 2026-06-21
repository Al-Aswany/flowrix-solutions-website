import { beforeAfter } from "./data";

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
      <path d="m3.5 8.5 3 3 6-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DotIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none">
      <path d="M4 8h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function BeforeAfter() {
  const { badge, title, intro, before, after } = beforeAfter;

  return (
    <section className="bg-white px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <p className="section-label text-[#087a68]">{badge}</p>
          <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-[#081511] sm:text-5xl lg:text-[64px]">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#53625e] sm:text-lg">{intro}</p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          <article className="relative overflow-hidden rounded-[26px] border border-black/[0.07] bg-[#f4f6f5] p-7 sm:p-10">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#c2453a]/20 bg-[#c2453a]/[0.06] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[#b04437]">
                {before.tag}
              </span>
              <span className="font-mono text-[10px] tracking-[0.1em] text-[#94a09b]">{before.time}</span>
            </div>
            <h3 className="mt-8 text-2xl font-medium leading-[1.2] tracking-[-0.03em] text-[#1c2724] sm:text-[28px]">
              {before.heading}
            </h3>
            <p className="mt-4 max-w-xl text-base leading-7 text-[#5c6863]">{before.body}</p>
            <ul className="mt-8 space-y-3 border-t border-black/[0.07] pt-7">
              {before.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-[#6b7672]">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#c2453a]/[0.08] text-[#b04437]">
                    <DotIcon />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </article>

          <article className="relative overflow-hidden rounded-[26px] border border-[#17352e] bg-[#07110f] p-7 text-white sm:p-10">
            <div className="hero-grid absolute inset-0 opacity-30" />
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-[#1bd2af]/[0.12] blur-3xl" />
            <div className="relative flex items-center justify-between">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#3ddfbe]/25 bg-[#2edcba]/[0.08] px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-[#5de9ce]">
                {after.tag}
              </span>
              <span className="font-mono text-[10px] tracking-[0.1em] text-white/35">{after.time}</span>
            </div>
            <h3 className="relative mt-8 text-2xl font-medium leading-[1.2] tracking-[-0.03em] sm:text-[28px]">
              {after.heading}
            </h3>
            <p className="relative mt-4 max-w-xl text-base leading-7 text-white/55">{after.body}</p>
            <ul className="relative mt-8 space-y-3 border-t border-white/[0.08] pt-7">
              {after.points.map((point) => (
                <li key={point} className="flex items-center gap-3 text-sm text-white/72">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#3de3c3]/25 bg-[#2edcba]/[0.1] text-[#5de9ce]">
                    <CheckIcon />
                  </span>
                  {point}
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
