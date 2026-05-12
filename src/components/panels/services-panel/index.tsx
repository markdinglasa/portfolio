import { SFC } from "../../../types";
import { cn } from "../../../utils";
import { ServiceCardSkeleton } from "../../Cards/service-card/skeleton";
import { lazy, memo, Suspense } from "react";
import { ServiceData } from "@/constants";
import * as motion from "motion/react-client";

const ServiceCard = lazy(() => import("../../Cards/service-card"));

export const ServicePage: SFC = ({ ClassName }) => {
  return (
    <section
      id="services"
      className={cn(
        "relative flex justify-center items-center md:py-32 py-12 md:px-0 px-4 overflow-hidden",
        ClassName
      )}
    >
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none opacity-[0.03] select-none z-0">
        <span className="text-[12rem] md:text-[20rem] font-black uppercase tracking-tighter text-white">
          Services
        </span>
      </div>

      <div className="w-full md:w-10/12 flex flex-col items-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm mb-4">
            02 // My Expertise
          </span>
          <h1 className="font-bold uppercase text-[2.5rem] md:text-[4rem] leading-tight mb-6">
            Services
          </h1>
          <p className="text-lg md:text-xl text-[#9C9C9C] max-w-2xl leading-relaxed">
            Transforming complex challenges into seamless digital experiences. 
            I provide goal-oriented solutions focused on performance, scalability, and user success.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10">
          {ServiceData.map((data, index) => (
            <motion.div
              key={"service-" + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Suspense fallback={<ServiceCardSkeleton />}>
                <ServiceCard
                  ClassName="h-full shadow-2xl hover:shadow-primary/10 transition-all duration-500"
                  Icon={<data.icon sx={{ color: "#e9c6a9", fontSize: "2.5rem" }} />}
                  Title={data.title}
                  Description={data.description}
                />
              </Suspense>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(ServicePage);
