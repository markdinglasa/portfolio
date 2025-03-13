import { memo } from "react";
import { SFC } from "../../types";
import CheckIcon from '@mui/icons-material/Check';
import React from 'react'

export interface WorkExperience {
    CompanyLogo: string
    CompanyName: string
    ExclusiveDates: string
    JobTitle: string
    Skills: string[]
}
export const WorkExperience : SFC<WorkExperience> = ({CompanyLogo, CompanyName, ExclusiveDates, JobTitle, Skills}) => {
    return (
        <div className="flex h-fit md:flex-row flex-col gap-4 relative items-start justify-start border border-gray-100/30 p-5 rounded-lg hover:bg-[#9C9C9C]/10 duration-300 ease-in-out">
                                <div className="w-full md:w-3/12 h-[100%]">
                                    <div className="px-3 flex flex-col md:items-end items-center justify-center">
                                        <img src={CompanyLogo} className="h-[4rem] mb-[1rem]" alt="innosoft"/>
                                        <div className="text-[#9C9C9C] text-sm">{ExclusiveDates}</div>
                                    </div>
                                </div>
                                <div className="w-9/12 h-full flex items-start justify-start flex-col">
                                    <div className="w-full">
                                        <span className="text-lg text-slate-100">{JobTitle}</span> 
                                    </div>
                                    <div className="w-full border-b border-gray-100/30 pb-[1rem]">
                                        <span className="text-sm text-[#9C9C9C]">{CompanyName}</span> 
                                    </div>
                                    {Skills.map((record, index) => {
                                       return (
                                       <React.Fragment key={index}>
                                            <div className="w-full flex flex-row gap-[1rem] py-2">
                                                <CheckIcon className="text-[#9C9C9C] " fontSize="small"/>
                                                <span className="text-sm text-[#9C9C9C]">{record}</span> 
                                            </div>
                                       </React.Fragment>
                                       )
                                    })}
                                    
                                </div>
                            </div>
    )
}
export default memo(WorkExperience)