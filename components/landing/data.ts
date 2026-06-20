export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Operations", href: "#operations" },
  { label: "Industries", href: "#industries" },
  { label: "Approach", href: "#approach" },
];

export const consultationHref =
  "mailto:hello@flowrix-solutions.com?subject=Book%20a%20Flowrix%20Solutions%20consultation";

export const services = [
  {
    code: "01",
    title: "ERPNext & Frappe Solutions",
    description:
      "ERP architecture, implementation, customization, and reporting shaped around the way your teams actually operate.",
    detail: "ERP / OPERATIONS",
    tone: "dark",
  },
  {
    code: "02",
    title: "Custom Software",
    description:
      "Internal platforms, customer portals, dashboards, and tools for workflows that off-the-shelf software cannot cover.",
    detail: "PRODUCT ENGINEERING",
    tone: "light",
  },
  {
    code: "03",
    title: "Business Automation",
    description:
      "Approvals, alerts, handoffs, and document flows designed to take repetitive work out of daily operations.",
    detail: "WORKFLOW DESIGN",
    tone: "teal",
  },
  {
    code: "04",
    title: "AI & RAG Solutions",
    description:
      "Practical assistants and knowledge systems grounded in company data, with traceable sources and deliberate guardrails.",
    detail: "APPLIED INTELLIGENCE",
    tone: "dark",
  },
  {
    code: "05",
    title: "System Integrations",
    description:
      "Reliable connections between ERP, POS, finance, logistics, CRM, websites, and custom APIs.",
    detail: "CONNECTED SYSTEMS",
    tone: "light",
  },
  {
    code: "06",
    title: "Cloud & DevOps",
    description:
      "Deployments, environments, monitoring, backups, and infrastructure built for dependable growth.",
    detail: "INFRASTRUCTURE",
    tone: "light",
  },
  {
    code: "07",
    title: "POS & Retail Systems",
    description:
      "Multi-branch retail, inventory visibility, pricing logic, cashier journeys, and back-office control.",
    detail: "RETAIL OPERATIONS",
    tone: "dark",
  },
  {
    code: "08",
    title: "Websites & Web Apps",
    description:
      "Fast, clear digital experiences—from high-performing company websites to full operational web applications.",
    detail: "DIGITAL EXPERIENCE",
    tone: "teal",
  },
] as const;

export const operationFlow = [
  { label: "Sales", short: "Orders captured", icon: "01" },
  { label: "Inventory", short: "Stock synchronized", icon: "02" },
  { label: "Finance", short: "Records reconciled", icon: "03" },
  { label: "Operations", short: "Work coordinated", icon: "04" },
  { label: "AI Insights", short: "Knowledge surfaced", icon: "05" },
  { label: "Dashboards", short: "Decisions clarified", icon: "06" },
] as const;

export const industries = [
  {
    title: "Retail & POS",
    description:
      "Connect products, branches, pricing, purchasing, cashier workflows, and reporting.",
    kind: "retail",
    index: "01",
  },
  {
    title: "Manufacturing",
    description:
      "Structure materials, production, quality checks, maintenance, and factory visibility.",
    kind: "factory",
    index: "02",
  },
  {
    title: "Distribution",
    description:
      "Control stock movement, warehouse logic, fulfillment, and multi-location inventory.",
    kind: "distribution",
    index: "03",
  },
  {
    title: "Service Companies",
    description:
      "Coordinate teams, tickets, schedules, contracts, billing, and management reporting.",
    kind: "service",
    index: "04",
  },
  {
    title: "Internal Operations",
    description:
      "Replace scattered approvals, documents, and recurring admin with traceable workflows.",
    kind: "operations",
    index: "05",
  },
] as const;

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

export const processSteps = [
  { title: "Discover", detail: "Understand the business" },
  { title: "Map", detail: "Trace work and data" },
  { title: "Design", detail: "Define the system" },
  { title: "Build", detail: "Create with discipline" },
  { title: "Integrate", detail: "Connect every layer" },
  { title: "Launch", detail: "Test, train, release" },
  { title: "Improve", detail: "Measure and evolve" },
] as const;
