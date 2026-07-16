import Image from "next/image";
import Link from "next/link";

import { industries } from "./data";

export function IndustriesSection() {
  return (
    <section id="industries" className="bg-[#edf2ef] px-5 py-24 sm:px-8 sm:py-32 lg:px-12">
      <div className="mx-auto max-w-[1400px]">
        <div className="max-w-3xl">
          <p className="section-label text-[#087a68]">Whatever you run, we&apos;ve sat where you sit</p>
          <h2 className="mt-5 text-4xl font-medium leading-[1.04] tracking-[-0.045em] text-[#081511] sm:text-5xl lg:text-[60px]">
            Find your world below.
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[#53625e] sm:text-lg">
            The words in quotes are real—the kind of thing owners tell us in the first ten minutes. The line beneath is what changes once the work is connected.
          </p>
          <Link
            href="/industries"
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0b765f] transition hover:text-[#075746]"
          >
            Explore all industries →
          </Link>
        </div>

        <div className="mt-14 grid gap-3 lg:grid-cols-6">
          {industries.map((industry, index) => (
            <article
              key={industry.slug}
              className={`industry-card group flex flex-col overflow-hidden rounded-[22px] border border-black/[0.06] bg-white ${
                index < 2 ? "lg:col-span-3" : "lg:col-span-2"
              }`}
            >
              <Link href={`/industries/${industry.slug}`} className="flex h-full flex-col">
                <div className="relative aspect-[1672/941] overflow-hidden bg-[#07110f]">
                  <h3 className="sr-only">{industry.title}</h3>
                  <Image
                    src={`/${industry.image}`}
                    alt={industry.imageAlt}
                    fill
                    sizes={index < 2 ? "(min-width: 1024px) 50vw, 100vw" : "(min-width: 1024px) 33vw, 100vw"}
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <p className="text-lg font-medium leading-[1.32] tracking-[-0.02em] text-[#0b1714]">
                    &ldquo;{industry.quote}&rdquo;
                  </p>
                  <div className="mt-5 flex items-start gap-3 border-t border-black/[0.07] pt-5">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#11b798]" />
                    <p className="text-sm leading-6 text-[#61706b]">{industry.relief}</p>
                  </div>
                  <p className="mt-5 text-sm font-semibold text-[#0b765f]">
                    ERP for {industry.title} →
                  </p>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
