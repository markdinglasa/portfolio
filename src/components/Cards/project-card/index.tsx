import { memo } from "react";
import { ProjectType, SFC } from "../../../types";
import { RenderIcon, truncate } from "../../../utils";
import toRomanNumerals from "roman-numerals-converter-lib";

interface ProjectCardProps {
  Id: number;
  Image: string;
  Title: string;
  Description?: string;
  OnClick: () => void;
  Dificulty?: number;
  ProjectType: ProjectType;
  TimeFrame: string;
}

const ProjectCard: SFC<ProjectCardProps> = memo(
  ({
    Id,
    Image,
    Title = "Title",
    Description,
    OnClick = () => {},
    ProjectType = "Responsive Web Application",
    TimeFrame,
  }) => {
    const Icon = RenderIcon(ProjectType);
    return (
      <button
        onClick={OnClick}
        className="group relative overflow-hidden w-full rounded-2xl h-[28rem] overflow-hidden cursor-pointer border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm transition-all duration-300 ease-out hover:border-[#e9c6a9]/30 hover:shadow-[0_8px_30px_rgba(233,198,169,0.08)] hover:scale-[1.02]"
      >
        {/* Image */}
        <div className="h-[55%] w-full overflow-hidden">
          <img
            src={Image}
            className="w-full h-full overflow-hidden object-cover transition-transform duration-500 group-hover:scale-105"
            alt={Title}
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 h-[55%] bg-gradient-to-t from-[#161616] via-transparent to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="h-[45%] text-left w-full p-5 flex flex-col justify-between relative">
          {/* Chapter label */}
          <div className="flex flex-col gap-2">
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#e9c6a9]/50 group-hover:text-[#e9c6a9]/80 transition-colors duration-300">
              Chapter {toRomanNumerals(Id, "Vinculum")}
            </span>

            {/* Project type */}
            <span className="text-xs text-[#9C9C9C]/50 gap-2 flex items-center overflow-visible group-hover:text-[#9C9C9C]/70 transition-colors duration-300">
              <Icon />
              {ProjectType}
            </span>

            {/* Title */}
            <span className="text-lg font-semibold text-white/90 group-hover:text-white transition-colors duration-300 overflow-visible">
              {Title}
            </span>

            {/* Description */}
            {Description && (
              <span className="text-sm text-[#9C9C9C]/60 leading-relaxed group-hover:text-[#9C9C9C]/80 transition-colors duration-300">
                {truncate(Description, 55)}
              </span>
            )}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-3 border-t border-white/[0.06]">
            <span className="text-[11px] font-mono text-[#9C9C9C]/40 tracking-wide">
              {TimeFrame}
            </span>
            <span className="text-xs text-[#e9c6a9]/60 group-hover:text-[#e9c6a9] transition-colors duration-300 flex items-center gap-1">
              View Details
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M2 6h8M7 3l3 3-3 3" />
              </svg>
            </span>
          </div>
        </div>
      </button>
    );
  }
);
export default ProjectCard;
