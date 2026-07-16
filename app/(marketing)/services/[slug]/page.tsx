import { notFound } from "next/navigation";
import { ServiceDetailPage } from "@/components/pages/service-detail-page";
import {
  getAllServiceSlugs,
  getServiceBySlug,
} from "@/lib/content/services";
import { buildPageMetadata } from "@/lib/seo";

type ServiceRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return buildPageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: ServiceRouteProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  return <ServiceDetailPage service={service} />;
}
