import { JourneyData } from "@/constants";
import { PROJECT, RouteChannel, SFC } from "@/types";
import { cn, RenderIcon } from "@/utils";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CloseIcon from "@mui/icons-material/Close";
import { AnimatePresence, motion } from "motion/react";
import { memo, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const ProjectDetailsPage: SFC = ({ ClassName }) => {
  const navigate = useNavigate();
  const { Id } = useParams<{ Id: string }>();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // validate an id if matches on the PROJECTS
  useEffect(() => {
    const validateProjectTitle = () => {
      try {
        const projectExists = Object.values(PROJECT).includes(Id as PROJECT);

        if (!projectExists) {
          navigate(RouteChannel.NOT_FOUND);
          return;
        }

        const project = JourneyData.find((data) => data.alias === Id);
        if (project?.status === "Underconstruction") {
          navigate(RouteChannel.UNDERCONSTRUCTION);
        }
      } catch (error: unknown) {
        console.log(error);
      }
    };

    validateProjectTitle();
  }, [Id, navigate]);

  const project = JourneyData.find((data) => data.alias === Id);

  if (!project) return null;

  const Icon = RenderIcon(project.projectType);

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div
      className={cn(
        "w-full bg-[#0a0a0a] text-white min-h-screen font-sans overflow-x-hidden",
        ClassName,
      )}
    >
      {/* HERO SECTION */}
      <div className="relative w-full h-[80vh] flex flex-col justify-end pb-20 px-8 md:px-20 lg:px-40">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${project.thumbnail})` }}
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-transparent" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-20 flex flex-col gap-4 max-w-5xl"
        >
          <motion.button
            onClick={() => navigate(-1)}
            className="w-fit flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors mb-4 uppercase tracking-widest"
          >
            <ArrowBackIcon fontSize="small" /> Back to Projects
          </motion.button>

          <motion.h1
            variants={fadeIn}
            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-none"
          >
            {project.title}
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl font-light"
          >
            {project.description}
          </motion.p>
        </motion.div>
      </div>

      {/* BLUEPRINT LEGEND (Metadata) */}
      <div className="w-full px-8 md:px-20 lg:px-40 py-16 border-t border-b border-white/10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-4 gap-12"
        >
          <motion.div variants={fadeIn} className="flex flex-col gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">
              Role
            </span>
            <span className="text-lg">{project.role || "Developer"}</span>
          </motion.div>
          <motion.div variants={fadeIn} className="flex flex-col gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">
              Timeframe
            </span>
            <span className="text-lg">{project.timeframe}</span>
          </motion.div>
          <motion.div variants={fadeIn} className="flex flex-col gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">
              Category
            </span>
            <span className="text-lg flex items-center gap-2">
              <Icon className="w-5 h-5 text-gray-400" />
              {project.projectType}
            </span>
          </motion.div>
          <motion.div variants={fadeIn} className="flex flex-col gap-2">
            <span className="text-xs text-gray-500 uppercase tracking-widest font-bold">
              Tech Stack
            </span>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech, idx) => (
                <span
                  key={"tech-" + idx}
                  className="text-sm px-3 py-1 bg-white/5 border border-white/10 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* NARRATIVE BLOCKS */}
      <div className="w-full px-8 md:px-20 lg:px-40 py-24 flex flex-col gap-32">
        {project.context && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
          >
            <div className="md:col-span-4">
              <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest text-gray-400">
                01 / Context
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl md:text-3xl leading-relaxed font-light text-gray-200">
                {project.context}
              </p>
            </div>
          </motion.div>
        )}

        {project.challenge && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
          >
            <div className="md:col-span-4">
              <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest text-gray-400">
                02 / Challenge
              </h2>
            </div>
            <div className="md:col-span-8">
              <p className="text-xl md:text-3xl leading-relaxed font-light text-gray-200">
                {project.challenge}
              </p>
            </div>
          </motion.div>
        )}

        {project.solution && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16"
          >
            <div className="md:col-span-4">
              <h2 className="text-2xl md:text-3xl font-light uppercase tracking-widest text-gray-400">
                03 / Solution
              </h2>
            </div>
            <div className="md:col-span-8 flex flex-col gap-8">
              <p className="text-xl md:text-3xl leading-relaxed font-light text-gray-200">
                {project.solution}
              </p>
              {project.outcome && (
                <div className="p-8 bg-white/5 border border-white/10 rounded-lg mt-8">
                  <h3 className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-4">
                    Outcome
                  </h3>
                  <p className="text-lg text-gray-300">{project.outcome}</p>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </div>

      {/* GALLERY (EXHIBITION) */}
      {project.images && project.images.length > 0 && (
        <div className="w-full px-8 md:px-20 lg:px-40 pb-32">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-2xl md:text-3xl font-light uppercase tracking-widest text-gray-400 mb-16"
          >
            04 / Exhibition
          </motion.h2>

          <div className="flex flex-col gap-16 md:gap-32 w-full">
            {/* BENTO GRID for top 5 images */}
            {project.images.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-8 w-full md:h-[80vh]">
                {project.images.slice(0, 5).map((img, idx) => {
                  const imgSrc =
                    typeof img === "string"
                      ? img
                      : (img as { image?: string }).image;
                  if (!imgSrc) return null;

                  let bentoClass =
                    "w-full h-full min-h-[300px] overflow-hidden rounded-xl border border-white/5 bg-white/5 relative cursor-pointer";

                  if (idx === 0) {
                    bentoClass += " md:col-span-2 md:row-span-2";
                  } else {
                    bentoClass += " md:col-span-1 md:row-span-1";
                  }

                  return (
                    <motion.div
                      key={"bento-" + idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.6,
                        delay: idx * 0.1,
                        ease: "easeOut",
                      }}
                      viewport={{ once: true, margin: "-100px" }}
                      className={bentoClass}
                      onClick={() => setSelectedImage(imgSrc)}
                    >
                      <img
                        src={imgSrc}
                        alt={`Project showcase ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000 absolute inset-0"
                      />
                    </motion.div>
                  );
                })}
              </div>
            )}

            {/* MASONRY / FULL WIDTH for remaining images */}
            {project.images.length > 5 && (
              <div className="columns-1 md:columns-2 gap-4 md:gap-8 space-y-4 md:space-y-8 mt-8">
                {project.images.slice(5).map((img, idx) => {
                  const imgSrc =
                    typeof img === "string"
                      ? img
                      : (img as { image?: string }).image;
                  if (!imgSrc) return null;
                  return (
                    <motion.div
                      key={"masonry-" + idx}
                      initial={{ opacity: 0, y: 50 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-100px" }}
                      className="w-full overflow-hidden rounded-xl border border-white/5 bg-white/5 break-inside-avoid cursor-pointer"
                      onClick={() => setSelectedImage(imgSrc)}
                    >
                      <img
                        src={imgSrc}
                        alt={`Project showcase remaining ${idx + 1}`}
                        className="w-full h-auto object-cover hover:scale-105 transition-transform duration-1000"
                      />
                    </motion.div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}

      {/* FOOTER NAV */}
      <div className="w-full flex justify-center pb-20 pt-10">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-sm text-gray-500 hover:text-white uppercase tracking-widest transition-colors flex flex-col items-center gap-2"
        >
          <div className="block w-[1px] h-12 bg-gray-500 mb-2 hover:h-16 transition-all duration-300"></div>
          Back to Top
        </button>
      </div>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-12 cursor-zoom-out"
            onClick={() => setSelectedImage(null)}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 text-white hover:text-gray-300 z-50 bg-black/50 rounded-full p-2"
            >
              <CloseIcon />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Expanded view"
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default memo(ProjectDetailsPage);
