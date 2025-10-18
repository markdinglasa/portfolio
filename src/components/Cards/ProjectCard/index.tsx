import { memo } from "react";
import { SFC } from "../../../types";
import { truncate } from "../../../utils";
import toRomanNumerals from "roman-numerals-converter-lib";

import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import ComputerIcon from "@mui/icons-material/Computer";
import DevicesIcon from "@mui/icons-material/Devices";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
//import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import { Skeleton } from "@mui/material";

export type ProjectType =
  | "Responsive Web Application"
  | "Mobile Application"
  | "Desktop Application"
  | "UI/UX";

interface ProjectCard {
  Id: number;
  Image: string;
  Title: string;
  Description?: string;
  OnClick: () => void;
  Dificulty?: number;
  ProjectType: ProjectType;
  TimeFrame: string;
}

export const RenderIcon = (type: ProjectType) => {
  switch (type) {
    case "Mobile Application":
      return <PhoneAndroidIcon />;
    case "Desktop Application":
      return <ComputerIcon />;
    case "UI/UX":
      return <DesignServicesIcon />;
    case "Responsive Web Application":
    default:
      return <DevicesIcon />;
  }
};

export const ProjectCard: SFC<ProjectCard> = ({
  Id,
  Image,
  Title = "Title",
  Description,
  OnClick = () => {},
  ProjectType = "Responsive Web Application",
  // TimeFrame,
}) => {
  return (
    <div className="w-full p-4 rounded-lg h-[30rem] overflow-hidden hover:-mt-2  hover:shadow-xl relative bg-[#212227] duration-300 ease-linear hover:text-[#e9c6a9] text-slate-100 ">
      <div className="mb-2">
        <span className="text-slate-100/70 ">
          Chapter {toRomanNumerals(Id, "Vinculum")}
        </span>
      </div>
      <div className="h-[60%] w-full overflow-hidden rounded-md">
        <img src={Image} className="w-full h-full relative overflow-hidden" />
      </div>
      <div className="h-[40%] w-full overflow-hidden pt-3">
        <div className="w-full title flex flex-col h-full">
          <span className="text-sm text-slate-100/70 gap-2 flex items-center mb-2 overflow-visible">
            {RenderIcon(ProjectType)}
            {ProjectType}
          </span>
          <span className="text-lg font-medium overflow-visible">{Title}</span>
          {/*<span className="text-[12px] font-medium items-center flex justify-start  overflow-visible pb-2 text-[#9C9C9C]">
            <CalendarMonthIcon className="p-[3px] -ml-1" />
            <span className="">{TimeFrame}</span>
          </span>*/}
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
          {/*<div className="flex items-center justify-center">
                        <StarIcon className="text-primary"/>
                        <span className="text-slate-100 cursor-pointer text-sm ml-1 flex items-center justify-center">{Dificulty}/10</span>
                    </div>*/}
        </div>
      </div>
    </div>
  );
};

export const ProjectCardSkeleton = () => {
  return (
    <>
      <div className="w-fullborder rounded-lg h-fit md:h-[25rem] overflow-hidden hover:border-[#E9C6A9] hover:shadow-lg border-gray-100/30 relative">
        <div className="h-[60%] w-full overflow-hidden">
          <Skeleton width={"100%"} height={"8rem"} />
        </div>
        <div className="h-[40%] w-full overflow-hidden p-3 bg-slate-100/5">
          <div className="w-full title flex flex-col h-28">
            <span className="text-sm text-slate-100/70 gap-2 flex items-center mb-2 overflow-visible">
              <Skeleton width={"30%"} height={"1rem"} />
            </span>
            <span className="text-lg font-medium text-slate-100 overflow-visible">
              <Skeleton width={"70%"} height={"1rem"} />
            </span>
            <div className="overflow-hidden">
              <Skeleton width={"100%"} height={"1rem"} />
              <Skeleton width={"100%"} height={"1rem"} />
              <Skeleton width={"100%"} height={"1rem"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(ProjectCard);
