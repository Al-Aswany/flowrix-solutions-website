import { demoHref } from "@/lib/site";

export type ServiceTone = "dark" | "light" | "teal";

export type ServicePage = {
  code: string;
  slug: string;
  title: string;
  description: string;
  detail: string;
  tone: ServiceTone;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  problem: string;
  solution: string;
  benefits: string[];
  relatedModules: string[];
  relatedIndustries: string[];
  ctaLabel: string;
  ctaHref: string;
};

export const services: ServicePage[] = [
  {
    code: "01",
    slug: "erp-operations-solutions",
    title: "ERP & Operations Solutions",
    description:
      "ERP architecture, implementation, customization, and reporting shaped around the way your teams actually operate.",
    detail: "ERP / OPERATIONS",
    tone: "dark",
    metaTitle: "ERP & Operations Solutions | Flowrix Solutions",
    metaDescription:
      "ERP architecture, implementation, and customization shaped around how your teams operate—finance, inventory, sales, HR, and reporting in one platform.",
    summary:
      "Architecture, implementation, and reporting shaped around the way your teams actually work.",
    problem:
      "Growing businesses often run on disconnected tools. Finance, warehouse, and sales each keep their own version of the truth, so decisions wait on meetings instead of live data.",
    solution:
      "We design and implement an ERP operating layer that fits your real workflows—chart of accounts, stock rules, approvals, and reports—then stay through go-live so the system earns trust.",
    benefits: [
      "One source of truth across finance, inventory, and sales",
      "Implementation paced to your team, not a generic template",
      "Reporting that matches how you already decide",
      "A partner who stays after launch",
    ],
    relatedModules: [
      "Accounting & Finance",
      "Inventory & Stock",
      "Sales & Purchasing",
      "Dashboards & Reports",
    ],
    relatedIndustries: ["retail-pos", "manufacturing", "distribution"],
    ctaLabel: "Request a Demo",
    ctaHref: demoHref,
  },
  {
    code: "02",
    slug: "custom-software",
    title: "Custom Software",
    description:
      "Internal platforms, customer portals, dashboards, and tools for workflows that off-the-shelf software cannot cover.",
    detail: "PRODUCT ENGINEERING",
    tone: "light",
    metaTitle: "Custom Software Development | Flowrix Solutions",
    metaDescription:
      "Internal platforms, customer portals, and operational tools for workflows that off-the-shelf software cannot cover.",
    summary:
      "Portals, dashboards, and internal tools for workflows that generic products cannot cover.",
    problem:
      "Some work does not fit a boxed product. Teams end up with spreadsheets, side apps, and brittle handoffs that never quite connect to the ERP.",
    solution:
      "We build focused software around the process you already run—portals for customers or partners, internal dashboards, and tools that sit cleanly beside Flowrix ERP.",
    benefits: [
      "Software shaped to your process, not the other way around",
      "Clear ownership of data and permissions",
      "Integrations with ERP and existing systems",
      "Maintainable architecture built for growth",
    ],
    relatedModules: ["CRM", "Dashboards & Reports", "Sales & Purchasing"],
    relatedIndustries: ["service-companies", "internal-operations"],
    ctaLabel: "Book a Consultation",
    ctaHref: demoHref,
  },
  {
    code: "03",
    slug: "business-automation",
    title: "Business Automation",
    description:
      "Approvals, alerts, handoffs, and document flows designed to take repetitive work out of daily operations.",
    detail: "WORKFLOW DESIGN",
    tone: "teal",
    metaTitle: "Business Automation | Flowrix Solutions",
    metaDescription:
      "Approvals, alerts, handoffs, and document flows that remove repetitive work from daily operations without hiding how the process works.",
    summary:
      "Approvals, alerts, and handoffs designed to remove repetitive work from daily operations.",
    problem:
      "Approvals sit in inboxes. Status lives in chat. The same document gets re-typed between teams. The business moves only as fast as the next follow-up.",
    solution:
      "We map the real handoffs, then automate the ones that should never need a meeting—approvals, alerts, document flows—while keeping ownership and exceptions visible.",
    benefits: [
      "Fewer chase-ups for routine approvals",
      "Clear owners and audit trails",
      "Alerts when something actually needs attention",
      "Processes that stay understandable after automation",
    ],
    relatedModules: ["Sales & Purchasing", "HR & Payroll", "Accounting & Finance"],
    relatedIndustries: ["internal-operations", "distribution", "service-companies"],
    ctaLabel: "Request a Demo",
    ctaHref: demoHref,
  },
  {
    code: "04",
    slug: "ai-rag-solutions",
    title: "AI & RAG Solutions",
    description:
      "Practical assistants and knowledge systems grounded in company data, with traceable sources and deliberate guardrails.",
    detail: "APPLIED INTELLIGENCE",
    tone: "dark",
    metaTitle: "AI & RAG Solutions | Flowrix Solutions",
    metaDescription:
      "Practical AI assistants and knowledge systems grounded in your company data, with traceable sources and deliberate guardrails.",
    summary:
      "Assistants and knowledge systems grounded in your data, with sources you can verify.",
    problem:
      "Generic AI tools guess. Teams need answers rooted in policies, product data, and operational history—not confident fiction.",
    solution:
      "We build retrieval-augmented systems that answer from your documents and systems of record, with clear sources and guardrails so people can trust what they see.",
    benefits: [
      "Answers grounded in your own data",
      "Traceable sources for every response",
      "Guardrails suited to internal or customer use",
      "Practical scope—not a science project",
    ],
    relatedModules: ["CRM", "Dashboards & Reports", "Inventory & Stock"],
    relatedIndustries: ["service-companies", "manufacturing", "retail-pos"],
    ctaLabel: "Book a Consultation",
    ctaHref: demoHref,
  },
  {
    code: "05",
    slug: "system-integrations",
    title: "System Integrations",
    description:
      "Reliable connections between ERP, POS, finance, logistics, CRM, websites, and custom APIs.",
    detail: "CONNECTED SYSTEMS",
    tone: "light",
    metaTitle: "System Integrations | Flowrix Solutions",
    metaDescription:
      "Reliable integrations between ERP, POS, finance, logistics, CRM, websites, and custom APIs so data moves once and stays consistent.",
    summary:
      "Reliable connections between ERP, POS, finance, logistics, CRM, and your other systems.",
    problem:
      "When systems do not talk, people become the integration. Orders, stock, and invoices get re-keyed—and eventually disagree.",
    solution:
      "We connect the tools you already depend on so the same event updates ERP, POS, finance, and the channels that need it—with clear ownership when something fails.",
    benefits: [
      "Fewer manual re-entries between systems",
      "Consistent stock, orders, and financial data",
      "APIs and connectors built for reliability",
      "Monitoring and ownership when a sync fails",
    ],
    relatedModules: ["Inventory & Stock", "Sales & Purchasing", "Accounting & Finance"],
    relatedIndustries: ["retail-pos", "distribution", "manufacturing"],
    ctaLabel: "Request a Demo",
    ctaHref: demoHref,
  },
  {
    code: "06",
    slug: "cloud-devops",
    title: "Cloud & DevOps",
    description:
      "Deployments, environments, monitoring, backups, and infrastructure built for dependable growth.",
    detail: "INFRASTRUCTURE",
    tone: "light",
    metaTitle: "Cloud & DevOps | Flowrix Solutions",
    metaDescription:
      "Deployments, environments, monitoring, backups, and infrastructure built so your systems stay dependable as you grow.",
    summary:
      "Deployments, environments, monitoring, and backups built for dependable growth.",
    problem:
      "As software becomes critical to the business, fragile deploys and unclear environments turn every release into a risk.",
    solution:
      "We set up environments, deployment paths, monitoring, and backups so updates are repeatable and the people who run the business can trust the platform day to day.",
    benefits: [
      "Repeatable deployments across environments",
      "Monitoring that surfaces real problems early",
      "Backups and recovery you can explain",
      "Infrastructure that grows with usage",
    ],
    relatedModules: ["Dashboards & Reports"],
    relatedIndustries: ["internal-operations", "service-companies"],
    ctaLabel: "Book a Consultation",
    ctaHref: demoHref,
  },
  {
    code: "07",
    slug: "pos-retail-systems",
    title: "POS & Retail Systems",
    description:
      "Multi-branch retail, inventory visibility, pricing logic, cashier journeys, and back-office control.",
    detail: "RETAIL OPERATIONS",
    tone: "dark",
    metaTitle: "POS & Retail Systems | Flowrix Solutions",
    metaDescription:
      "Multi-branch POS, inventory visibility, pricing, and cashier workflows connected to back-office ERP for growing retailers.",
    summary:
      "Multi-branch POS, pricing, and inventory visibility connected to the back office.",
    problem:
      "By the time nightly numbers reconcile, the day is gone. Branches, prices, and stock disagree until someone closes the books by hand.",
    solution:
      "We connect cashier journeys, branch inventory, and pricing to one operating layer so sales and stock agree in real time—not at midnight.",
    benefits: [
      "Live stock and sales across branches",
      "Cashier workflows that stay simple at the counter",
      "Pricing and promotions under central control",
      "Back-office ERP that matches what sold on the floor",
    ],
    relatedModules: ["Inventory & Stock", "Sales & Purchasing", "Accounting & Finance"],
    relatedIndustries: ["retail-pos"],
    ctaLabel: "Request a Demo",
    ctaHref: demoHref,
  },
  {
    code: "08",
    slug: "websites-web-apps",
    title: "Websites & Web Apps",
    description:
      "Fast, clear digital experiences—from high-performing company websites to full operational web applications.",
    detail: "DIGITAL EXPERIENCE",
    tone: "teal",
    metaTitle: "Websites & Web Apps | Flowrix Solutions",
    metaDescription:
      "Fast company websites and operational web applications that connect cleanly to your ERP and business systems.",
    summary:
      "Company websites and operational web apps that stay fast, clear, and connected.",
    problem:
      "Marketing sites and internal tools often live apart from the systems that run the business, so customers and staff see stale or conflicting information.",
    solution:
      "We build websites and web applications that are clear for users and connected to the data they need—whether that is a company site or an operational app beside your ERP.",
    benefits: [
      "Clear experiences for customers and teams",
      "Performance suited to real traffic",
      "Connections to ERP and business data when needed",
      "Design consistent with how Flowrix presents your brand",
    ],
    relatedModules: ["CRM", "Dashboards & Reports"],
    relatedIndustries: ["retail-pos", "service-companies"],
    ctaLabel: "Book a Consultation",
    ctaHref: demoHref,
  },
];

export function getAllServiceSlugs(): string[] {
  return services.map((service) => service.slug);
}

export function getServiceBySlug(slug: string): ServicePage | undefined {
  return services.find((service) => service.slug === slug);
}
