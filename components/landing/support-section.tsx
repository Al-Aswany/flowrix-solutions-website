import { supportChat, supportPrinciples } from "./data";

function SupportConversation() {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0a1815]/80 p-5 shadow-[0_35px_90px_rgba(0,0,0,.35)] sm:p-7">
      <div className="flex items-center justify-between border-b border-white/[0.07] pb-4">
        <div className="flex items-center gap-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#35e7c5] opacity-50" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#35e7c5]" />
          </span>
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/52">Thursday · 9:41 PM</p>
        </div>
        <p className="font-mono text-[9px] text-[#44e7c8]/70">A REAL HANDOFF</p>
      </div>

      <div className="mt-6 space-y-4">
        {supportChat.map((message, index) => {
          const isFlowrix = message.from === "flowrix";
          return (
            <div key={index} className={`flex flex-col ${isFlowrix ? "items-start" : "items-end"}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                  isFlowrix
                    ? "rounded-tl-sm border border-[#3ddfbe]/20 bg-[#2edcba]/[0.08] text-white/82"
                    : "rounded-tr-sm border border-white/[0.08] bg-white/[0.04] text-white/68"
                }`}
              >
                {message.text}
              </div>
              <p className="mt-1.5 px-1 font-mono text-[8px] tracking-[0.12em] text-white/30">
                {message.name} · {message.time}
              </p>
            </div>
          );
        })}
      </div>

      <p className="mt-6 border-t border-white/[0.07] pt-4 text-center font-mono text-[8px] tracking-[0.12em] text-white/25">
        EXAMPLE SUPPORT FLOW—SHOWN SO EXPECTATIONS ARE CLEAR
      </p>
    </div>
  );
}

export function SupportSection() {
  return (
    <section id="support" className="relative overflow-hidden bg-[#07110f] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
      <div className="hero-grid absolute inset-0 opacity-25" />
      <div className="absolute right-[-12rem] top-[-6rem] -z-10 h-[480px] w-[480px] rounded-full bg-[#17dfb9]/[0.06] blur-[130px]" />

      <div className="relative mx-auto grid max-w-[1400px] gap-14 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-20">
        <div>
          <p className="section-label text-[#45e3c5]">A partner that stays</p>
          <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-[58px]">
            Support that feels like a person, not a queue.
          </h2>
          <p className="mt-6 max-w-xl text-base leading-8 text-white/50 sm:text-lg">
            Anyone can promise support. Here is the standard we hold ourselves to when something important needs a human answer.
          </p>

          <div className="mt-10 border-t border-white/[0.08]">
            {supportPrinciples.map((principle, index) => (
              <article key={principle.title} className="grid grid-cols-[34px_1fr] gap-3 border-b border-white/[0.08] py-5 sm:grid-cols-[44px_1fr] sm:gap-4">
                <span className="font-mono text-[9px] text-[#55e8cc]">0{index + 1}</span>
                <div>
                  <h3 className="text-sm font-semibold text-white/88">{principle.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/48">{principle.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <SupportConversation />
      </div>
    </section>
  );
}
