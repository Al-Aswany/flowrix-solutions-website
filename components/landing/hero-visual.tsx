const bars = [38, 57, 48, 72, 63, 88, 78, 94];

function PulseDot() {
  return <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#35e7c5] opacity-50" /><span className="relative inline-flex h-2 w-2 rounded-full bg-[#35e7c5]" /></span>;
}

export function HeroVisual() {
  return (
    <div className="hero-console relative mx-auto w-full max-w-[660px] lg:mx-0 lg:max-w-none">
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="absolute -right-12 top-8 hidden h-36 w-60 -rotate-12 rounded-[3rem] border border-[#21d7b6]/20 bg-[#0ad3b2]/5 blur-[1px] sm:block" />

      <div className="hero-screen relative overflow-hidden rounded-[24px] border border-white/10 bg-[#091512]/90 p-2.5 shadow-[0_45px_100px_rgba(0,0,0,.5),0_0_0_1px_rgba(53,231,197,.04)] backdrop-blur-xl">
        <div className="overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0b1714]">
          <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2.5">
              <PulseDot />
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/52 sm:text-[10px]">Flowrix operations core</p>
            </div>
            <p className="font-mono text-[9px] text-[#44e7c8]/70">LIVE / SYNCED</p>
          </div>

          <div className="grid min-h-[420px] grid-cols-[58px_1fr] sm:min-h-[500px] sm:grid-cols-[72px_1fr]">
            <div className="flex flex-col items-center gap-5 border-r border-white/[0.06] py-5">
              {[0, 1, 2, 3, 4].map((item) => (
                <div key={item} className={`flex h-8 w-8 items-center justify-center rounded-lg border ${item === 0 ? "border-[#2ee4c1]/30 bg-[#2ee4c1]/12" : "border-white/[0.06] bg-white/[0.025]"}`}>
                  <span className={`block h-2.5 w-2.5 ${item % 2 ? "rounded-full" : "rotate-45 rounded-[2px]"} ${item === 0 ? "bg-[#36e5c4]" : "border border-white/25"}`} />
                </div>
              ))}
              <div className="mt-auto h-8 w-8 rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-transparent" />
            </div>

            <div className="min-w-0 p-3 sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#42dfc1]">Command center</p>
                  <h2 className="mt-1.5 text-base font-medium text-white sm:text-lg">Connected operations</h2>
                </div>
                <div className="hidden items-center gap-2 rounded-full border border-white/[0.07] px-3 py-1.5 text-[9px] text-white/46 sm:flex">
                  ALL SYSTEMS <span className="text-[#3fe5c5]">NOMINAL</span>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3">
                {[
                  ["ERP CORE", "Synced", "#32dfbd"],
                  ["AUTOMATIONS", "Running", "#77f3da"],
                  ["API LAYER", "Connected", "#a8ffed"],
                ].map(([label, state, color], index) => (
                  <div key={label} className={`${index === 2 ? "col-span-2 sm:col-span-1" : ""} rounded-xl border border-white/[0.07] bg-white/[0.025] p-3`}>
                    <p className="font-mono text-[8px] tracking-[0.14em] text-white/35">{label}</p>
                    <div className="mt-3 flex items-center gap-2 text-[11px] text-white/76"><span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: color }} />{state}</div>
                  </div>
                ))}
              </div>

              <div className="mt-2.5 grid gap-2.5 sm:grid-cols-[1.25fr_.75fr]">
                <div className="rounded-xl border border-white/[0.07] bg-[#0d1b18] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] text-white/52">Operational flow</p>
                    <p className="font-mono text-[8px] text-[#42dfc1]">REAL TIME</p>
                  </div>
                  <div className="mt-7 flex h-28 items-end gap-2 sm:h-32">
                    {bars.map((height, index) => (
                      <div key={index} className="relative flex h-full flex-1 items-end overflow-hidden rounded-sm bg-white/[0.03]">
                        <div className="w-full rounded-sm bg-gradient-to-t from-[#087967] to-[#32e2c0] opacity-80" style={{ height: `${height}%` }} />
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex justify-between font-mono text-[7px] text-white/25"><span>MON</span><span>WED</span><span>FRI</span><span>NOW</span></div>
                </div>

                <div className="rounded-xl border border-white/[0.07] bg-[#0d1b18] p-4">
                  <p className="text-[10px] text-white/52">Integration map</p>
                  <div className="relative mx-auto mt-6 h-36 max-w-[150px]">
                    <span className="absolute left-1/2 top-1/2 h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-[#35e4c2]/20 via-[#35e4c2] to-[#35e4c2]/20" />
                    <span className="absolute left-1/2 top-1/2 h-[72%] w-px -translate-x-1/2 -translate-y-1/2 bg-gradient-to-b from-[#35e4c2]/20 via-[#35e4c2] to-[#35e4c2]/20" />
                    <span className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-[#46ebcb]/30 bg-[#112a24] text-[11px] font-semibold text-[#66efd3] shadow-[0_0_25px_rgba(35,223,188,.15)]">FLOW</span>
                    {["ERP", "POS", "AI", "WEB"].map((node, index) => (
                      <span key={node} className={`absolute flex h-8 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#101f1c] font-mono text-[7px] text-white/48 ${index === 0 ? "left-1/2 top-0 -translate-x-1/2" : index === 1 ? "right-0 top-1/2 -translate-y-1/2" : index === 2 ? "bottom-0 left-1/2 -translate-x-1/2" : "left-0 top-1/2 -translate-y-1/2"}`}>{node}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-2.5 flex items-center justify-between rounded-xl border border-[#35e4c2]/12 bg-[#35e4c2]/[0.04] px-3.5 py-3">
                <div className="flex items-center gap-3"><PulseDot /><div><p className="text-[9px] text-white/68">Workflow completed</p><p className="mt-0.5 font-mono text-[7px] text-white/28">ORDER → STOCK → FINANCE</p></div></div>
                <span className="font-mono text-[8px] text-[#51e8cb]">AUTOMATED</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-6 -left-5 hidden w-48 rounded-2xl border border-white/10 bg-[#0c1b17]/95 p-4 shadow-2xl backdrop-blur sm:block">
        <p className="font-mono text-[8px] tracking-[0.15em] text-white/35">SYSTEM HEALTH</p>
        <div className="mt-3 flex items-center gap-3"><span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#37e5c4]/30 text-[10px] text-[#5aecce]">OK</span><div><p className="text-[11px] text-white/72">All layers connected</p><p className="mt-1 text-[8px] text-white/30">Monitoring active</p></div></div>
      </div>
    </div>
  );
}
