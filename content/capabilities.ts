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
  eyebrow: "Our Capabilities",
  title: "Enterprise Transformation Capabilities",
  description:
    "Four integrated capability areas designed to work as one ecosystem — connecting data, people, and technology so intelligent decision-making becomes part of everyday business.",
};

export const capabilities: Capability[] = [
  {
    n: "01",
    icon: "database",
    title: "Data & Intelligence",
    tagline:
      "Building Trusted Information Foundations and Turning Data into Strategic Decisions.",
    body: "Modern organizations generate enormous amounts of data, yet many struggle to transform it into actionable intelligence. We help organizations create trusted data foundations and establish enterprise-wide visibility, turning fragmented information into a strategic business advantage.",
    impactAreas: [
      "Enterprise Data Strategy",
      "Master Data Management",
      "Executive Dashboards",
      "Predictive Insights",
      "Scenario Planning",
      "Operational Visibility Platforms",
    ],
    outcomes: [
      "Trusted enterprise-wide information",
      "Real-time visibility",
      "Faster decision-making",
      "Greater agility",
    ],
    businessOutcomes:
      "Trusted enterprise-wide information, real-time visibility, faster decision-making, and greater agility.",
    image: "/logo/business-analytics-presentation-with-graph-analysi-2026-01-08-23-52-45-utc.JPG",
  },
  {
    n: "02",
    icon: "workflow",
    title: "Automation & Operations",
    tagline: "Designing Intelligent Operations That Scale Efficiently.",
    body: "Organizations cannot scale effectively when critical processes rely on manual effort and disconnected workflows. We help businesses streamline operations, automate repetitive tasks, and orchestrate workflows to improve efficiency and control.",
    impactAreas: [
      "Workflow Automation",
      "Process Orchestration",
      "Event-Driven Automation",
      "Robotic & Intelligent Automation",
      "Continuous Improvement",
    ],
    outcomes: [
      "Reduced manual effort",
      "Increased workforce productivity",
      "Lower operational costs",
      "Faster process execution",
    ],
    businessOutcomes:
      "Reduced manual effort, increased workforce productivity, lower operational costs, and faster process execution.",
    image: "/logo/business-engineer-hand-works-industry-diagram-on-v-2026-04-14-00-23-25-utc.jpg",
  },
  {
    n: "03",
    icon: "layout",
    title: "Digital Experiences",
    tagline: "Creating Connected Experiences for Employees, Customers, and Stakeholders.",
    body: "Exceptional experiences drive engagement, productivity, and long-term business value. We design modern digital platforms that connect people and information, while leveraging AI to help organizations understand and improve customer and employee sentiment.",
    impactAreas: [
      "Customer & Employee Experience Portals",
      "Digital Workplaces",
      "Enterprise Listening Programs",
      "Sentiment Analytics",
      "AI-Powered Experience Recommendations",
    ],
    outcomes: [
      "Enhanced customer loyalty",
      "Improved employee engagement",
      "Better team collaboration",
      "Actionable feedback insights",
    ],
    businessOutcomes:
      "Enhanced customer loyalty, improved employee engagement, better team collaboration, and actionable feedback insights.",
    image: "/logo/professional-tech-team-collaborating-on-software-d-2026-07-08-22-09-10-utc.JPG",
  },
  {
    n: "04",
    icon: "sparkles",
    title: "AI & Microsoft Innovation",
    tagline: "Accelerating Transformation Through Microsoft Technologies and Responsible AI.",
    body: "Organizations are under increasing pressure to modernize and leverage AI to remain competitive. We help businesses maximize the value of the Microsoft ecosystem while introducing practical, secure, and scalable AI capabilities that create measurable impact.",
    impactAreas: [
      "Generative AI & Copilot Solutions",
      "Agentic AI",
      "Knowledge Management",
      "Microsoft Fabric",
      "Power Platform Applications",
    ],
    outcomes: [
      "Accelerated digital transformation",
      "Maximized ROI on Microsoft investments",
      "Secure AI adoption",
      "Future-ready business capabilities",
    ],
    businessOutcomes:
      "Accelerated digital transformation, maximized ROI on Microsoft investments, secure AI adoption, and future-ready business capabilities.",
    image: "/logo/typing-on-laptop-with-artificial-intelligence-conc-2026-03-18-11-53-22-utc.jpg",
  },
];
