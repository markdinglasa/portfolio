import { Fragment } from "react/jsx-runtime";
import { SFC } from "../../../types";
import { TestimoniesData } from "@/constants";
import Marquee from "react-fast-marquee";
import { lazy, memo, Suspense } from "react";
import { TestimonyCardSkeleton } from "../../skeletons";

const Testimony = lazy(() => import("@/components/Cards/testimony-card"));

// note: In coursel, displaying each testimony of each client
const Testimonial: SFC = memo(({ ClassName }) => {
  return (
    <>
      <div className={ClassName}>
        <div className="py-5 flex flex-col justify-center items-center">
          <div className="flex justify-center items-center flex-col p-2 w-full md:w-4/6 text-center">
            <span className="text-[30px]">
              Stories of Success, Trust, and Satisfaction
            </span>
          </div>
          <div className="title text-2lg text-center mb-20">
            <h1 className="font-bold uppercase text-zinc-400  text-[2.5rem] md:text-[3rem] flex md:flex-row flex-col text-center break-words">
              T e s t i m o n i a l s
            </h1>
          </div>
          <Marquee className="overflow-hidden flex items-center w-full justify-between">
            {TestimoniesData.map((data, index) => (
              <Fragment key={index}>
                <Suspense fallback={<TestimonyCardSkeleton />}>
                  <Testimony
                    ClassName={"w-11/12 md:w-[20rem] mr-4"}
                    image={data.image}
                    name={data.name}
                    message={data.message}
                    project={data.project}
                  />
                </Suspense>
              </Fragment>
            ))}
          </Marquee>
        </div>
      </div>
    </>
  );
});

export default Testimonial;
