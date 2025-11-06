import { Fragment, lazy, memo, Suspense } from "react";
import { SFC } from "../../types";
import { cn } from "../../utils";

import { useNavigate } from "react-router-dom";
import { JourneyData } from "@/constants";
import {
  ProjectCardSkeleton,
  ProjectType,
} from "@/components/Cards/ProjectCard";

const ProjectCard = lazy(() => import("@/components/Cards/ProjectCard"));

export const ProjectPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={cn(
          "w-full flex flex-col items-center justify-center px-[1rem]",
          ClassName
        )}
      >
        <div className="w-full md:w-10/12 relative h-fit flex justify-center mt-[50px]  items-center pt-10">
          <div className="flex flex-col items-center justify-cneter h-fit py-[7rem] flex-wrap">
            <div>
              <h1 className="text-primary text-[45px]  font-black uppercase h-18 text-center flex gap-[1.5rem]">
                <span> P r o j e c t s</span>
              </h1>
            </div>
            <div className="flex justify-center items-center flex-col p-2 w-full md:w-4/6 text-center">
              <span className="text-[20px] break-words">
                Each project tells a story
              </span>
            </div>
            <p className="w-full  md:w-9/12 text-center text-[1.25rem] md:text-[2.5rem] break-words mt-[2rem]">
              " I love creating meaningful, user-focused products with modern
              technologies — blending creativity and function in every build. "
            </p>
          </div>
        </div>
        {/*<span> The Software I’ve Built Along the Way</span>*/}
        <div className="w-full md:w-10/12 flex flex-wrap mt-[50px] h-full mb-[1rem] py-4">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 justify-start items-start gap-[1rem] overflow-visible  ">
            {JourneyData.sort((a, b) => b.id - a.id).map(
              (
                data,
                index // sort by Id descending
              ) => (
                <Fragment key={index}>
                  <Suspense fallback={<ProjectCardSkeleton />}>
                    <ProjectCard
                      Id={data.id}
                      Image={data.thumbnail}
                      Title={data.title}
                      OnClick={() => navigate(data.link)}
                      ProjectType={data.projectType as ProjectType}
                      Description={data.description}
                      TimeFrame={data.timeframe}
                    />
                  </Suspense>
                </Fragment>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(ProjectPage);
