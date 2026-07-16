import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import type { ServicePage } from "@/lib/content/services";
import { getIndustryBySlug } from "@/lib/content/industries";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/seo";

type ServiceDetailPageProps = {
  service: ServicePage;
};

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="h-4 w-4" fill="none">
      <path
        d="M4 10h11m0 0-4-4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ServiceDetailPage({ service }: ServiceDetailPageProps) {
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.title, path: `/services/${service.slug}` },
  ];

  const relatedIndustries = service.relatedIndustries
    .map((slug) => getIndustryBySlug(slug))
    .filter((industry): industry is NonNullable<typeof industry> => Boolean(industry));

  return (
    <>
      <JsonLd data={serviceJsonLd({ name: service.title, description: service.metaDescription, path: `/services/${service.slug}` })} />
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />

      <section className="bg-[#07110f] px-5 pb-20 pt-32 text-white sm:px-8 sm:pb-24 sm:pt-40 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          <Breadcrumbs items={breadcrumbs} light />
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#58e6ca] sm:text-[10px]">
            {service.detail}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-[64px]">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            {service.summary}
          </p>
          <a
            href={service.ctaHref}
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#26dfbd] px-6 py-3.5 text-sm font-semibold text-[#04110e] transition hover:bg-[#67f1d7]"
          >
            {service.ctaLabel} <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="bg-[#f3f6f4] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto grid max-w-[1100px] gap-12 lg:grid-cols-2">
          <div>
            <p className="section-label text-[#087a68]">The problem</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] text-[#081511] sm:text-4xl">
              Where the work gets stuck
            </h2>
            <p className="mt-5 text-base leading-8 text-[#53625e] sm:text-lg">{service.problem}</p>
          </div>
          <div>
            <p className="section-label text-[#087a68]">The Flowrix approach</p>
            <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] text-[#081511] sm:text-4xl">
              How we solve it
            </h2>
            <p className="mt-5 text-base leading-8 text-[#53625e] sm:text-lg">{service.solution}</p>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1100px]">
          <p className="section-label text-[#087a68]">What you gain</p>
          <h2 className="mt-4 text-3xl font-medium tracking-[-0.035em] text-[#081511] sm:text-4xl">
            Clear benefits
          </h2>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {service.benefits.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 rounded-[18px] border border-black/[0.06] bg-[#f7f9f8] p-5 text-sm leading-6 text-[#2a3733]"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#11b798]" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-[#edf2ef] px-5 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1100px] grid gap-12 lg:grid-cols-2">
          <div>
            <p className="section-label text-[#087a68]">ERP modules</p>
            <h2 className="mt-4 text-2xl font-medium tracking-[-0.03em] text-[#081511]">
              Related platform modules
            </h2>
            <ul className="mt-6 space-y-3">
              {service.relatedModules.map((module) => (
                <li key={module}>
                  <Link
                    href="/#modules"
                    className="text-sm font-medium text-[#0b765f] transition hover:text-[#075746]"
                  >
                    {module}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {relatedIndustries.length > 0 ? (
            <div>
              <p className="section-label text-[#087a68]">Industries</p>
              <h2 className="mt-4 text-2xl font-medium tracking-[-0.03em] text-[#081511]">
                Where this shows up most
              </h2>
              <ul className="mt-6 space-y-3">
                {relatedIndustries.map((industry) => (
                  <li key={industry.slug}>
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="text-sm font-medium text-[#0b765f] transition hover:text-[#075746]"
                    >
                      ERP for {industry.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-[#07110f] px-5 py-20 text-white sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1100px] text-center">
          <h2 className="text-3xl font-medium tracking-[-0.04em] sm:text-4xl">
            Ready to walk through {service.title}?
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-8 text-white/50">
            Tell us how your teams operate today. We will show where Flowrix fits—and where it should stay out of the way.
          </p>
          <a
            href={service.ctaHref}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#26dfbd] px-6 py-3.5 text-sm font-semibold text-[#04110e] transition hover:bg-[#67f1d7]"
          >
            {service.ctaLabel} <ArrowIcon />
          </a>
        </div>
      </section>
    </>
  );
}
