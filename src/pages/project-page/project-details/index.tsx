import { lazy, memo, Suspense, useEffect } from "react";
import { PROJECT, RouteChannel, SFC } from "@/types";
import { cn, RenderIcon } from "@/utils";

import toRomanNumerals from "roman-numerals-converter-lib";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { useNavigate, useParams } from "react-router-dom";
import { JourneyData } from "@/constants";
import { BentoGrid } from "@/components/bento-grid-layout";
import { Spinner } from "@/components";

export const BentoCard = lazy(() => import("@/components/Cards/bento-card"));
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

        const projectDone = () => {
          const project = JourneyData.filter((data) => data.alias === Id)[0];
          if (project.status === "Underconstruction")
            navigate(RouteChannel.UNDERCONSTRUCTION);
        };
        projectDone();
      } catch (error: unknown) {
        console.log(error);
      }
    };

    validateProjectTitle();
  }, [Id, navigate]);

  const project = JourneyData.filter((data) => data.alias === Id)[0];
  const Icon = RenderIcon(project.projectType);
  return (
    <>
      <div
        className={cn(
          "w-full h-full flex flex-col items-center justify-start px-[1rem] relative",
          ClassName
        )}
      >
        <div className="w-full md:w-10/12 flex flex-col items-center justify-center h-fit mt-[7rem] overflow-visible">
          <h1 className="text-primary text-[45px]  font-black uppercase  text-center">
            {project.title.split("").join(" ")}
          </h1>
          <div className="flex flex-col items-center justify-center">
            <span className="text-xl text-center">{project.description}</span>
          </div>
        </div>
        <div className="w-full md:w-10/12 flex flex-col h-fit gap-4 mt-[1rem]  mb-[1rem] items-start  rounded-md p-4">
          <div className="w-full flex flex-col gap-2 items-center justify-center">
            <div className="mb-2 text-slate-100/70 text-2xl flex capitalize gap-2 text-center">
              <span className="">
                Chapter {toRomanNumerals(project.id, "Vinculum")} :{" "}
                {project.alias}
              </span>
            </div>
            <div className="flex flex-row gap-2 items-center text-sm ">
              <CalendarMonthIcon className="w-[10px] h-[10px] p-[2px]" />
              <span>{project.timeframe}</span>
            </div>
            <span className="text-sm  gap-2 flex items-center overflow-visible">
              <Icon />
              {project.projectType}
            </span>
            <span className="text-sm  gap-2 flex flex-wrap items-center overflow-visible justify-center">
              {project.techStack.map((tech, index) => {
                return <span key={index}>{tech}</span>;
              })}
            </span>
          </div>
          <div className="w-full flex flex-col gap-[10rem] mt-[10rem] mb-[10rem]">
            {project.stages.map((stage, index) => (
              <div
                key={index}
                className="flex md:flex-row flex-col justify-center items-center gap-[10rem]"
              >
                {stage.image && index % 2 == 0 ? (
                  <div className="w-[20rem] h-[25rem] rounded-xl filter-">
                    <img
                      src={stage.image}
                      className="w-full h-full grayscale"
                    />
                  </div>
                ) : null}
                <div className="w-full md:w-[35rem]">
                  <span className="text-3xl font-medium capitalize text-slate-100/70">
                    {stage.title}
                  </span>
                  <div className="w-full text-md flex flex-wrap gap-2">
                    {stage.details.map((detail, index) => (
                      <p key={index} className="text-prealign">
                        {detail}
                      </p>
                    ))}
                  </div>
                </div>
                {stage.image && index % 2 == 1 ? (
                  <div className="w-[20rem] h-[25rem] rounded-xl filter-">
                    <img
                      src={stage.image}
                      className="w-full h-full grayscale"
                    />
                  </div>
                ) : null}
              </div>
            ))}
            <div className="flex flex-col items-center  justify-center w-full">
              <span className="text-3xl font-medium capitalize text-slate-100/70 h-[3rem]"></span>
              <div className="flex w-full">
                <BentoGrid className="max-w-5xl mx-auto md:auto-rows-[20rem] ">
                  {Array.isArray(project?.demo) ? (
                    project.demo.map((item, index) => (
                      <Suspense fallback={<Spinner />}>
                        <BentoCard
                          key={index}
                          title={item.title}
                          description={item.description}
                          header={
                            <img src={item.image} className="grayscale" />
                          }
                          className={item.className}
                        />
                      </Suspense>
                    ))
                  ) : (
                    <span>test</span>
                  )}
                </BentoGrid>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(ProjectDetailsPage);
