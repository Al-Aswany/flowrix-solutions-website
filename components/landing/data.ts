import { consultationHref, demoHref, siteConfig } from "@/lib/site";
import { industries as industryPages } from "@/lib/content/industries";
import { services as servicePages } from "@/lib/content/services";

export { consultationHref, demoHref };

export const navLinks = [
  { label: "ERP Modules", href: "/#modules" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Approach", href: "/#approach" },
  { label: "Contact", href: "/#contact" },
];

export const contactInfo = {
  email: siteConfig.email,
  phone: siteConfig.phone,
  whatsapp: siteConfig.whatsapp,
} as const;

export const founderNote = {
  badge: "Why we build this",
  paragraphs: [
    "We keep meeting the same business. Finance is chasing numbers that never quite agree. The warehouse is on the phone with sales. A manager is waiting on one clear answer before they can decide anything.",
    "Flowrix exists for the moment after that—when the tools finally work for your people instead of against them. We get close enough to how you actually operate that the system fits the work, not the other way around.",
  ],
  signature: {
    name: "The Flowrix team",
    role: "Engineers, not salespeople",
  },
  audience:
    "We build for growing teams in retail, manufacturing, distribution and services—the ones who need clarity before they need complexity.",
};

export const beforeAfter = {
  badge: "The shift",
  title: "The same Monday morning, twice.",
  intro:
    "Nothing about the business changed. Only whether the systems were fighting you or quietly doing the work.",
  before: {
    tag: "Before",
    time: "Monday · 7:52 AM",
    heading: "Four tabs open, none of them agree.",
    body: "You are re-keying last week's sales into the stock sheet, hoping it balances before the team arrives. Someone needs to know if you can take the big order. You can't answer that yet—not honestly. The day starts with proving last week happened.",
    points: ["Stock count is a guess", "Sales and finance disagree", "Every answer needs a meeting"],
  },
  after: {
    tag: "After",
    time: "Monday · 9:00 AM",
    heading: "One number, and everyone trusts it.",
    body: "Sales, stock and cash reconciled themselves overnight. The big order is already approved against real availability. You spend the morning deciding what happens next, not reconstructing what already did.",
    points: ["Stock is live and exact", "One source of truth", "Decisions made before coffee"],
  },
};

export const orderJourney = {
  badge: "One connected operation",
  title: "One order. Five teams. Nobody re-types a thing.",
  intro:
    "\u201CConnected\u201D is easy to put on a slide. Here is what it actually means on an ordinary Tuesday—watch a single order move through your business on its own.",
  steps: [
    {
      time: "9:02 AM",
      team: "Sales",
      icon: "01",
      text: "A returning customer places an order for 200 units. It is captured once, cleanly.",
    },
    {
      time: "9:03 AM",
      team: "Inventory",
      icon: "02",
      text: "Flowrix sees only 140 on the shelf and flags the gap—before anyone thinks to ask.",
    },
    {
      time: "9:06 AM",
      team: "Procurement",
      icon: "03",
      text: "A purchase order for the missing 60 writes itself and lands with you to approve.",
    },
    {
      time: "Same day",
      team: "Finance",
      icon: "04",
      text: "When it ships, the invoice and the cost both post on their own. The books stay true.",
    },
    {
      time: "Always",
      team: "Reporting",
      icon: "05",
      text: "And the whole company can already see it. No status meeting required.",
    },
  ],
  footnote: "The same quiet handoff runs every order, payday and project—on one platform.",
};

export const erpModules = [
  {
    code: "01",
    title: "Accounting & Finance",
    description:
      "Full double-entry accounting with real-time P&L, balance sheet, and cash flow — always reconciled.",
    features: [
      "General ledger & chart of accounts",
      "AP / AR & invoice management",
      "Bank reconciliation & journal entries",
    ],
    detail: "FINANCE",
  },
  {
    code: "02",
    title: "Inventory & Stock",
    description:
      "Track every item across warehouses with automated reorder alerts and precise stock valuation.",
    features: [
      "Multi-warehouse stock management",
      "Reorder rules & low-stock alerts",
      "Stock movements, adjustments & valuation",
    ],
    detail: "INVENTORY",
  },
  {
    code: "03",
    title: "Sales & Purchasing",
    description:
      "From quotation to invoice to delivery — the entire order cycle on one screen, no re-keying.",
    features: [
      "Quotations, sales orders & invoicing",
      "Purchase orders & supplier management",
      "Delivery tracking & fulfillment",
    ],
    detail: "SALES / PURCHASING",
  },
  {
    code: "04",
    title: "HR & Payroll",
    description:
      "Manage your team from hire to payslip with complete attendance and leave tracking.",
    features: [
      "Employee records & org structure",
      "Attendance, leave & scheduling",
      "Payroll runs, deductions & payslips",
    ],
    detail: "HR / PAYROLL",
  },
  {
    code: "05",
    title: "CRM",
    description:
      "Follow every lead from first contact through close, with full customer history in one place.",
    features: [
      "Lead & opportunity pipeline",
      "Customer history & communication log",
      "Follow-up tasks & activity tracking",
    ],
    detail: "CRM",
  },
  {
    code: "06",
    title: "Dashboards & Reports",
    description:
      "Real-time KPIs and custom reports across every module — decisions made on live data, not exports.",
    features: [
      "P&L, balance sheet & cash flow reports",
      "Inventory, sales & HR dashboards",
      "Custom report builder & data exports",
    ],
    detail: "REPORTS",
  },
] as const;

export const services = servicePages;
export const industries = industryPages;

export const supportPrinciples = [
  {
    title: "A name, not a ticket number",
    description:
      "You get a person who knows your setup. The one who configured your system is the one who answers a year later.",
  },
  {
    title: "We stay after go-live",
    description:
      "Launch is not the finish line. We keep improving, extending and steadying the system as the business changes.",
  },
  {
    title: "No surprises",
    description:
      "You see the full rollout plan—dates, owners, milestones—before anything is signed or switched on.",
  },
];

export const supportChat = [
  {
    from: "client",
    name: "You",
    time: "9:41 PM",
    text: "Payroll is stuck on an approval and we pay everyone tomorrow.",
  },
  {
    from: "flowrix",
    name: "Your Flowrix consultant",
    time: "9:44 PM",
    text: "On it. Two approvals were sitting with someone on leave—I've rerouted them to you. You're clear to run.",
  },
  {
    from: "client",
    name: "You",
    time: "9:46 PM",
    text: "Done. Fastest 'fixed' I've ever had.",
  },
];

export const reasons = [
  {
    title: "Business before code",
    description:
      "We learn the operation, its constraints, and the people doing the work before defining the system.",
  },
  {
    title: "Architecture that can grow",
    description:
      "The decisions made early—data, integrations, permissions, environments—are built for what comes next.",
  },
  {
    title: "Automation with a purpose",
    description:
      "We remove repeat work and fragile handoffs without making the process harder to understand.",
  },
  {
    title: "One connected operating layer",
    description:
      "We make disconnected tools exchange the right data, at the right time, with clear ownership.",
  },
  {
    title: "A partner beyond launch",
    description:
      "Systems evolve. We stay close to improve, extend, and steady the technology as the business changes.",
  },
] as const;

export const implementationWeeks = [
  {
    phase: "Week 1",
    title: "We sit with your team",
    detail: "And watch how the work actually flows, before anyone touches software.",
  },
  {
    phase: "Weeks 2–3",
    title: "Flowrix learns your language",
    detail: "Your terms, approvals and reports. The system bends to you, not the other way around.",
  },
  {
    phase: "Weeks 4–5",
    title: "Your data comes home",
    detail: "Migrated cleanly, then reconciled together, line by line, until you trust it.",
  },
  {
    phase: "Weeks 6–7",
    title: "Your team learns on real data",
    detail: "Not a demo company. By Friday, it already feels familiar.",
  },
  {
    phase: "Week 8",
    title: "Go-live day",
    detail: "The switch flips, and we are in the room—not on a hotline.",
  },
  {
    phase: "Beyond",
    title: "We stay",
    detail: "The people who set you up remain your contact. That is the whole point.",
  },
] as const;
