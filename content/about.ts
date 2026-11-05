export interface AboutContent {
  eyebrow: string;
  title: string;
  problem: string;
  solution: string[];
  aboutNote: string;
}

export const about: AboutContent = {
  eyebrow: "About MField Labs",
  title: "What We Actually Do",
  problem:
    "MField Labs helps growing businesses modernize reporting, automate operations, build modern software, and adopt AI responsibly, so they can run more efficiently and make confident decisions.",
  solution: [
    "We start with the business, not the technology. Before recommending anything, we take the time to understand the business challenges, the goals, the reporting needs, and what our clients, and their customers, expect.",
    "We are technology agnostic and do not sell specific tools or licenses. We use whatever is best in the market to set our clients up for success.",
    "We partner with clients throughout delivery, teaching along the way, so they're able to manage the technology on their own once the project ends.",
    "Human-centered design guides our work: technology should serve people, not the other way around.",
    "New tools and technologies require real change from the people using them, so we build change management into how we work. Technology is only useful when people actually want to use it.",
  ],
  aboutNote:
    "MField Labs is women-owned and led by an experienced professional with 20+ years in consulting and business operations, including time at a Big Four firm and other technology firms.",
};
