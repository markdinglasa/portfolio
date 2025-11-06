import { SFC } from "@/types";
import { cn } from "@/utils";
import { memo, ReactNode } from "react";

interface PageHeaderPanelProps {
  title: string;
  subtitle: string;
  qoute?: string;
  actions?: ReactNode;
}

export const PageHeaderPanel: SFC<PageHeaderPanelProps> = memo(
  ({ ClassName, title, subtitle, qoute, actions }) => {
    const titles = title
      .split(" ")
      .map((word) => word.split("").join(" "))
      .join(" | ");
    return (
      <>
        <div className={cn("w-full h-full max-w-full", ClassName)}>
          <div className="flex flex-row py-40 flex-wrap mt-[3rem] ">
            <div className="w-full flex justify-center items-center max-w-full ">
              <div className="w-full flex flex-col justify-center items-center max-w-full">
                <div className="w-full items-center flex justify-center max-w-full">
                  <h1 className="font-bold uppercase text-zinc-400 text-[2.5rem] md:text-[3rem] flex md:flex-row flex-col text-center break-words">
                    {titles}
                  </h1>
                </div>
                <span className="text-[20px] capitalize">{subtitle}</span>
                <div className="flex justify-center items-center mt-10 flex-col p-2 w-full md:w-4/6 text-center max-w-full">
                  <span className="text-[1.75rem] md:text-[2.5rem] break-words ">
                    {qoute}
                  </span>
                </div>
                <div className="flex justify-center items-center mt-10 flex-row p-2 w-full md:w-4/6 text-center gap-[1rem] max-w-full">
                  {actions}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
);
