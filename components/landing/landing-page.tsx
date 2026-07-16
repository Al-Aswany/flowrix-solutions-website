import { BeforeAfter } from "./before-after";
import { ErpModules } from "./erp-modules";
import { FinalCta } from "./final-cta";
import { FounderNote } from "./founder-note";
import { HeroSection } from "./hero-section";
import { IndustriesSection } from "./industries-section";
import { OrderJourney } from "./order-journey";
import { ProcessSection } from "./process-section";
import { ServicesBento } from "./services-bento";
import { SiteFooter } from "./site-footer";
import { SiteHeader } from "./site-header";
import { SupportSection } from "./support-section";
import { WhyFlowrix } from "./why-flowrix";

export function LandingPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <HeroSection />
        <ErpModules />
        <FounderNote />
        <BeforeAfter />
        <OrderJourney />
        <ServicesBento />
        <IndustriesSection />
        <SupportSection />
        <ProcessSection />
        <WhyFlowrix />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
