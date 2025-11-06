import { Fragment, lazy, memo, Suspense } from "react";
import { ProjectType, SFC } from "@/types";
import { cn } from "@/utils";
import { useNavigate } from "react-router-dom";
import { JourneyData, ProjectPageData as data } from "@/constants";
import { ProjectCardSkeleton } from "@/components/skeletons";
import { PageHeaderPanel } from "@/components/panels/page-header-panel";

const ProjectCard = lazy(() => import("@/components/Cards/project-card"));

const ProjectPage: SFC = memo(({ ClassName }) => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className={cn(
          "w-full flex flex-col items-center justify-center px-[1rem]",
          ClassName
        )}
      >
        <PageHeaderPanel
          title={data.title}
          subtitle={data.subtitle}
          qoute={data.qoute}
        />
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
});
export default ProjectPage;
