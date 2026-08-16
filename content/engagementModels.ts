export interface EngagementModel {
  title: string;
  body: string;
}

export const engagementModelsSection = {
  eyebrow: "Engagement Models",
  title: "Built Around Your Outcomes.",
  description:
    "Choose the model that fits your ambition. Every engagement is commercially flexible — Fixed Fee, Time & Materials, Managed Services, Dedicated Teams, or Outcome-Based.",
};

export const engagementModels: EngagementModel[] = [
  {
    title: "Velocity Sprint",
    body: "Rapid, outcome-focused engagements that deliver measurable value within weeks. Ideal for leaders who need executive visibility, automation quick wins, or an AI proof-of-concept. Typical outcomes: validated ROI and a clear roadmap to scale.",
  },
  {
    title: "Transformation Partnership",
    body: "Strategic, multi-phase initiatives focused on organization-wide modernization. Built for enterprises ready to rethink how data, operations, and technology work together. Typical outcomes: modernized operations and lasting enterprise capability.",
  },
  {
    title: "Innovation Studio",
    body: "An ongoing partnership to explore, prototype, validate, and scale new ideas into business solutions. Suited to organizations that treat innovation as a continuous discipline. Typical outcomes: a steady pipeline of validated, production-ready solutions.",
  },
  {
    title: "Managed Intelligence",
    body: "A subscription model providing continuous support, optimization, and governance for your digital ecosystem. Designed for organizations that want their platforms to keep improving after launch. Typical outcomes: sustained performance, governed AI, and predictable costs.",
  },
];

export const deliveryModels: string[] = [
  "Fixed Fee",
  "Time & Materials",
  "Managed Services",
  "Dedicated Teams",
  "Outcome-Based",
];
