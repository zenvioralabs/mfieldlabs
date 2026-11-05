const caseStudies = [
  {
    industry: "Professional services",
    title: "Getting leadership one set of numbers they could trust",
    situation:
      "A growing professional services firm was closing out its month on spreadsheets pulled from three different systems, with each department reporting slightly different numbers.",
    engagement:
      "Build a single dashboard pulling directly from the firm's existing systems, so leadership sees the same numbers, updated automatically.",
    outcome:
      "A monthly close-out process that used to take most of a week, down to a few hours, with everyone working from the same numbers.",
  },
  {
    industry: "Distribution & logistics",
    title: "Freeing up a full day a week of manual work",
    situation:
      "A regional distribution company had one employee spending most of each day manually re-entering order and invoice data between systems, with errors slipping through during busy periods.",
    engagement:
      "Connect the systems directly and automate the handoff, with exceptions flagged for a person to review instead of every order requiring manual entry.",
    outcome:
      "A meaningful chunk of a staff member's week freed up, and fewer errors reaching the accounting team.",
  },
  {
    industry: "Legal & financial services",
    title: "Adopting AI without the hype",
    situation:
      "A mid-size firm's leadership was under pressure to do something with AI, but wary of tools that overpromised or didn't fit how the team actually worked.",
    engagement:
      "A short assessment of where AI would actually save time, a governed rollout of Microsoft Copilot, and no recommendation in the areas where AI wasn't the right fit yet.",
    outcome:
      "A small, well-governed set of AI tools the team actually uses, instead of a broad rollout nobody adopts.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="scroll-mt-28 bg-white px-6 py-20 md:px-16 md:py-24">
      <div className="container">
        <div className="border-b border-[#dfe4e0] pb-1">
          <p className="eyebrow mb-2">Case studies</p>
        </div>

        <p className="border-b border-[#dfe4e0] py-2 text-sm italic leading-relaxed text-gray-600">
          <strong className="not-italic text-ink">A note on these examples:</strong> illustrative examples of the kind of
          work MField Labs does, not descriptions of actual past clients.
        </p>

        <div className="grid gap-5 pt-5 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <article
              key={caseStudy.title}
              className="flex flex-col rounded-[8px] border border-[#dfe4e0] bg-white p-5 shadow-[0_4px_14px_rgba(22,36,31,0.08)] transition-transform duration-200 hover:-translate-y-1 hover:border-[#b9ccc5] hover:shadow-[0_12px_30px_rgba(22,36,31,0.12)] md:p-6"
            >
              <span className="mb-2 self-start bg-[#e4ede9] px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-[#2f5d52]">
                {caseStudy.industry}
              </span>
              <h3 className="mb-5 font-display text-2xl font-bold leading-tight text-ink">
                {caseStudy.title}
              </h3>

              <dl className="grid flex-1 grid-rows-3 gap-3 text-sm leading-relaxed">
                <div className="h-full rounded-[5px] border border-[#e3e6e4] p-3">
                  <dt className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-gray-500">Situation</dt>
                  <dd className="text-gray-600">{caseStudy.situation}</dd>
                </div>
                <div className="h-full rounded-[5px] border border-[#e3e6e4] p-3">
                  <dt className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#2f5d52]">Engagement</dt>
                  <dd className="text-gray-600">{caseStudy.engagement}</dd>
                </div>
                <div className="h-full rounded-[5px] border border-[#a9c6e8] bg-[#f7fbff] p-3">
                  <dt className="mb-1 text-[0.65rem] font-semibold uppercase tracking-[0.1em] text-[#3d6ea3]">Typical outcome</dt>
                  <dd className="font-semibold text-ink">{caseStudy.outcome}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>


      </div>
    </section>
  );
}
