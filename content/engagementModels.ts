export interface EngagementModel {
  title: string;
  body: string;
}

export const engagementModelsSection = {
  eyebrow: "Engagement Models",
  title: "How We Work Together",
  description:
    "Every engagement can be structured to fit how a business wants to work: Fixed Fee, Time & Materials, Managed Services, Dedicated Teams, or Outcome-Based.",
};

export const engagementModels: EngagementModel[] = [
  {
    title: "Velocity Sprint",
    body: "Rapid, outcome-focused engagements that deliver measurable value within weeks. Ideal for leaders who need executive visibility, automation quick wins, or an AI proof-of-concept. Typical outcomes: validated ROI and a clear roadmap to scale.",
  },
  {
    title: "Transformation Partnership",
    body: "Multi-phase engagements focused on modernizing operations across the business. Built for businesses ready to rethink how data, operations, and technology work together. Typical outcomes: modernized operations and capability that lasts beyond the engagement.",
  },
  {
    title: "Innovation Studio",
    body: "An ongoing partnership to explore, prototype, and scale new ideas into working solutions. Suited to organizations that want a steady, ongoing space for testing new ideas. Typical outcomes: a pipeline of validated, ready-to-use solutions.",
  },
  {
    title: "Managed Intelligence",
    body: "A subscription model providing ongoing support, optimization, and governance for systems already in place. Designed for organizations that want their platforms to keep improving after launch. Typical outcomes: sustained performance, governed AI, and predictable costs.",
  },
];

export const deliveryModels: string[] = [
  "Fixed Fee",
  "Time & Materials",
  "Managed Services",
  "Dedicated Teams",
  "Outcome-Based",
];
