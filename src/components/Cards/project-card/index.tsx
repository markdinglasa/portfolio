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
  }) => {
    const Icon = RenderIcon(ProjectType);
    return (
      <div className="w-full p-4 rounded-lg h-[30rem] overflow-hidden hover:-mt-2 hover:border-[#e9c6a9] hover:shadow-2xl relative bg-[#161616] border border-white/10 duration-300 ease-linear hover:text-[#e9c6a9] text-slate-100 ">
        <div className="mb-2">
          <span className="text-slate-100/70 ">
            Chapter {toRomanNumerals(Id, "Vinculum")}
          </span>
        </div>
        <div className="h-[60%] w-full overflow-hidden rounded-md">
          <img
            src={Image}
            className="w-full h-full relative overflow-hidden "
          />
        </div>
        <div className="h-[40%] w-full overflow-hidden pt-3">
          <div className="w-full title flex flex-col h-full">
            <span className="text-sm text-slate-100/70 gap-2 flex items-center mb-2 overflow-visible">
              <Icon />
              {ProjectType}
            </span>
            <span className="text-lg font-medium overflow-visible">
              {Title}
            </span>
            <div className="overflow-hidden h-[3rem] text-[#9C9C9C]">
              {Description && (
                <span className="text-sm  ">{truncate(Description, 90)}</span>
              )}
            </div>
          </div>
          <div className="w-full flex justify-between items-start absolute h-10 bottom-0 ">
            <span
              className="text-primary cursor-pointer text-sm "
              onClick={OnClick}
            >
              Read More
            </span>
          </div>
        </div>
      </div>
    );
  }
);
export default ProjectCard;
