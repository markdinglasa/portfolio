import Skeleton from "@mui/material/Skeleton";

export const ProjectCardSkeleton = () => {
  return (
    <>
      <div className="w-fullborder rounded-lg h-fit md:h-[25rem] overflow-hidden hover:border-[#E9C6A9] hover:shadow-lg border-gray-100/30 relative">
        <div className="h-[60%] w-full overflow-hidden">
          <Skeleton width={"100%"} height={"8rem"} />
        </div>
        <div className="h-[40%] w-full overflow-hidden p-3 bg-slate-100/5">
          <div className="w-full title flex flex-col h-28">
            <span className="text-sm text-slate-100/70 gap-2 flex items-center mb-2 overflow-visible">
              <Skeleton width={"30%"} height={"1rem"} />
            </span>
            <span className="text-lg font-medium text-slate-100 overflow-visible">
              <Skeleton width={"70%"} height={"1rem"} />
            </span>
            <div className="overflow-hidden">
              <Skeleton width={"100%"} height={"1rem"} />
              <Skeleton width={"100%"} height={"1rem"} />
              <Skeleton width={"100%"} height={"1rem"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
