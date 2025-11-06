import { SFC } from "@/types";
import { cn } from "@/utils";
import { memo } from "react";

interface BentoGridProps {
  className?: string;
  children?: React.ReactNode;
}

export const BentoGrid: SFC<BentoGridProps> = memo(
  ({ className, children }) => {
    return (
      <div
        className={cn(
          "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
          className
        )}
      >
        {children}
      </div>
    );
  }
);
