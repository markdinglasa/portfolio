import { SFC } from "@/types";
import { cn } from "@/utils";
import { memo } from "react";

interface BentoCardProps {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}

const BentoGridItem: SFC<BentoCardProps> = memo(
  ({ className, title, description, header, icon }) => {
    return (
      <div
        className={cn(
          "group/bento bg-[#161616] shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-slate-100/10  p-4 transition duration-200 hover:shadow-xl",
          className
        )}
      >
        {header}
        <div className=" transition duration-200 group-hover/bento:translate-x-2 overflow-visible b">
          {icon}
          <div className="mt-2 mb-2 font-sans font-bold text-slate-100/70 ">
            {title}
          </div>
          <div className="font-sans text-xs font-normal text- ">
            {description}
          </div>
        </div>
      </div>
    );
  }
);
export default BentoGridItem;
