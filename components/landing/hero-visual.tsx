const bars = [42, 58, 51, 76, 68, 91, 83, 97];

const sidebarModules = [
  { abbr: "AC", label: "Accounting" },
  { abbr: "IN", label: "Inventory" },
  { abbr: "SA", label: "Sales" },
  { abbr: "HR", label: "HR" },
  { abbr: "CR", label: "CRM" },
  { abbr: "RP", label: "Reports" },
];

function PulseDot() {
  return (
    <span className="relative flex h-2 w-2">
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#35e7c5] opacity-50" />
      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#35e7c5]" />
    </span>
  );
}

export function HeroVisual() {
  return (
    <div className="hero-console relative mx-auto w-full max-w-[660px] lg:mx-0 lg:max-w-none">
      <div className="hero-orbit hero-orbit-one" />
      <div className="hero-orbit hero-orbit-two" />
      <div className="absolute -right-12 top-8 hidden h-36 w-60 -rotate-12 rounded-[3rem] border border-[#21d7b6]/20 bg-[#0ad3b2]/5 blur-[1px] sm:block" />

      <div className="hero-screen relative overflow-hidden rounded-[24px] border border-white/10 bg-[#091512]/90 p-2.5 shadow-[0_45px_100px_rgba(0,0,0,.5),0_0_0_1px_rgba(53,231,197,.04)] backdrop-blur-xl">
        <div className="overflow-hidden rounded-[18px] border border-white/[0.08] bg-[#0b1714]">
          {/* Top bar */}
          <div className="flex items-center justify-between border-b border-white/[0.07] px-4 py-3 sm:px-5">
            <div className="flex items-center gap-2.5">
              <PulseDot />
              <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/52 sm:text-[10px]">Flowrix ERP Platform</p>
            </div>
            <p className="font-mono text-[9px] text-[#44e7c8]/70">LIVE / SYNCED</p>
          </div>

          <div className="grid min-h-[420px] grid-cols-[58px_1fr] sm:min-h-[500px] sm:grid-cols-[72px_1fr]">
            {/* Module sidebar */}
            <div className="flex flex-col items-center gap-3 border-r border-white/[0.06] py-5">
              {sidebarModules.map((mod, i) => (
                <div
                  key={mod.abbr}
                  className={`flex h-9 w-9 items-center justify-center rounded-lg border ${
                    i === 0
                      ? "border-[#2ee4c1]/30 bg-[#2ee4c1]/12"
                      : "border-white/[0.06] bg-white/[0.025]"
                  }`}
                >
                  <span
                    className={`font-mono text-[7px] font-semibold ${
                      i === 0 ? "text-[#36e5c4]" : "text-white/30"
                    }`}
                  >
                    {mod.abbr}
                  </span>
                </div>
              ))}
              <div className="mt-auto h-8 w-8 rounded-full border border-white/10 bg-gradient-to-br from-white/10 to-transparent" />
            </div>

            {/* Main content */}
            <div className="min-w-0 p-3 sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#42dfc1]">ERP Dashboard</p>
                  <h2 className="mt-1.5 text-base font-medium text-white sm:text-lg">Finance &amp; Operations</h2>
                </div>
                <div className="hidden items-center gap-2 rounded-full border border-white/[0.07] px-3 py-1.5 text-[9px] text-white/46 sm:flex">
                  ALL MODULES <span className="text-[#3fe5c5]">ACTIVE</span>
                </div>
              </div>

              {/* KPI cards */}
              <div className="mt-5 grid grid-cols-3 gap-2">
                {(
                  [
                    ["REVENUE", "↑ 12.4%", "#32dfbd"],
                    ["STOCK ALERTS", "3 Low", "#f59e0b"],
                    ["OPEN ORDERS", "18", "#a8ffed"],
                  ] as [string, string, string][]
                ).map(([label, state, color]) => (
                  <div key={label} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3">
                    <p className="font-mono text-[8px] tracking-[0.14em] text-white/35">{label}</p>
                    <div
                      className="mt-2 text-[11px] font-medium"
                      style={{ color }}
                    >
                      {state}
                    </div>
                  </div>
                ))}
              </div>

              {/* Chart + HR widget */}
              <div className="mt-2.5 grid gap-2.5 sm:grid-cols-[1.4fr_.6fr]">
                {/* Revenue bar chart */}
                <div className="rounded-xl border border-white/[0.07] bg-[#0d1b18] p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-[10px] text-white/52">Revenue this month</p>
                    <p className="font-mono text-[8px] text-[#42dfc1]">REAL TIME</p>
                  </div>
                  <div className="mt-5 flex h-24 items-end gap-2 sm:h-28">
                    {bars.map((height, index) => (
                      <div
                        key={index}
                        className="relative flex h-full flex-1 items-end overflow-hidden rounded-sm bg-white/[0.03]"
                      >
                        <div
                          className="w-full rounded-sm bg-gradient-to-t from-[#087967] to-[#32e2c0] opacity-80"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex justify-between font-mono text-[7px] text-white/25">
                    <span>W1</span><span>W2</span><span>W3</span><span>NOW</span>
                  </div>
                </div>

                {/* Payroll/HR widget */}
                <div className="rounded-xl border border-white/[0.07] bg-[#0d1b18] p-3">
                  <p className="text-[10px] text-white/52">Payroll status</p>
                  <div className="mt-4 space-y-3">
                    {(
                      [
                        ["Processed", 85, "#3fe5c5"],
                        ["Pending", 40, "#f59e0b"],
                        ["Approved", 100, "#3fe5c5"],
                      ] as [string, number, string][]
                    ).map(([label, pct, color]) => (
                      <div key={label}>
                        <div className="mb-1 flex justify-between">
                          <span className="font-mono text-[7px] text-white/35">{label}</span>
                          <span className="font-mono text-[7px]" style={{ color }}>{pct}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${pct}%`, backgroundColor: color }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Live activity notification */}
              <div className="mt-2.5 flex items-center justify-between rounded-xl border border-[#35e4c2]/12 bg-[#35e4c2]/[0.04] px-3.5 py-3">
                <div className="flex items-center gap-3">
                  <PulseDot />
                  <div>
                    <p className="text-[9px] text-white/68">Invoice #1042 posted</p>
                    <p className="mt-0.5 font-mono text-[7px] text-white/28">SALES → FINANCE → AUTO-RECONCILED</p>
                  </div>
                </div>
                <span className="font-mono text-[8px] text-[#51e8cb]">LIVE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating accounting badge */}
      <div className="absolute -bottom-6 -left-5 hidden w-48 rounded-2xl border border-white/10 bg-[#0c1b17]/95 p-4 shadow-2xl backdrop-blur sm:block">
        <p className="font-mono text-[8px] tracking-[0.15em] text-white/35">ACCOUNTING</p>
        <div className="mt-3 flex items-center gap-3">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#37e5c4]/30 text-[10px] font-semibold text-[#5aecce]">GL</span>
          <div>
            <p className="text-[11px] text-white/72">Ledger balanced</p>
            <p className="mt-1 text-[8px] text-white/30">Journal updated</p>
          </div>
        </div>
      </div>
    </div>
  );
}
