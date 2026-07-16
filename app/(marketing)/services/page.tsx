import { HubPage } from "@/components/pages/hub-page";
import { services } from "@/lib/content/services";
import { buildPageMetadata } from "@/lib/seo";

export const metadata = buildPageMetadata({
  title: "Services | Flowrix Solutions",
  description:
    "ERP implementation, custom software, automation, AI, integrations, cloud, POS, and web apps that complete your operating layer.",
  path: "/services",
});

export default function ServicesPage() {
  return <HubPage kind="services" items={services} />;
}
