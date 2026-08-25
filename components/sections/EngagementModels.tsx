import { Badge } from "@/components/ui/badge";
import { engagementModels, deliveryModels, engagementModelsSection } from "@/content/engagementModels";
import WordReveal from "@/components/motion/WordReveal";

export default function EngagementModels() {
  return (
    <section id="engagement-models" className="scroll-mt-28 bg-white pb-28 pt-12 px-6 md:px-16">
      <div className="container">
        <div className="max-w-2xl mb-10">
          <p className="eyebrow mb-5">{engagementModelsSection.eyebrow}</p>
          <h2 className="font-display font-bold text-4xl leading-[1.1] text-ink mb-4">
            <WordReveal text={engagementModelsSection.title} />
          </h2>
          <p className="text-lg text-ink/60 leading-relaxed">{engagementModelsSection.description}</p>
        </div>

        <div className="relative -top-8">
          <div className="mb-10 h-px w-full bg-sky" />
        </div>

        <div className="relative -top-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {engagementModels.map((m) => (
            <div
              key={m.title}
              className="flex h-[264px] flex-col rounded-2xl border border-ink/8 border-l-4 border-r-4 border-l-lightgray border-r-lightgray bg-white p-7 shadow-[0_1px_2px_rgba(17,24,39,0.04)]"
            >
              <h3 className="font-display font-semibold text-lg text-deepblue mb-3">{m.title}</h3>
              <p className="overflow-y-auto text-sm text-ink/60 leading-relaxed">{m.body}</p>
            </div>
          ))}
        </div>

        <div className="mt-4">
          <p className="text-sm font-semibold text-ink/50 mb-4">Delivery &amp; Commercial Models</p>
          <div className="flex flex-wrap gap-3">
            {deliveryModels.map((d) => (
              <Badge key={d}>{d}</Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
