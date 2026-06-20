import { operationFlow } from "./data";

export function OperationsFlow() {
  return (
    <section id="operations" className="relative overflow-hidden bg-[#07110f] px-5 py-24 text-white sm:px-8 sm:py-32 lg:px-12">
      <div className="operations-grid absolute inset-0 opacity-40" />
      <div className="absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#19d5b3]/[0.05] blur-3xl" />
      <div className="relative mx-auto max-w-[1400px]">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          <div>
            <p className="section-label text-[#45e3c5]">One connected operation</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.04] tracking-[-0.045em] sm:text-5xl lg:text-[64px]">Your business is a system. We make it flow.</h2>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/50 lg:ml-auto lg:text-lg">Information should not stop at departmental borders. Flowrix connects every operational step so teams work from the same reality.</p>
        </div>

        <div className="relative mt-16 rounded-[26px] border border-white/[0.08] bg-[#0a1815]/80 p-4 shadow-[0_40px_100px_rgba(0,0,0,.35)] sm:p-7 lg:p-10">
          <div className="absolute left-[8%] right-[8%] top-1/2 hidden h-px bg-gradient-to-r from-transparent via-[#38e2c2]/50 to-transparent lg:block" />
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {operationFlow.map((node, index) => (
              <div key={node.label} className="group relative">
                <article className="relative z-10 min-h-[164px] rounded-2xl border border-white/[0.08] bg-[#0c1e1a] p-4 transition duration-300 hover:border-[#3de4c5]/30 hover:bg-[#102720] sm:p-5">
                  <div className="flex items-center justify-between">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#42e4c6]/20 bg-[#33dfbe]/10 font-mono text-[8px] text-[#55eacc]">{node.icon}</span>
                    <span className={`h-1.5 w-1.5 rounded-full ${index === operationFlow.length - 1 ? "bg-[#94ffe9] shadow-[0_0_12px_#43e2c4]" : "bg-white/15"}`} />
                  </div>
                  <h3 className="mt-8 text-base font-medium tracking-[-0.02em] text-white">{node.label}</h3>
                  <p className="mt-2 text-xs leading-5 text-white/36">{node.short}</p>
                </article>
                {index < operationFlow.length - 1 ? <div className="absolute -right-2 top-1/2 z-20 hidden h-4 w-4 -translate-y-1/2 items-center justify-center rounded-full border border-[#48e5c7]/30 bg-[#0c211c] text-[8px] text-[#4ee7ca] lg:flex">›</div> : null}
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-col gap-3 rounded-2xl border border-[#3ddfbe]/15 bg-[#2edcba]/[0.055] px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-3"><span className="h-2 w-2 rounded-full bg-[#3fe3c4] shadow-[0_0_14px_#3fe3c4]" /><p className="text-xs text-white/62">One source of truth across the operation</p></div>
            <p className="font-mono text-[8px] tracking-[0.16em] text-[#5de9ce]">CONNECTED / AUTOMATED / VISIBLE</p>
          </div>
        </div>
      </div>
    </section>
  );
}
