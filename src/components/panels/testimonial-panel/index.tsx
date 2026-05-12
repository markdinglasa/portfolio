import { Fragment } from "react/jsx-runtime";
import { SFC } from "../../../types";
import { cn } from "@/utils";
import { TestimoniesData } from "@/constants";
import Marquee from "react-fast-marquee";
import { lazy, memo, Suspense } from "react";
import { TestimonyCardSkeleton } from "../../skeletons";
import * as motion from "motion/react-client";

const Testimony = lazy(() => import("@/components/Cards/testimony-card"));

// note: In carousel, displaying each testimony of each client
const Testimonial: SFC = memo(({ ClassName }) => {
  return (
    <section
      id="testimonials"
      className={cn(
        "relative flex justify-center items-center md:py-32 py-12 md:px-0 px-4 overflow-hidden",
        ClassName
      )}
    >
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none opacity-[0.03] select-none z-0">
        <span className="text-[12rem] md:text-[20rem] font-black uppercase tracking-tighter text-white">
          Trust
        </span>
      </div>

      <div className="w-full flex flex-col items-center relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm mb-4">
            05 // What They Say
          </span>
          <h1 className="font-bold uppercase text-[2.5rem] md:text-[4rem] leading-tight mb-6">
            Testimonials
          </h1>
          <p className="text-lg md:text-xl text-[#9C9C9C] max-w-2xl leading-relaxed">
            Stories of success, trust, and satisfaction from the people I've had
            the privilege to work with.
          </p>
        </motion.div>

        {/* Testimonial Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="w-full"
        >
          <Marquee
            className="overflow-hidden flex items-center w-full"
            pauseOnHover
            speed={30}
            gradient
            gradientColor="#161616"
            gradientWidth={80}
          >
            {TestimoniesData.map((data, index) => (
              <Fragment key={"testimony-"+index}>
                <Suspense fallback={<TestimonyCardSkeleton />}>
                  <Testimony
                    ClassName={"w-11/12 md:w-[22rem] mx-3"}
                    image={data.image}
                    name={data.name}
                    message={data.message}
                    project={data.project}
                  />
                </Suspense>
              </Fragment>
            ))}
          </Marquee>
        </motion.div>
      </div>
    </section>
  );
});

export default Testimonial;
