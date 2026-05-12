import { Fragment, lazy, memo, Suspense, useState } from "react";
import { SFC } from "@/types";
import { cn, RenderIcon } from "@/utils";
import { JourneyData, Project, ProjectPageData as data } from "@/constants";
import { ProjectCardSkeleton } from "@/components/skeletons";
import { PageHeaderPanel } from "@/components/panels/page-header-panel";
import { Modal, ImageCarousel } from "@/components";
import toRomanNumerals from "roman-numerals-converter-lib";
import * as motion from "motion/react-client";

const ProjectCard = lazy(() => import("@/components/Cards/project-card"));

const ProjectPage: SFC = memo(({ ClassName }) => {
  const [project, setProject] = useState<Project | null>(null);
  const Icon = RenderIcon(
    project?.projectType || "Responsive Web Application"
  );

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
          ClassName
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
                      OnClick={() => setProject(project)}
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

      {/* Project Detail Modal */}
      {!!project && (
        <Modal
          close={() => setProject(null)}
          header={project.title}
          ClassName="bg-[#161616]"
        >
          <div className="md:w-[60rem] max-w-[90vw] max-h-[85vh] overflow-y-auto flex flex-col">
            <div className="p-6 md:p-8 flex flex-col gap-6">
              {/* Modal Header */}
              <div className="flex flex-col  overflow-visible items-center text-center gap-3 pb-6 border-b border-white/[0.08]">
                <span className="text-[11px] font-mono uppercase tracking-widest text-[#e9c6a9]/60">
                  Chapter {toRomanNumerals(project.id, "Vinculum")}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-white overflow-visible">
                  {project.title}
                </h2>
                <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-[#9C9C9C]/60">
                  <span className="flex items-center gap-2 overflow-visible">
                    <Icon />
                    {project.projectType}
                  </span>
                  <span className="hidden md:block w-1 h-1 rounded-full bg-[#9C9C9C]/30" />
                  <span className="font-mono text-xs tracking-wide">
                    {project.timeframe}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="rounded-2xl overflow-visible border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm p-5 md:p-6">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9C9C9C]/40 mb-3 block">
                  Overview
                </span>
                <p className="text-[15px] text-[#9C9C9C]/80 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="flex flex-col gap-3 overflow-visible ">
                <span className="text-xs font-mono uppercase tracking-widest text-[#9C9C9C]/40">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={"tech-" + index}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono border border-white/[0.08] bg-white/[0.02] text-[#9C9C9C]/70 hover:border-[#e9c6a9]/30 hover:text-[#e9c6a9]/80 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Image Carousel */}
              {project.images && project.images.length > 0 && (
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-mono uppercase tracking-widest text-[#9C9C9C]/40">
                    Gallery
                  </span>
                  <ImageCarousel images={project.images} />
                </div>
              )}
            </div>
          </div>
        </Modal>
      )}
    </>
  );
});
export default ProjectPage;
