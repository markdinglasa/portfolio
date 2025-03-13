import { memo } from "react";
import { SFC } from "../../types";
import { cn } from "../../utils";

interface Skill {
    Logo?:string
    Name:string
}

export const Skill : SFC<Skill> = ({ClassName,Logo,Name}) => {
    return (
        <div className={cn("border border-gray-100/30 rounded-lg w-fit p-3 flex items-center gap-[1rem] hover:bg-[#9C9C9C]/10 duratio-300 ease-in-out", ClassName)}>
             {Logo && <img src={Logo} className="w-[2rem] h-[2rem] text-slate-100"/>}
             <span className="text-sm">{Name}</span>
        </div>
    )
}
export default memo(Skill)