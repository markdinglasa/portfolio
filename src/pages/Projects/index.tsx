import { memo } from "react";
import {RouteChannel, SFC } from "../../types";
import { cn } from "../../utils";
import { Footer } from "../../components";
import ProjectCard from "../../components/Cards/ProjectCard";
import { useNavigate } from "react-router-dom";
import RTM from '../../assets/images/rtm-banner.png'
import iPOS from '../../assets/images/innosoft-banner.png'
import Connex from '../../assets/images/connex-banner.png'
import Himsog from '../../assets/images/himsog-banner.jpg'
import Lingua from '../../assets/images/lingua-banner.jpg'
import Iskalar from '../../assets/images/iskalar-banner.png'
import Philsca from '../../assets/images/philsca-banner.jpg'
export const ProjectPage: SFC = ({ ClassName }) => {
    const navigate = useNavigate()
    return (
        <>
            <div className={cn("w-full flex flex-col items-center justify-center px-[1rem]",ClassName)}>
                <div className="w-full md:w-10/12 flex flex-col items-center justify-center mt-[50px] h-full pt-10">
                    <h1 className="text-primary text-[45px]  font-black uppercase h-18 text-center">P r o j e c t s</h1>
                </div>
                <div className="w-full md:w-10/12 flex flex-wrap mt-[50px] h-full mb-[1rem]">
                    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-start items-start gap-[1rem]  ">
                        <ProjectCard 
                            Image={Himsog} 
                            Title={"Himsog"} 
                            Description="Empowering Filipino Lives Through Meal Planning." 
                            OnClick={()=>navigate(RouteChannel.PROJECTS_DETAILS.replace(':Id', 'Himsog'))} 
                            Dificulty={7}
                        />
                        <ProjectCard 
                            Image={Connex} 
                            Title={"Connex"} 
                            Description="A Web-Based Platform for Nurturing Alumni Connections and Success." 
                            OnClick={()=>navigate(RouteChannel.PROJECTS_DETAILS.replace(':Id', 'Connex'))} 
                            Dificulty={6}
                        />
                        <ProjectCard 
                            Image={iPOS} 
                            Title={"iTMS"} 
                            Description="An efficient ITMS (Ticketing Management System) designed to streamline issue tracking, support requests, and task management." 
                            OnClick={()=>navigate(RouteChannel.PROJECTS_DETAILS.replace(':Id', 'iTMS'))} 
                            Dificulty={7}
                        />
                        <ProjectCard 
                            Image={iPOS} 
                            Title={"iSIA"} 
                            Description="POS integrator for Sales reports, Insights and Analytics." 
                            OnClick={()=>navigate(RouteChannel.PROJECTS_DETAILS.replace(':Id', 'iSIA'))} 
                            Dificulty={7}
                        />
                        <ProjectCard 
                            Image={RTM} 
                            Title={"Roots & Morphology"} 
                            Description="Anatomy and Physiology educators. Introduce Anatomy and Physiology terms to your students by way of their Latin and Greek Roots and Morphology. " 
                            OnClick={()=>navigate(RouteChannel.PROJECTS_DETAILS.replace(':Id', 'Roots & Morphology'))} 
                            Dificulty={8}
                        />
                        <ProjectCard 
                            Image={iPOS} 
                            Title={"iPOS"} 
                            Description="Innosoft web based cloud Point of Sales System." 
                            OnClick={()=>navigate(RouteChannel.PROJECTS_DETAILS.replace(':Id', 'iPOS'))} 
                            Dificulty={4}
                        />
                        <ProjectCard 
                            Image={Philsca} 
                            Title={"GMS"} 
                            Description="An online grade management system." 
                            OnClick={()=>navigate(RouteChannel.PROJECTS_DETAILS.replace(':Id', 'GMS'))} 
                            Dificulty={4}
                        />
                        <ProjectCard 
                            Image={Iskalar} 
                            Title={"ISKALAR"} 
                            Description="An online platform for Government scholar's management and monitoring." 
                            OnClick={()=>navigate(RouteChannel.PROJECTS_DETAILS.replace(':Id', 'ISKALAR'))} 
                            Dificulty={5}
                        />
                         <ProjectCard 
                            Image={Lingua} 
                            Title={"Lingua"} 
                            Description="An AI Powered Sign Language Interpreter for Android." 
                            OnClick={()=>navigate(RouteChannel.PROJECTS_DETAILS.replace(':Id', 'ISKALAR'))} 
                            Dificulty={5}
                        />
                        <ProjectCard 
                            Image={Philsca} 
                            Title={"LMS"} 
                            Description="A simple library management system, for University usage" 
                            OnClick={()=>navigate(RouteChannel.PROJECTS_DETAILS.replace(':Id', 'LMS'))} 
                            Dificulty={3}
                        />
                        <ProjectCard 
                            Image={Philsca} 
                            Title={"AMS"} 
                            Description="A system to monitor student attendance using face recognition." 
                            OnClick={()=>navigate(RouteChannel.PROJECTS_DETAILS.replace(':Id', 'AMS'))} 
                            Dificulty={5}
                        />
                        <ProjectCard 
                            Image={Philsca} 
                            Title={"SIMS"} 
                            Description="A streamlined Student Information Management System designed to efficiently store, manage, and retrieve student records, including personal details, academic performance, and enrollment history." 
                            OnClick={()=>navigate(RouteChannel.PROJECTS_DETAILS.replace(':Id', 'SIMS'))} 
                            Dificulty={5}
                        />
                    </div>
                </div>
                <div className="w-full flex items-center justify-center pb-[1rem]  max-w-full">
                    <Footer/>
                </div>
            </div>
     
        </>
    )
}
export default memo(ProjectPage)