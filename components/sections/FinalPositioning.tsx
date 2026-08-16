import { ArrowRight } from "lucide-react";
import QuoteBanner from "@/components/ui/QuoteBanner";
import { Button } from "@/components/ui/button";
import Magnetic from "@/components/motion/Magnetic";
import { positioning } from "@/content/positioning";

export default function FinalPositioning() {
  return (
    <QuoteBanner eyebrow={positioning.eyebrow}>
      <p className="text-lg md:text-xl font-body font-normal text-white/70 mb-6">
        {positioning.statement}
      </p>
      <p className="font-bold text-sky mb-8">{positioning.closingLine}</p>
      <Magnetic>
        <Button asChild variant="onDark" size="lg">
          <a href="#contact">
            Start a conversation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </Button>
      </Magnetic>
    </QuoteBanner>
  );
}
