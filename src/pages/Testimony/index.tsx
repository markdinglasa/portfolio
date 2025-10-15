import { Avatar } from "@mui/material";
import { SFC } from "../../types";
import { cn } from "../../utils";


export interface TestimonyProps {
    image:string
    name: string
    message:string
    project:string
}

// note: In coursel, displaying each testimony of each client
export const Testimony: SFC<TestimonyProps> = ({ClassName,image, name,message, project})=> {
    return <>
    <div className={cn('rounded-md w-[20rem] h-fit flex flex-col gap-4 bg-[#262626] p-[1rem] overflow-x-hidden justify-center items-center',ClassName)}>
        <div className="w-full flex flex-row gap-4 items-center">
            <Avatar src={image} className="border-primary" sx={{width:'3.5rem', height:'3.5rem'}}/>
            <div className="flex flex-col">
                <span className="text-[1.25] font-semibold text-nowrap">{name}</span>
                <span className="text-[14px]">{project}</span>
            </div>
        </div>
        <div className="flex flex-wrap w-full">
            <p className="text-balance">"{message}"</p>
        </div>
    </div>
    </>
}