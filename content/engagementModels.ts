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

export const companyExperience = {
  title: "The company is new. The experience behind it isn't.",
  body: "MField Labs is a new company, founded in 2026. The people behind it aren't new to this work. [X] years of combined experience in consulting and technology, including [Big Four firm / other named firms, only if you're comfortable naming them], across [industries served]. [Add anything else true and substantiated: certifications, scale of programs, geographies served.]",
};

export const reasonsToChoose = [
  "We build things your team can run without us. You won't be stuck depending on us forever.",
  "We give you one clear picture of your business, instead of scattered reports that don't agree with each other.",
  "We connect your data, your people, and your day-to-day work so things flow instead of getting stuck.",
  "We use AI to save your team time, not to replace your team's judgment.",
  "We build things that can grow and change with your business, not a fix that breaks the moment something changes.",
];

export const engagementModels: EngagementModel[] = [
  {
    title: "Velocity Sprint",
    body: "Rapid, outcome-focused engagements that deliver measurable value within weeks. Ideal for leaders who need executive visibility, automation quick wins, or an AI proof-of-concept.",
  },
  {
    title: "Transformation Partnership",
    body: "Strategic, multi-phase initiatives focused on organization-wide modernization. Built for enterprises ready to rethink how data, operations, and technology work together.",
  },
  {
    title: "Innovation Studio",
    body: "An ongoing partnership to explore, prototype, validate, and scale new ideas into business solutions. Suited to organizations that treat innovation as a continuous discipline.",
  },
  {
    title: "Managed Intelligence",
    body: "A subscription model providing continuous support, optimization, and governance for your digital ecosystem. Designed for organizations that want their platforms to keep improving after launch.",
  },
];

export const deliveryModels = [
  "Fixed-Scope Projects",
  "Time & Materials",
  "Retained Partnership",
];
