import { Avatar, Skeleton } from "@mui/material";
import { SFC } from "@/types";
import { cn } from "@/utils";
import { memo } from "react";

export interface TestimonyProps {
  image: string;
  name: string;
  message: string;
  project: string;
}

export const TestimonyCardSkeleton = () => {
  return (
    <>
      <div
        className={
          "rounded-md w-11/12 md:w-[20rem] h-fit flex flex-col gap-4 bg-[#212227] p-[1rem] overflow-x-hidden justify-center items-center"
        }
      >
        <div className="w-full flex flex-row gap-4 items-center">
          <Skeleton
            animation="wave"
            variant="circular"
            width={"3.5rem"}
            height={"3.5rem"}
          />
          <div className="flex flex-col">
            <Skeleton animation="wave" height={"1.5rem"} />
            <Skeleton animation="wave" height={"1.5rem"} />
          </div>
        </div>
        <div className="flex flex-wrap w-full">
          <Skeleton animation="wave" height={"1rem"} />
          <Skeleton animation="wave" height={"1rem"} />
          <Skeleton animation="wave" height={"1rem"} />
        </div>
      </div>
    </>
  );
};

// note: In coursel, displaying each testimony of each client
export const Testimony: SFC<TestimonyProps> = memo(
  ({ ClassName, image, name, message, project }) => {
    return (
      <>
        <div
          className={cn(
            "rounded-md w-[20rem] h-fit flex flex-col gap-4 bg-[#212227] p-[1rem] overflow-x-hidden justify-center items-center",
            ClassName
          )}
        >
          <div className="w-full flex flex-row gap-4 items-center">
            <Avatar
              src={image}
              className="border-primary"
              sx={{ width: "3.5rem", height: "3.5rem" }}
            />
            <div className="flex flex-col">
              <span className="text-[1.25] font-semibold text-nowrap">
                {name}
              </span>
              <span className="text-[14px]">{project}</span>
            </div>
          </div>
          <div className="flex flex-wrap w-full">
            <p className="text-balance">"{message}"</p>
          </div>
        </div>
      </>
    );
  }
);

export default Testimony;
