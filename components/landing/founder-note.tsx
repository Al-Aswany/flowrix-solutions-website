import { founderNote } from "./data";

export function FounderNote() {
  return (
    <section id="story" className="relative overflow-hidden bg-[#07110f] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12 lg:py-36">
      <div className="absolute left-[-14rem] top-[-8rem] -z-10 h-[520px] w-[520px] rounded-full bg-[#11cba8]/[0.07] blur-[130px]" />
      <div className="absolute right-[-12rem] bottom-[-10rem] -z-10 h-[460px] w-[460px] rounded-full bg-[#17dfb9]/[0.05] blur-[130px]" />

      <div className="relative mx-auto max-w-[1100px]">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-[#42e4c5]" />
          <p className="section-label text-[#58e6ca]">{founderNote.badge}</p>
        </div>

        <div className="mt-10 space-y-8">
          {founderNote.paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className={`max-w-4xl tracking-[-0.025em] ${
                index === 0
                  ? "text-2xl font-medium leading-[1.32] text-white sm:text-[32px] sm:leading-[1.3]"
                  : "text-xl leading-[1.5] text-white/55 sm:text-[26px] sm:leading-[1.45]"
              }`}
            >
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-8 border-t border-white/[0.08] pt-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="flex items-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#3de3c3]/30 bg-[#0d251f] font-mono text-[10px] text-[#5aecce]">
              FX
            </span>
            <div>
              <p className="text-sm font-medium text-white/85">{founderNote.signature.name}</p>
              <p className="mt-0.5 text-xs text-white/40">{founderNote.signature.role}</p>
            </div>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/45 sm:text-right">{founderNote.audience}</p>
        </div>
      </div>
    </section>
  );
}
