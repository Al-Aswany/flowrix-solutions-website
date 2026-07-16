import { HubPage } from "@/components/pages/hub-page";
import { industries } from "@/lib/content/industries";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Industries | Flowrix Solutions",
  description:
    "Flowrix ERP for retail, manufacturing, distribution, service companies, and internal operations—built around how growing businesses actually work.",
  path: "/industries",
});

export default function IndustriesPage() {
  return <HubPage kind="industries" items={industries} />;
}
