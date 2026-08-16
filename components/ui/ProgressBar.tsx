import * as React from "react";
import { cn } from "@/lib/utils";

export interface ProgressBarProps {
  fillRef?: React.Ref<HTMLDivElement>;
  className?: string;
}

export default function ProgressBar({ fillRef, className }: ProgressBarProps) {
  return (
    <div className={cn("h-1 w-full overflow-hidden rounded-full bg-ink/10", className)}>
      <div ref={fillRef} className="h-full w-full origin-left scale-x-0 rounded-full bg-deepblue" />
    </div>
  );
}
