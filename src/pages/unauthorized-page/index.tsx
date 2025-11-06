import { useNavigate } from "react-router-dom";
import { SFC } from "../../types";
import { memo } from "react";

export const UnauthorizedPage: SFC = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full h-full justify-center items-center flex">
        <main className="grid place-items-center px-6 py-24 sm:py-56 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-slate-100/50">403</p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-primary sm:text-5xl">
              Access Denied
            </h1>
            <p className="mt-6 text-base leading-7 text-slate-100/40">
              Sorry, you don't have permission to access this page
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 text-slate-100/50">
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
export default memo(UnauthorizedPage);
