import { memo } from "react";
import { SFC } from "../../types";
import { cn } from "@/utils";

export interface WorkExperienceProps {
  CompanyLogo: string;
  CompanyName: string;
  ExclusiveDates: string;
  JobTitle: string;
  Skills: string[];
}

const WorkExperience: SFC<WorkExperienceProps> = memo(
  ({
    ClassName,
    CompanyLogo,
    CompanyName,
    ExclusiveDates,
    JobTitle,
    Skills,
  }) => {
    return (
      <div
        className={cn(
          "rounded-2xl border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 md:p-6 w-full",
          "hover:border-[#e9c6a9]/20 transition-all duration-300",
          ClassName
        )}
      >
        {/* Header: Logo + Role */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center flex-shrink-0 overflow-hidden">
            <img
              src={CompanyLogo}
              className="h-7 w-7 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              alt={CompanyName}
            />
          </div>
          <div className="flex flex-col gap-0.5 min-w-0">
            <span className="text-[15px] font-semibold text-white/90 leading-tight overflow-visible">
              {JobTitle}
            </span>
            <span className="text-xs text-[#9C9C9C]/60 font-mono tracking-wide">
              {CompanyName}
            </span>
            <span className="text-[11px] font-mono text-[#e9c6a9]/50 tracking-wider mt-1">
              {ExclusiveDates}
            </span>
          </div>
        </div>

        {/* Responsibilities — simple bullet list */}
        <div className="flex flex-col gap-2 pl-1">
          {Skills.map((record, index) => (
            <div
              key={index}
              className="flex gap-3 items-start group/item"
            >
              <span className="text-[#e9c6a9]/30 mt-[7px] flex-shrink-0 group-hover/item:text-[#e9c6a9]/70 transition-colors duration-200">
                <svg width="6" height="6" viewBox="0 0 6 6">
                  <circle cx="3" cy="3" r="3" fill="currentColor" />
                </svg>
              </span>
              <span className="text-[13px] text-[#9C9C9C]/60 leading-relaxed group-hover/item:text-[#9C9C9C] transition-colors duration-200">
                {record}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  }
);
export default WorkExperience;
