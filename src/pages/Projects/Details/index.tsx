import { memo } from "react";
import { SFC } from "../../../types";
import { cn } from "../../../utils";
import { Footer } from "../../../components";
import { useParams } from "react-router-dom";
export const ProjectDetailsPage: SFC = ({ ClassName }) => {
    // const navigate = useNavigate()
    const {Id} = useParams<{Id:string}>()
    return (
        <>
            <div className={cn("w-full flex flex-col items-center justify-center px-[1rem]",ClassName)}>
                <div className="w-full md:w-10/12 flex flex-col items-center justify-center mt-[50px] h-full pt-10">
                    <h1 className="text-primary text-[45px]  font-black uppercase h-18 text-center">{(Id ?? '').split('').join(' ')}</h1>
                </div>
              
                <div className="w-full md:w-10/12 flex flex-wrap mt-[50px] h-full mb-[1rem]">
                   
                </div>
                <div className="w-full flex items-center justify-center pb-[1rem]  max-w-full">
                    <Footer/>
                </div>
            </div>
     
        </>
    )
}
export default memo(ProjectDetailsPage)