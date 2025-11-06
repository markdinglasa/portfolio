import { memo } from "react";
import { SFC } from "../../types";
import { cn } from "../../utils";
import { Skeleton } from "@mui/material";

interface Skill {
  Logo?: string;
  Name: string;
}

export const SkillSkeleton = () => {
  return (
    <>
      <div
        className={cn(
          " rounded-lg w-fit p-3 flex items-center gap-[1rem] hover:bg-[#9C9C9C]/10 duration-300 ease-in-out"
        )}
      >
        <Skeleton width={"3.5rem"} height={"3.5rem"} variant="circular" />
        <span className="text-sm">
          <Skeleton height={"1rem"} width={"100%"} />
        </span>
      </div>
    </>
  );
};

export const Skill: SFC<Skill> = memo(({ ClassName, Logo, Name }) => {
  return (
    <div
      className={cn(
        " rounded-lg w-fit p-3 flex items-center gap-[1rem]  hover:bg-slate-100/10 duration-300 ease-linear",
        ClassName
      )}
    >
      {Logo && <img src={Logo} className="w-[2rem] h-[2rem] " />}
      <span className="text-sm">{Name}</span>
    </div>
  );
});
export default Skill;
