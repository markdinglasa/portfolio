import { Fragment, lazy, memo, Suspense, useState } from "react";
import { SFC } from "@/types";
import { cn, RenderIcon } from "@/utils";
import { JourneyData, Project, ProjectPageData as data } from "@/constants";
import { ProjectCardSkeleton } from "@/components/skeletons";
import { PageHeaderPanel } from "@/components/panels/page-header-panel";
import { Modal, ImageCarousel } from "@/components";
import toRomanNumerals from "roman-numerals-converter-lib";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const ProjectCard = lazy(() => import("@/components/Cards/project-card"));

const ProjectPage: SFC = memo(({ ClassName }) => {
  const [project,setProject] = useState<Project|null>(null);
  const Icon = RenderIcon(project?.projectType||'Responsive Web Application');
  
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
                <Fragment key={"fragement-"+index}>
                  <Suspense fallback={<ProjectCardSkeleton />}>
                    <ProjectCard
                      Id={data.id}
                      Image={data.thumbnail}
                      Title={data.title}
                      OnClick={()=> {
                        setProject(data);
                      }}
                      ProjectType={data.projectType}
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
      {
        !!project && <Modal  close={()=>setProject(null)} header={project.title} ClassName="bg-[#161616]">
        <div className="md:w-[60rem] text-slate-100/70  max-w-[80vw] overflow-y-auto flex flex-col h-fit bg-primary flex items-center justify-center">

        <div className="w-full md:w-10/12 flex flex-col h-fit gap-4 mt-[1rem]  mb-[1rem] items-start  rounded-md p-4">
          <div className="w-full flex flex-col gap-2 items-center justify-center">
            <div className="mb-2 text-2xl flex capitalize gap-2 text-center">
              <span className="text-primary">
                Chapter {toRomanNumerals(project.id, "Vinculum")} :{" "}
                {project.alias}
              </span>
            </div>
              <span className="text-sm  gap-2 flex items-center overflow-visible">
              <Icon />
              {project.projectType}
            </span>
            <div className="flex flex-row gap-2 items-center text-sm ">
              <CalendarMonthIcon className="w-[10px] h-[10px] p-[2px]" />
              <span>{project.timeframe}</span>
            </div>
          <div className="flex-col mt-10 text-center w-full">
              <div className=" w-full flex flex-col">
              <p>{project.description}</p>
            </div>
            <div className="text-sm  mt-10 gap-2 flex flex-wrap items-center overflow-visible justify-center">
                {project.techStack.map((tech, index) => {
                  return <span className="border px-4 py-2 rounded-md text-slate-100/70" key={"tech-"+index}>{tech}</span>;
                })}
            </div>
          </div>
        </div>
        <ImageCarousel images={project.images||[]} />
        </div>
      </div>
    </Modal>
      }
    </>
  );
});
export default ProjectPage;
