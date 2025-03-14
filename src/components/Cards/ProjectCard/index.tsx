import { memo } from "react";
import { SFC } from "../../../types";
import StarIcon from '@mui/icons-material/Star';
import { truncate } from "../../../utils";
interface ProjectCard {
    Image: string
    Title: string
    Description?: string
    OnClick : () => void
    Dificulty: number
}
export const ProjectCard : SFC<ProjectCard> = ({Image,Title = 'Title',Description, OnClick = ()=>{},Dificulty=0 }) => {
    return (
        <div className="w-full border rounded-lg  h-fit md:h-[25rem] hover:border-[#E9C6A9] hover:shadow-lg border-gray-100/30">
            <div className="h-[60%] w-full overflow-hidden">
                <img src={Image} className="w-full h-full"/>
            </div>
            <div className="h-[40%] w-full overflow-hidden p-3">
                <div className="w-full title flex flex-col h-28">
                    <span className="text-lg font-medium text-slate-100">{Title}</span>
                    {Description && <span className="text-sm overflow-y-hidden">{truncate(Description, 100)}</span>}
                </div>
                <div className="w-full flex justify-between items-start ">
                    <span className="text-primary cursor-pointer text-sm" onClick={OnClick}>Learn more</span>
                    <div className="flex items-center justify-center">
                        <StarIcon className="text-primary"/>
                        <span className="text-slate-100 cursor-pointer text-sm ml-1 flex items-center justify-center">{Dificulty}/10</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(ProjectCard)