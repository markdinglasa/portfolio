import { memo, useEffect } from "react";
import { PROJECT, RouteChannel, SFC } from "@/types";
import { cn } from "@/utils";
import toRomanNumerals from "roman-numerals-converter-lib";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { RenderIcon } from "@/components/Cards/ProjectCard";
import { useNavigate, useParams } from "react-router-dom";
import { JourneyData } from "@/constants";

/*interface Tech {
  name: string;
  logo: string;
}

interface ProjectDetails {
  timeframe: string;
  projectType: ProjectType;
  techStack: Tech[];
  abstract: string;
}
// const SampleData: ProjectDetails = {};
*/
export const ProjectDetailsPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const { Id } = useParams<{ Id: string }>();

  // validate an id if matches on the PROJECTS
  useEffect(() => {
    const validateProjectTitle = () => {
      try {
        // Check if the project with the given Id exists in PROJECT
        const projectExists = Object.values(PROJECT).some(
          (project) => project === Id
        );

        if (!projectExists) navigate(RouteChannel.NOT_FOUND);
      } catch (error: unknown) {
        console.log(error);
      }
    };

    validateProjectTitle();
  }, [Id, navigate]);

  const project = JourneyData.filter((data) => data.alias === Id)[0];
  return (
    <>
      <div
        className={cn(
          "w-full h-full flex flex-col items-center justify-center px-[1rem] relative",
          ClassName
        )}
      >
        <div className="w-full md:w-10/12 flex flex-col items-center justify-center h-fit mt-[7rem] overflow-visible">
          <h1 className="text-primary text-[45px]  font-black uppercase  text-center">
            {/*(Id ?? "").split("").join(" ")*/}
            {project.title.split("").join(" ")}
          </h1>
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl text-center">{project.description}</span>
          </div>
        </div>
        <div className="w-full md:w-10/12 flex flex-col h-fit gap-4 mt-[1rem]  mb-[1rem] items-start bg-[#212227] rounded-md p-4">
          <div className="w-full flex flex-col gap-2 items-center justify-center">
            <div className="mb-2 text-slate-100/70 text-2xl flex capitalize gap-2">
              <span className="">
                Chapter {toRomanNumerals(project.id, "Vinculum")} :{" "}
              </span>
              <span className=""> {project.alias}</span>
            </div>
            <div className="flex flex-row gap-2 items-center text-sm ">
              <CalendarMonthIcon className="w-[10px] h-[10px] p-[2px]" />
              <span>{project.timeframe}</span>
            </div>
            <span className="text-sm  gap-2 flex items-center overflow-visible">
              {RenderIcon(project.projectType)}
              {project.projectType}
            </span>
            <span className="text-sm  gap-2 flex items-center overflow-visible">
              PHP, Javascript, HTML, CSS, Bootstrap, MySQL, JQuery
            </span>
          </div>
          <div className="w-full flex flex-col gap-4">
            {project.stages.map((stage) => (
              <div>
                <span className="text-md font-medium capitalize text-slate-100/70">
                  {stage.title}
                </span>
                <div className="w-full text-sm flex flex-wrap gap-2">
                  {stage.details.map((detail) => (
                    <p className="text-prealign">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(ProjectDetailsPage);
