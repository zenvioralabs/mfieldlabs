export interface WhyContent {
  eyebrow: string;
  heading: string;
  description: string;
  imageSrc: string;
  talent: {
    eyebrow: string;
    description: string;
    accountableTeam: string;
  };
  model: {
    eyebrow: string;
    description: string;
    traditional: string[];
    mfieldlabs: string[];
  };
  symptoms: {
    eyebrow: string;
    items: string[];
  };
  cta: {
    text: string;
    buttonText: string;
  };
}

export const why: WhyContent = {
  eyebrow: "Why MField Labs exists",
  heading: "Built for growing business infrastructure.",
  description:
    "Growing businesses face many of the same challenges as large enterprises. You need reliable data, automated workflows, and AI that delivers real utility. Traditional consulting layouts target massive enterprise timelines—not yours.",
  imageSrc: "https://unsplash.com/photos/modern-corporate-tech",
  talent: {
    eyebrow: "More than access to talent",
    description:
      "You can already hire an AI developer, a Power BI analyst, or an automation specialist online. Good talent isn't hard to find anymore. What's harder to find is judgment: knowing which problem to solve first, how the pieces fit together, and who's accountable when they don't.",
    accountableTeam:
      "MField Labs is one accountable team. We diagnose the problem, decide what to tackle first, bring together the right expertise, make sure the pieces fit together, and stand behind the result. You don't have to assemble and manage the team. We do that.",
  },
  model: {
    eyebrow: "A different model, by design",
    description:
      "We're not a smaller version of a big consulting firm, and we're not a cheaper alternative to one either.",
    traditional: [
      "Large teams",
      "High overhead",
      "Long, broad engagements",
      "Transformation programs touching everything",
    ],
    mfieldlabs: [
      "✓ Focused team, senior-led",
      "✓ Efficient global delivery",
      "✓ Start with a sprint, prove value fast",
      "✓ Solve the highest-value problem first",
    ],
  },
  symptoms: {
    eyebrow: "Sound Familiar?",
    items: [
      '"Our data is everywhere, and nobody fully trusts the numbers."',
      '"Our finance team spends days assembling reports by hand."',
      '"Our people spend hundreds of hours a month on work that should be automated."',
      '"Our systems don\'t talk to each other."',
      '"Everyone\'s talking about AI, but we don\'t know where it would actually make or save us money"',
      '"We\'ve grown fast, and our technology hasn\'t kept up"',
      '"We know we need to modernize, but a massive consulting engagement doesn\'t make sense for us."',
    ],
  },
  cta: {
    text: "Ready to explore how we can help your business accelerate?",
    buttonText: "Start the Conversation",
  },
};
