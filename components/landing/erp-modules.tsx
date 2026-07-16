import { erpModules } from "./data";

function CheckIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 16 16" className="h-3.5 w-3.5 shrink-0" fill="none">
      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ModulePreview({ code }: { code: string }) {
  if (code === "01") {
    // Accounting: journal entry table
    return (
      <div className="mt-8 overflow-hidden rounded-xl border border-white/8 bg-black/10">
        <div className="flex border-b border-white/8 px-3 py-2">
          {["Account", "Debit", "Credit"].map((h) => (
            <p key={h} className={`font-mono text-[8px] text-white/30 ${h === "Account" ? "flex-1" : "w-14 text-right"}`}>{h}</p>
          ))}
        </div>
        {[
          ["Revenue", "", "12,400"],
          ["AR", "12,400", ""],
          ["Cash", "8,200", ""],
        ].map(([acc, dr, cr]) => (
          <div key={acc} className="flex border-b border-white/[0.04] px-3 py-1.5 last:border-0">
            <p className="flex-1 text-[9px] text-white/55">{acc}</p>
            <p className="w-14 text-right font-mono text-[9px] text-[#32dfbd]">{dr}</p>
            <p className="w-14 text-right font-mono text-[9px] text-white/40">{cr}</p>
          </div>
        ))}
      </div>
    );
  }

  if (code === "02") {
    // Inventory: stock levels with alert
    return (
      <div className="mt-8 space-y-2.5">
        {[
          { name: "Item A — SKU 1042", pct: 72, ok: true },
          { name: "Item B — SKU 2081", pct: 18, ok: false },
          { name: "Item C — SKU 3310", pct: 55, ok: true },
        ].map((item) => (
          <div key={item.name}>
            <div className="mb-1 flex items-center justify-between">
              <span className="text-[9px] text-white/50">{item.name}</span>
              {!item.ok && (
                <span className="rounded-full bg-amber-500/20 px-1.5 py-0.5 font-mono text-[7px] text-amber-400">LOW</span>
              )}
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${item.pct}%`,
                  backgroundColor: item.ok ? "#32dfbd" : "#f59e0b",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (code === "03") {
    // Sales: order pipeline
    return (
      <div className="mt-8 flex gap-1.5">
        {[
          { stage: "Quote", count: "5", active: false },
          { stage: "Order", count: "12", active: true },
          { stage: "Ship", count: "7", active: false },
          { stage: "Invoiced", count: "9", active: false },
        ].map((s) => (
          <div
            key={s.stage}
            className={`flex flex-1 flex-col items-center gap-1.5 rounded-xl border py-3 ${
              s.active
                ? "border-[#32dfbd]/25 bg-[#32dfbd]/10"
                : "border-white/[0.07] bg-white/[0.025]"
            }`}
          >
            <p className={`font-mono text-[14px] font-semibold ${s.active ? "text-[#32dfbd]" : "text-white/60"}`}>{s.count}</p>
            <p className={`text-[8px] ${s.active ? "text-[#32dfbd]/70" : "text-white/30"}`}>{s.stage}</p>
          </div>
        ))}
      </div>
    );
  }

  if (code === "04") {
    // HR: payroll run status
    return (
      <div className="mt-8 space-y-3">
        {[
          { label: "Salaries processed", pct: 100, color: "#32dfbd" },
          { label: "Deductions applied", pct: 100, color: "#32dfbd" },
          { label: "Payslips sent", pct: 84, color: "#a8ffed" },
        ].map((row) => (
          <div key={row.label}>
            <div className="mb-1.5 flex justify-between">
              <span className="text-[9px] text-white/50">{row.label}</span>
              <span className="font-mono text-[9px]" style={{ color: row.color }}>{row.pct}%</span>
            </div>
            <div className="h-1.5 overflow-hidden rounded-full bg-white/[0.06]">
              <div className="h-full rounded-full" style={{ width: `${row.pct}%`, backgroundColor: row.color }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (code === "05") {
    // CRM: lead pipeline
    return (
      <div className="mt-8 grid grid-cols-3 gap-2">
        {[
          { stage: "New", count: 14, color: "#a8ffed" },
          { stage: "Qualified", count: 8, color: "#32dfbd" },
          { stage: "Won", count: 5, color: "#3fe5c5" },
        ].map((s) => (
          <div key={s.stage} className="rounded-xl border border-white/[0.07] bg-white/[0.025] p-3 text-center">
            <p className="font-mono text-[18px] font-semibold" style={{ color: s.color }}>{s.count}</p>
            <p className="mt-1 text-[8px] text-white/35">{s.stage}</p>
          </div>
        ))}
      </div>
    );
  }

  if (code === "06") {
    // Reports: KPI cards + mini bar
    const kpiBars = [55, 70, 62, 85, 78];
    return (
      <div className="mt-8">
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Net Profit", value: "+18%" },
            { label: "Cash Flow", value: "Positive" },
          ].map((kpi) => (
            <div key={kpi.label} className="rounded-lg border border-white/[0.07] bg-white/[0.025] px-3 py-2">
              <p className="font-mono text-[8px] text-white/30">{kpi.label}</p>
              <p className="mt-1 text-[11px] font-medium text-[#32dfbd]">{kpi.value}</p>
            </div>
          ))}
        </div>
        <div className="mt-3 flex h-10 items-end gap-1.5">
          {kpiBars.map((h, i) => (
            <div key={i} className="flex flex-1 items-end overflow-hidden rounded-sm bg-white/[0.03]" style={{ height: "100%" }}>
              <div className="w-full rounded-sm bg-gradient-to-t from-[#087967] to-[#32e2c0] opacity-80" style={{ height: `${h}%` }} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return null;
}

export function ErpModules() {
  return (
    <section id="modules" className="bg-[#07110f] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-[.85fr_1.15fr] lg:items-end">
          <div>
            <p className="section-label text-[#4ce5c8]">ERP Modules</p>
            <h2 className="mt-5 max-w-2xl text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-white sm:text-5xl lg:text-[64px]">
              Everything your business runs on — in one platform.
            </h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/50 lg:ml-auto lg:text-lg">
            ERP, Accounting, Inventory, HR, CRM and Business Automation in one connected platform. No more switching between tools or re-entering data.
          </p>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {erpModules.map((mod, index) => {
            const isDark = index % 2 === 0;
            return (
              <article
                key={mod.code}
                className={`service-card group relative overflow-hidden rounded-[22px] border p-6 transition-transform duration-500 hover:-translate-y-1 sm:p-7 ${
                  isDark
                    ? "border-[#17352e] bg-[#0a1714] text-white"
                    : "border-white/[0.07] bg-white/[0.04] text-white"
                }`}
              >
                <div className="flex items-center justify-between">
                  <p className="font-mono text-[9px] tracking-[0.17em] text-[#4ce6c9]">{mod.detail}</p>
                  <p className="font-mono text-[10px] text-white/20">{mod.code}</p>
                </div>

                <h3 className="mt-8 text-xl font-medium leading-tight tracking-[-0.03em] sm:text-2xl">{mod.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/50">{mod.description}</p>

                <ul className="mt-5 space-y-2">
                  {mod.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-sm text-white/60">
                      <span className="mt-0.5 text-[#32dfbd]"><CheckIcon /></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <ModulePreview code={mod.code} />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
