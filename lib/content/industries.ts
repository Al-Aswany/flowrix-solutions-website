import { demoHref } from "@/lib/site";

export type IndustryPage = {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  quote: string;
  relief: string;
  index: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  problem: string;
  solution: string;
  benefits: string[];
  relatedModules: string[];
  relatedServices: string[];
  ctaLabel: string;
  ctaHref: string;
};

export const industries: IndustryPage[] = [
  {
    slug: "retail-pos",
    title: "Retail & POS",
    image: "retail-pos.webp",
    imageAlt:
      "Retail team managing inventory and point-of-sale workflows on Flowrix ERP",
    quote: "By the time the numbers add up at night, the day is already gone.",
    relief:
      "Every branch, price and cashier journey runs on one system, so stock and sales agree in real time—not at midnight.",
    index: "01",
    metaTitle: "ERP for Retail & POS | Flowrix Solutions",
    metaDescription:
      "Connect branches, inventory, pricing, and cashier workflows in one ERP platform so stock and sales agree in real time.",
    summary:
      "Branches, prices, and cashier journeys on one system—stock and sales that agree during the day.",
    problem:
      "Retail teams close the day reconciling what sold, what moved, and what the shelves still hold. By the time the numbers match, the next shift has already started.",
    solution:
      "Flowrix connects POS, branch inventory, and back-office finance so every sale updates stock and reporting live. Pricing and promotions stay under control without slowing the counter.",
    benefits: [
      "Live stock visibility across branches",
      "Cashier workflows that stay simple at peak hours",
      "Sales and inventory that reconcile as they happen",
      "Back-office reports you can trust before midnight",
    ],
    relatedModules: ["Inventory & Stock", "Sales & Purchasing", "Accounting & Finance"],
    relatedServices: ["pos-retail-systems", "erp-operations-solutions", "system-integrations"],
    ctaLabel: "Request a Demo",
    ctaHref: demoHref,
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    image: "manufacturing.webp",
    imageAlt:
      "Manufacturing floor tracking materials and production against plan with Flowrix ERP",
    quote: "We only find out a job lost money after we've already shipped it.",
    relief:
      "Materials, production, quality and maintenance are tracked against the plan as work happens, not after it closes.",
    index: "02",
    metaTitle: "ERP for Manufacturing | Flowrix Solutions",
    metaDescription:
      "Track materials, production, quality, and cost against the plan as work happens—so margin is visible before you ship.",
    summary:
      "Materials, production, and cost tracked against the plan while the job is still on the floor.",
    problem:
      "Jobs look fine until they ship. Material usage, labor, and scrap only show up in the books afterward—when it is too late to protect the margin.",
    solution:
      "Flowrix tracks materials, production steps, and costs against the plan as work progresses, so teams see variance while they can still act—not after the truck leaves.",
    benefits: [
      "Material and production visibility during the job",
      "Cost signals before you ship",
      "Quality and maintenance tied to the same plan",
      "Finance and operations working from one record",
    ],
    relatedModules: ["Inventory & Stock", "Accounting & Finance", "Dashboards & Reports"],
    relatedServices: ["erp-operations-solutions", "business-automation", "system-integrations"],
    ctaLabel: "Request a Demo",
    ctaHref: demoHref,
  },
  {
    slug: "distribution",
    title: "Distribution",
    image: "distribution.webp",
    imageAlt:
      "Warehouse and distribution operation keeping stock and fulfillment in sync with Flowrix",
    quote: "Stock says one thing, the shelf says another, and the customer is waiting.",
    relief:
      "Movement, warehouse logic and fulfillment stay in sync across every location, so what the system promises is actually there.",
    index: "03",
    metaTitle: "ERP for Distribution | Flowrix Solutions",
    metaDescription:
      "Keep warehouse movement, stock levels, and fulfillment in sync across locations so what you promise is actually available.",
    summary:
      "Warehouse movement and fulfillment in sync—so promised stock is actually there.",
    problem:
      "Customers wait while teams reconcile what the system says with what is on the shelf. Each location tells a slightly different story.",
    solution:
      "Flowrix keeps movement, warehouse logic, and fulfillment aligned across locations, so availability, orders, and shipping decisions share one current picture.",
    benefits: [
      "Stock levels that match physical reality",
      "Fulfillment decisions based on live availability",
      "Multi-location visibility without spreadsheet merges",
      "Fewer failed promises to waiting customers",
    ],
    relatedModules: ["Inventory & Stock", "Sales & Purchasing", "Dashboards & Reports"],
    relatedServices: ["erp-operations-solutions", "system-integrations", "business-automation"],
    ctaLabel: "Request a Demo",
    ctaHref: demoHref,
  },
  {
    slug: "service-companies",
    title: "Service Companies",
    image: "service-companies.webp",
    imageAlt:
      "Service company team coordinating tickets, schedules, and billing in Flowrix",
    quote: "Half the team is busy, half is idle, and nobody can tell me which is which.",
    relief:
      "Tickets, schedules, contracts and billing share one view, so you can see capacity and margin before they slip.",
    index: "04",
    metaTitle: "ERP for Service Companies | Flowrix Solutions",
    metaDescription:
      "Connect tickets, schedules, contracts, and billing so service businesses see capacity and margin before they slip.",
    summary:
      "Tickets, schedules, contracts, and billing in one view—capacity you can see before it slips.",
    problem:
      "Service work is scattered across inboxes, calendars, and invoices. Leaders cannot see who is free, what is sold, or which contracts are quietly losing money.",
    solution:
      "Flowrix brings tickets, schedules, contracts, and billing into one operating view so capacity and margin stay visible while the work is still happening.",
    benefits: [
      "Clear view of team capacity",
      "Contracts and billing tied to the work delivered",
      "Fewer surprises when invoices go out",
      "One place for ops and finance to look",
    ],
    relatedModules: ["CRM", "HR & Payroll", "Accounting & Finance", "Sales & Purchasing"],
    relatedServices: ["erp-operations-solutions", "custom-software", "business-automation"],
    ctaLabel: "Request a Demo",
    ctaHref: demoHref,
  },
  {
    slug: "internal-operations",
    title: "Internal Operations",
    image: "internal-operations.webp",
    imageAlt:
      "Internal operations team tracking approvals and document workflows in Flowrix",
    quote: "Every approval lives in someone's inbox, and that someone is on leave.",
    relief:
      "Scattered approvals, documents and recurring admin become traceable workflows that keep moving without you chasing them.",
    index: "05",
    metaTitle: "Internal Operations Software | Flowrix Solutions",
    metaDescription:
      "Turn scattered approvals, documents, and recurring admin into traceable workflows that keep moving without constant chase-ups.",
    summary:
      "Approvals and admin that keep moving—traceable workflows instead of inbox archaeology.",
    problem:
      "Internal work stalls in personal inboxes. When the owner of an approval is away, the whole process stops—and nobody can see where.",
    solution:
      "Flowrix turns approvals, documents, and recurring admin into workflows with clear owners and status, so work continues even when someone is out.",
    benefits: [
      "Approvals that do not depend on one inbox",
      "Visible status for every open request",
      "Less chasing for routine admin",
      "Audit-friendly history when questions come up",
    ],
    relatedModules: ["HR & Payroll", "Accounting & Finance", "Dashboards & Reports"],
    relatedServices: ["business-automation", "custom-software", "erp-operations-solutions"],
    ctaLabel: "Request a Demo",
    ctaHref: demoHref,
  },
];

export function getAllIndustrySlugs(): string[] {
  return industries.map((industry) => industry.slug);
}

export function getIndustryBySlug(slug: string): IndustryPage | undefined {
  return industries.find((industry) => industry.slug === slug);
}
