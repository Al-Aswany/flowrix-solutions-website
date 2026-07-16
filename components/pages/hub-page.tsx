import Image from "next/image";
import Link from "next/link";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import type { IndustryPage } from "@/lib/content/industries";
import type { ServicePage } from "@/lib/content/services";
import { breadcrumbJsonLd } from "@/lib/seo";

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

type ServicesHubProps = {
  kind: "services";
  items: ServicePage[];
};

type IndustriesHubProps = {
  kind: "industries";
  items: IndustryPage[];
};

type HubPageProps = ServicesHubProps | IndustriesHubProps;

export function HubPage(props: HubPageProps) {
  const isServices = props.kind === "services";
  const breadcrumbs = [
    { name: "Home", path: "/" },
    {
      name: isServices ? "Services" : "Industries",
      path: isServices ? "/services" : "/industries",
    },
  ];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(breadcrumbs)} />

      <section className="bg-[#07110f] px-5 pb-16 pt-32 text-white sm:px-8 sm:pb-20 sm:pt-40 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <Breadcrumbs items={breadcrumbs} light />
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-[#58e6ca] sm:text-[10px]">
            {isServices ? "What we build" : "Who we build for"}
          </p>
          <h1 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] sm:text-5xl lg:text-[64px]">
            {isServices
              ? "Services that complete your operating layer"
              : "Industries where Flowrix fits naturally"}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
            {isServices
              ? "ERP is the foundation. Around it we design custom software, automation, integrations, AI, retail systems, and digital experiences."
              : "Retail, manufacturing, distribution, services, and internal operations—each with the same need for one clear operating system."}
          </p>
        </div>
      </section>

      <section className="bg-[#f3f6f4] px-5 py-16 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          {isServices ? (
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {props.items.map((service) => (
                <article
                  key={service.slug}
                  className="flex flex-col rounded-[22px] border border-black/[0.06] bg-white p-6 sm:p-7"
                >
                  <p className="font-mono text-[9px] tracking-[0.17em] text-[#087a68]">
                    {service.detail}
                  </p>
                  <h2 className="mt-8 text-2xl font-medium tracking-[-0.03em] text-[#0a1714]">
                    {service.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-6 text-[#5e6b67]">{service.summary}</p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#0b765f] transition hover:text-[#075746]"
                  >
                    Learn about {service.title} <ArrowIcon />
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="grid gap-3 lg:grid-cols-6">
              {props.items.map((industry, index) => (
                <article
                  key={industry.slug}
                  className={`flex flex-col overflow-hidden rounded-[22px] border border-black/[0.06] bg-white ${
                    index < 2 ? "lg:col-span-3" : "lg:col-span-2"
                  }`}
                >
                  <div className="relative aspect-[1672/941] overflow-hidden bg-[#07110f]">
                    <Image
                      src={`/${industry.image}`}
                      alt={industry.imageAlt}
                      fill
                      sizes={
                        index < 2
                          ? "(min-width: 1024px) 50vw, 100vw"
                          : "(min-width: 1024px) 33vw, 100vw"
                      }
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <h2 className="text-xl font-medium tracking-[-0.025em] text-[#0b1714]">
                      {industry.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-6 text-[#61706b]">{industry.summary}</p>
                    <Link
                      href={`/industries/${industry.slug}`}
                      className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0b765f] transition hover:text-[#075746]"
                    >
                      ERP for {industry.title} <ArrowIcon />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
