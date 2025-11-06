import { useNavigate } from "react-router-dom";
import { SFC } from "@/types";
import { memo } from "react";

export const MissingPage: SFC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-screen h-screen justify-center items-center flex">
        <main className="grid place-items-center px-6 py-24 sm:py-56 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-slate-100/50 ">404</p>
            <div className="flex items-center justify-center">
              <h1 className="mt-4 text-3xl h-16 font-bold tracking-tight text-primary sm:text-5xl ">
                Page not found
              </h1>
            </div>
            <p className="mt-6 text-base leading-7 text-slate-100/40 ">
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 text-slate-100/50 ">
              <button onClick={() => navigate("/")} className="">
                Home
              </button>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
export default memo(MissingPage);
