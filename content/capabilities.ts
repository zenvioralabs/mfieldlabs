export type CapabilityIcon = "database" | "workflow" | "layout" | "sparkles";

export interface Capability {
  n: string;
  icon: CapabilityIcon;
  title: string;
  tagline: string;
  body: string;
  impactAreas: string[];
  outcomes: string[];
  businessOutcomes: string;
  image: string;
}

export const capabilitiesSection = {
  eyebrow: "OUR CAPABILITIES",
  heading: "Enterprise Transformation Capabilities",
  description:
    "Four integrated capability areas designed to work as one ecosystem — connecting data, people, and technology so intelligent decision-making becomes part of everyday business.",
};

export const capabilities: Capability[] = [
  {
    n: "01",
    icon: "database",
    title: "Data & Intelligence",
    tagline:
      "Turning scattered reporting and spreadsheets into a single, trusted view of the business.",
    body: "Reports that take days to prepare, different departments working from different numbers, heavy reliance on spreadsheets, leadership without real-time visibility.",
    impactAreas: [
      "Executive dashboards",
      "Operational reporting modernization",
      "KPI tracking environments",
      "Data integration across existing systems",
      "Data quality and governance",
      "Business performance visibility",
    ],
    outcomes: [
      "Reports that take days to prepare",
      "Different departments working from different numbers",
      "Heavy reliance on spreadsheets",
      "Leadership without real-time visibility",
    ],
    businessOutcomes:
      "Reports that take days to prepare, different departments working from different numbers, heavy reliance on spreadsheets, leadership without real-time visibility.",
    image: "/logo/business-analytics-presentation-with-graph-analysi-2026-01-08-23-52-45-utc.JPG",
  },
  {
    n: "02",
    icon: "workflow",
    title: "Automation & Operations",
    tagline: "Reducing repetitive manual work while improving speed, consistency, and scalability.",
    body: "Someone spending all day moving data between systems, heavy reliance on email approvals, a process that breaks when one person is out, the same information entered more than once.",
    impactAreas: [
      "Employee & Customer onboarding automation",
      "Invoice and claims processing automation",
      "Approval workflow systems",
      "Cross-system integrations",
      "Notification and alert systems",
    ],
    outcomes: [
      "Someone spending all day moving data between systems",
      "Heavy reliance on email approvals",
      "A process that breaks when one person is out",
      "The same information entered more than once"
    ],
    businessOutcomes:
      "Someone spending all day moving data between systems, heavy reliance on email approvals, a process that breaks when one person is out, the same information entered more than once.",
    image: "/logo/business-engineer-hand-works-industry-diagram-on-v-2026-04-14-00-23-25-utc.jpg",
  },
  {
    n: "03",
    icon: "layout",
    title: "Digital Experiences & Software Engineering",
    tagline:
      "Designing, building, modernizing the software, portals, and applications a team and its customers rely on every day.",
    body: "Systems that don't talk to each other, workarounds instead of real fixes, software the business has outgrown, customers calling in for things that could be self-service.",
    impactAreas: [
      "Custom business applications",
      "Customer, vendor, and partner portals",
      "Case and request management platforms",
      "API, CRM, and ERP integrations",
      "Legacy system modernization",
    ],
    outcomes: [
      "Systems that don't talk to each other",
      "Workarounds instead of real fixes",
      "Software the business has outgrown",
      "Customers calling in for things that could be self-service"
    ],
    businessOutcomes:
      "Systems that don't talk to each other, workarounds instead of real fixes, software the business has outgrown, customers calling in for things that could be self-service.",
    image: "/logo/professional-tech-team-collaborating-on-software-d-2026-07-08-22-09-10-utc.JPG",
  },
  {
    n: "04",
    icon: "sparkles",
    title: "AI & Microsoft Innovation",
    tagline:
      "Helping businesses responsibly adopt AI and Microsoft technologies, starting with the business problem rather than the technology.",
    body: "Leadership asking about AI, evaluating Copilot, spending too much time producing reports, concerns about AI governance and security.",
    impactAreas: [
      "AI opportunity discovery and readiness assessments",
      "Microsoft Copilot rollout and adoption programs",
      "Microsoft 365 optimization and governance",
      "Internal AI assistants and knowledge tools",
      "Intelligent document processing",
    ],
    outcomes: [
      "Leadership asking about AI",
      "Evaluating Copilot",
      "Spending too much time producing reports",
      "Concerns about AI governance and security"  ],
    businessOutcomes:
      "Leadership asking about AI, evaluating Copilot, spending too much time producing reports, concerns about AI governance and security.",
    image: "/logo/typing-on-laptop-with-artificial-intelligence-conc-2026-03-18-11-53-22-utc.jpg",
  },
];
