import { industries } from "./data";
import { IndustryVisual } from "./industry-visual";

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-[#edf2ef] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <p className="section-label text-[#087a68]">Built for real operations</p>
          <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-[#081511] sm:text-5xl lg:text-[64px]">Software belongs in the real world.</h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#53625e] sm:text-lg">On the shop floor, behind the counter, in the warehouse, and inside the teams keeping work moving.</p>
        </div>

        <div className="mt-14 grid gap-3 lg:grid-cols-6">
          {industries.map((industry, index) => (
            <article key={industry.title} className={`industry-card group overflow-hidden rounded-[22px] border border-black/[0.06] bg-white ${index < 2 ? "lg:col-span-3" : "lg:col-span-2"}`}>
              <div className={`relative overflow-hidden bg-[#0a1714] ${index < 2 ? "h-[250px]" : "h-[205px]"}`}>
                <div className="operations-grid absolute inset-0 opacity-30" />
                <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.03]"><IndustryVisual kind={industry.kind} /></div>
                <span className="absolute left-5 top-5 font-mono text-[9px] tracking-[0.18em] text-[#57e7cb]">FIELD / {industry.index}</span>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="text-xl font-medium tracking-[-0.025em] text-[#0b1714]">{industry.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[#61706b]">{industry.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
