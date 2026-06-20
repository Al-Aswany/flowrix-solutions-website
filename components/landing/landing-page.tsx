import { FinalCta } from "./final-cta";
import { HeroSection } from "./hero-section";
import { IndustriesSection } from "./industries-section";
import { ManifestoSection } from "./manifesto-section";
import { OperationsFlow } from "./operations-flow";
import { ProcessSection } from "./process-section";
import { ServicesBento } from "./services-bento";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { WhyFlowrix } from "./why-flowrix";

export function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ManifestoSection />
        <ServicesBento />
        <OperationsFlow />
        <IndustriesSection />
        <WhyFlowrix />
        <ProcessSection />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
