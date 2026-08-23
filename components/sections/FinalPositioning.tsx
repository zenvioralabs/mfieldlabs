import { ArrowRight } from "lucide-react";
import QuoteBanner from "@/components/ui/QuoteBanner";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/motion/Magnetic";
import { positioning } from "@/content/positioning";

export default function FinalPositioning() {
  return (
    <QuoteBanner eyebrow={positioning.eyebrow} tone="light">
      <p className="mb-6 font-body text-lg font-normal text-ink/70 md:text-xl">
        {positioning.statement}
      </p>
      <p className="mb-8 font-bold text-deepblue">{positioning.closingLine}</p>
      <Magnetic>
        <Button asChild size="lg">
          <a href="#contact">
            Start a conversation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
      </Magnetic>
    </QuoteBanner>
  );
}
