import { notFound } from "next/navigation";
import { IndustryDetailPage } from "@/components/pages/industry-detail-page";
import {
  getAllIndustrySlugs,
  getIndustryBySlug,
} from "@/lib/content/industries";
import { buildPageMetadata } from "@/lib/seo";

type IndustryRouteProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllIndustrySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: IndustryRouteProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  return buildPageMetadata({
    title: industry.metaTitle,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
    image: {
      url: `/${industry.image}`,
      width: 1600,
      height: 900,
      alt: industry.imageAlt,
    },
  });
}

export default async function IndustryPage({ params }: IndustryRouteProps) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  return <IndustryDetailPage industry={industry} />;
}
