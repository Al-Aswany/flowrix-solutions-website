import { LandingPage } from "@/components/landing/landing-page";
import { JsonLd } from "@/components/seo/json-ld";
import { websiteJsonLd } from "@/lib/seo";

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteJsonLd()} />
      <LandingPage />
    </>
  );
}
