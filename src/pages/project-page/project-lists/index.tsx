import { PageHeaderPanel } from "@/components/panels/page-header-panel";
import { ProjectCardSkeleton } from "@/components/skeletons";
import { ProjectPageData as data, JourneyData } from "@/constants";
import { SFC } from "@/types";
import { cn } from "@/utils";
import * as motion from "motion/react-client";
import { Fragment, lazy, memo, Suspense } from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = lazy(() => import("@/components/Cards/project-card"));

const ProjectPage: SFC = memo(({ ClassName }) => {
  const navigate = useNavigate();

  return (
    <>
      <PageHeaderPanel
        title={data.title}
        subtitle={data.subtitle}
        qoute={data.qoute}
        backdrop="Journey"
      />

      <section
        id="project-list"
        className={cn(
          "relative flex justify-center overflow-visible items-center md:py-16 py-8 md:px-0 px-4 overflow-hidden",
          ClassName,
        )}
      >
        {/* Background Decorative Text */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none opacity-[0.03] select-none z-0">
          <span className="text-[12rem] md:text-[20rem] font-black uppercase tracking-tighter text-white">
            Portfolio
          </span>
        </div>

        <div className="w-full md:w-10/12 flex flex-col overflow-visible items-center relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-12"
          >
            <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm mb-4">
              The Software I've Built Along the Way
            </span>
            <p className="text-lg md:text-xl text-[#9C9C9C] max-w-2xl leading-relaxed">
              Each project is a chapter — a story of challenges conquered,
              lessons learned, and solutions delivered.
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 overflow-visible lg:grid-cols-3 gap-6 py-4">
            {JourneyData.sort((a, b) => b.id - a.id).map((project, index) => (
              <Fragment key={"project-" + index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="overflow-hidden"
                >
                  <Suspense fallback={<ProjectCardSkeleton />}>
                    <ProjectCard
                      Id={project.id}
                      Image={project.thumbnail}
                      Title={project.title}
                      OnClick={() => navigate(project.link)}
                      ProjectType={project.projectType}
                      Description={project.description}
                      TimeFrame={project.timeframe}
                    />
                  </Suspense>
                </motion.div>
              </Fragment>
            ))}
          </div>
        </div>
      </section>
    </>
  );
});
export default ProjectPage;
