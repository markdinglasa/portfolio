import { ButtonColor, ButtonType, DevelopmentProcedure, SFC } from "@/types";
import { cn } from "@/utils";
import CloseIcon from "@mui/icons-material/Close";
import { Fragment, memo, useState } from "react";
import MdiIcon from "@mdi/react";
import { DevelopmentProcedureData } from "@/constants";

import { CircleButton } from "@/components";

export const DevelopmentProcedurePanel: SFC = memo(({ ClassName }) => {
  //const [isActive, toggleActive] = useToggle(false);
  const [active, setActive] = useState<DevelopmentProcedure | null>(null);
  return (
    <>
      <div
        className={cn(
          "w-full shadow-md h-fit flex items-center justify-center py-10",
          ClassName
        )}
      >
        <div className="w-full h-fit md:w-10/12 content flex flex-wrap md:flex-row gap-4  overflow-visible relative md:px-0 px-4">
          <div className="w-full flex items-center justify-center flex-col">
            <div className="flex justify-center items-center mt-10 flex-col p-2 w-full md:w-4/6 text-center">
              <span className="text-[30px]">Let's turn Vision to Value</span>
            </div>
            <div className="title text-2lg text-center mb-20">
              <h1 className="font-bold uppercase text-zinc-400  text-[2.5rem] md:text-[3rem] flex md:flex-row flex-col text-center break-words">
                p r o c e d u r e
              </h1>
            </div>
          </div>
          <div className="flex md:flex-row sm:flex-col flex-col items-center justify-between gap-4 w-full py-4">
            {DevelopmentProcedureData.map((data, index) => (
              <Fragment key={index}>
                <>
                  <div
                    onClick={() => {
                      if (active?.title === data.title) setActive(null);
                      else setActive(data);
                    }}
                    className={`${active?.title === data.title ? "text-[#e9c6a9] -mt-[0.5rem]" : ""} w-full md:w-[15rem] md:h-[15rem] h-fit bg-[#212227] rounded-md p-4 flex flex-col hover:-mt-[0.5rem] duration-300 ease-linear hover:text-[#e9c6a9] text-[#9C9C9C] cursor-pointer`}
                  >
                    <div className="w-full flex items-start justify-start">
                      <MdiIcon
                        path={data.icon}
                        className="w-[4rem] h-[4rem] "
                      />
                    </div>

                    <div className="flex w-full items-center justify-center py-2 h-[7rem] overflow-visible text-center">
                      <span className="ms:text-xl text-2xl  text-slate-100/90 font-bold uppercase">
                        {data.title}
                      </span>
                    </div>
                    <div className="flex flex-col items-end justify-end bottom-0">
                      <span className="text-xl text-[#9C9C9C]">
                        {data.phase}
                      </span>
                    </div>
                  </div>
                </>
              </Fragment>
            ))}
          </div>

          <div
            className={`${active ? "block" : "hidden"} w-full ease-in-out duration-300`}
          >
            <div
              className={`w-full  h-fit  overflow-visible bg-[#212227] rounded-md p-[1rem] flex-row shadow-md`}
            >
              <div className="header  w-full flex flex-row justify-between gap-4 border-b pb-2 border-slate-100/40">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="overflow-visible -ml-2 md:ml-0">
                    <MdiIcon
                      path={active?.icon ?? ""}
                      className="w-[4rem] h-[4rem]"
                    />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <span className="text-2xl text-slate-100/90">
                      {active?.alias}
                    </span>
                    <span className="text-lg">{active?.phase}</span>
                  </div>
                </div>
                <div>
                  <CircleButton
                    Icon={<CloseIcon className="text-[#9C9C9C]" />}
                    Type={ButtonType.button}
                    OnClick={() => setActive(null)}
                    Color={ButtonColor.default}
                    //Title="close"
                  />
                </div>
              </div>
              <div className="content flex flex-col w-full py-2">
                <div className="text-row gap-2 w-full flex items-center">
                  <span className="text-dm font-semibold">Objective :</span>
                  <span className="text-dm">{active?.objective}</span>
                </div>

                <div className="py-2">
                  <div className="flex flex-col gap-2 mt-2">
                    {active?.activity.map((activity, index) => (
                      <Fragment key={index}>
                        <div className="w-full flex gap-1 flex-wrap border border-slate-100/10 rounded-md p-4">
                          <span className="text-sm font-semibold">
                            {activity.title} :
                          </span>
                          <span className="text-sm">
                            {activity.description}
                          </span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
});
