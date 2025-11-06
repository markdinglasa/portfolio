import { Skeleton } from "@mui/material";

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
