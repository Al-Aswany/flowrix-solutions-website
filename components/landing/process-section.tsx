import { implementationWeeks } from "./data";

export function ProcessSection() {
  return (
    <section id="approach" className="overflow-hidden bg-[#dff8f1] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="section-label text-[#087a68]">How a rollout actually goes</p>
            <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-[#081511] sm:text-5xl lg:text-[58px]">
              You won&apos;t be handed a login and wished luck.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-[#425d55] lg:ml-auto">
            Changing the system that runs your business is supposed to be terrifying. Here is why ours isn&apos;t—week by week, with the same people the whole way.
          </p>
        </div>

        <ol className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {implementationWeeks.map((week, index) => {
            const isLast = index === implementationWeeks.length - 1;
            return (
              <li
                key={week.phase}
                className={`relative flex flex-col rounded-[22px] border p-7 transition-transform duration-500 hover:-translate-y-1 ${
                  isLast
                    ? "border-[#17352e] bg-[#07110f] text-white"
                    : "border-[#0d6958]/12 bg-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] ${
                      isLast
                        ? "border border-[#3de3c3]/25 bg-[#2edcba]/[0.1] text-[#5de9ce]"
                        : "border border-[#087963]/20 bg-[#edfffa] text-[#087963]"
                    }`}
                  >
                    {week.phase}
                  </span>
                  <span className={`font-mono text-[11px] ${isLast ? "text-white/25" : "text-[#0c6656]/30"}`}>
                    0{index + 1}
                  </span>
                </div>
                <h3 className={`mt-8 text-xl font-medium tracking-[-0.025em] ${isLast ? "text-white" : "text-[#0a1d18]"}`}>
                  {week.title}
                </h3>
                <p className={`mt-3 text-sm leading-6 ${isLast ? "text-white/52" : "text-[#4b675f]"}`}>{week.detail}</p>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
