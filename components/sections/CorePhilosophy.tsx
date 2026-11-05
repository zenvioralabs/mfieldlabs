import QuoteBanner from "@/components/ui/QuoteBanner";
import { philosophy } from "@/content/philosophy";

export default function CorePhilosophy() {
  return (
    <QuoteBanner eyebrow={philosophy.eyebrow}>
      <p className="mb-4 font-bold text-deepblue">{philosophy.heading}</p>
      <p className="text-lg md:text-xl font-body font-normal text-white/70">{philosophy.body}</p>
    </QuoteBanner>
  );
}
