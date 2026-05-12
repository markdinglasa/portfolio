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

// note: In carousel, displaying each testimony of each client
const Testimony: SFC<TestimonyProps> = memo(
  ({ ClassName, image, name, message, project }) => {
    return (
      <div
        className={cn(
          "rounded-2xl w-[20rem] h-[15rem] flex flex-col gap-4 p-5",
          "border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm",
          "overflow-x-hidden justify-start items-center",
          "hover:border-[#e9c6a9]/30 hover:bg-white/[0.04]",
          "transition-all duration-300 ease-out group",
          ClassName
        )}
      >
        <div className="w-full flex flex-row gap-4 items-center overflow-visible">
          <Avatar
            src={image}
            className="border-primary"
            sx={{
              width: "3rem",
              height: "3rem",
              border: "2px solid rgba(233, 198, 169, 0.3)",
            }}
          />
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-white/90 text-nowrap group-hover:text-white transition-colors duration-200">
              {name}
            </span>
            <span className="text-xs text-[#9C9C9C]/60 font-mono tracking-wide">
              {project}
            </span>
          </div>
        </div>

        {/* Quote icon */}
        <div className="flex text-center w-full items-center justify-center h-full relative">
          <span className="absolute -top-1 left-0 text-[#e9c6a9]/20 text-3xl font-serif leading-none select-none">
            "
          </span>
          <p className="w-full text-sm text-[#9C9C9C]/80 leading-relaxed italic group-hover:text-[#9C9C9C] transition-colors duration-200 px-3">
            {message}
          </p>
          <span className="absolute -bottom-1 right-0 text-[#e9c6a9]/20 text-3xl font-serif leading-none select-none">
            "
          </span>
        </div>
      </div>
    );
  }
);

export default Testimony;
