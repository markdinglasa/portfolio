import { Avatar } from "@mui/material";
import { SFC } from "@/types";
import { cn } from "@/utils";
import { memo } from "react";

export interface TestimonyProps {
  image: string;
  name: string;
  message: string;
  project: string;
}

// note: In coursel, displaying each testimony of each client
const Testimony: SFC<TestimonyProps> = memo(
  ({ ClassName, image, name, message, project }) => {
    return (
      <>
        <div
          className={cn(
            "rounded-[20px] w-[20rem] h-[15rem] flex flex-col gap-4 bg-[#161616] p-[1rem] overflow-x-hidden justify-start items-center hover:text-[#e9c6a9] hover:border-[#e9c6a9] border border-slate-100/10 duration-300 ease-linear",
            ClassName
          )}
        >
          <div className="w-full flex flex-row gap-4 items-center overflow-visible">
            <Avatar
              src={image}
              className="border-primary"
              sx={{ width: "3.5rem", height: "3.5rem" }}
            />
            <div className="flex flex-col">
              <span className="text-[1.25] font-semibold text-nowrap">
                {name}
              </span>
              <span className="text-[14px] text-[#9C9C9C]">{project}</span>
            </div>
          </div>
          <div className="flex text-center w-full items-center justify-center h-full">
            <p className=" w-full text-[#9C9C9C]">"{message}"</p>
          </div>
        </div>
      </>
    );
  }
);

export default Testimony;
