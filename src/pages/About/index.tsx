import { memo } from "react";
import { SFC } from "../../types";
import { cn } from "../../utils";
import ProfileImage from '../../assets/images/122752013.jpg'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import Innosoft from '../../assets/images/innosoft-logo2.png'
import Roots from '../../assets/svg/rtm-logo.svg'
import Connex from '../../assets/svg/connex-logo.svg'
import Himsog from '../../assets/images/himsog.png'
import Rococo from '../../assets/images/rococo.png'
import WorkExperience from "../../components/WorkExperience";
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import Skill from "../../components/Skill";

import Angular from '../../assets/svg/angular-svgrepo-com.svg'
import Bootstrap from '../../assets/svg/bootstrap-fill-svgrepo-com.svg'
import CSS from '../../assets/svg/css-16-svgrepo-com.svg'
import Docker from '../../assets/svg/docker-16-svgrepo-com.svg'
import Electron from '../../assets/svg/electron-svgrepo-com.svg'
import Express from '../../assets/svg/express-svgrepo-com.svg'
import Flask from '../../assets/svg/flask-svgrepo-com.svg'
import Git from '../../assets/svg/git-svgrepo-com.svg'
import HTML from '../../assets/svg/html-16-svgrepo-com.svg'
import JS from '../../assets/svg/javascript-16-svgrepo-com.svg'
import MongoDB from '../../assets/svg/mongodb-svgrepo-com.svg'
import Mysql from '../../assets/svg/mysql-svgrepo-com.svg'
import NodeJS from '../../assets/svg/node_js.svg'
import PS from '../../assets/svg/photoshop-svgrepo-com.svg'
import PHP from '../../assets/svg/php.svg'
import Python from '../../assets/svg/python-127-svgrepo-com.svg'
import ReactJS from '../../assets/svg/react_js.svg'
import Tailwind from '../../assets/svg/tailwind-svgrepo-com.svg'
import TS from '../../assets/svg/typescript-16-svgrepo-com.svg'

import { Footer } from "../../components";
export const AboutPage: SFC = ({ ClassName }) => {
    return (
        <>
            <div className={cn("w-full flex flex-col items-center justify-center px-[1rem]",ClassName)}>
                <div className="w-full md:w-10/12 flex flex-col items-center justify-center mt-[50px] h-full pt-10">
                    <h1 className="text-primary text-[45px]  font-black uppercase h-18">A b o u t &nbsp; M a r k</h1>
                </div>
                <div className="w-full md:w-10/12 flex flex-col items-center justify-center mt-[50px]  h-full">
                    <div className="w-full pb-[1rem]">
                        <div className="w-full text-white h-fit rounded-lg border border-gray-100/30 p-5">
                            <div className="flex md:flex-row flex-col items-center justify-center gap-[1rem]">
                                <div className="md:w-2/12 ">
                                    <img src={ProfileImage} className="rounded-full w-[10rem] h-[10rem] border-2 border-[#161616] duration-300 ease-in-out hover:border-[#E9C6A9] "/>
                                </div>
                                <div className="flex flex-col w-10/12 gap-[1rem] items-start justify-center">
                                    <span className="text-lg text-slate-100">Hi, I'm Mark—a passionate developer ready to bring your ideas to life.</span>
                                    <span className="text-sm text-[#9C9C9C]">I'm a Full Stack Developer with 3+ years of experience specializing in frontend and backend development. I'm passionate about building web application, mobile application and desktop application, contributing to open source, and continuously learning new technologies.</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full pb-[1rem]">
                        <div className="w-full text-white h-fit rounded-lg ">
                            <div className="flex flex  p-3 mb-[1rem] flex-row gap-4 items-center justify-start">
                                <AutoFixHighIcon className="text-slate-100 " fontSize="medium"/>
                                <span className="text-lg">Skills</span>
                            </div>
                            <div className="flex w-full flex-wrap gap-4 h-full">
                                <Skill Logo={ReactJS} Name="React JS"/>
                                <Skill Logo={Angular} Name="Angular"/>
                                <Skill Logo={Express} Name="Express JS"/>
                                <Skill Logo={Tailwind} Name="Tailwind CSS"/>
                                <Skill Logo={Bootstrap} Name="Bootstrap"/>
                                <Skill Logo={CSS} Name="CSS"/>
                                <Skill Logo={HTML} Name="HTML"/>
                                <Skill Logo={JS} Name="JavaScript"/>
                                <Skill Logo={TS} Name="TypeScript"/>
                                <Skill Logo={NodeJS} Name="Node JS"/>
                                <Skill Logo={Electron} Name="Electron JS"/>
                                <Skill Logo={Flask} Name="Flask"/>
                                <Skill Logo={Python} Name="Python"/>
                                <Skill Logo={PHP} Name="PHP"/>
                                <Skill Logo={Git} Name="Git"/>
                                <Skill Logo={Docker} Name="Docker"/>
                                <Skill Logo={Mysql} Name="Mysql"/>
                                <Skill  Name="Microsoft SQL Server"/>
                                <Skill Logo={MongoDB} Name="MongoDB"/>
                                <Skill Logo={PS} Name="Photoshop"/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full pb-[1rem]">
                        <div className="w-full text-white h-fit rounded-lg ">
                            <div className="flex flex  p-3 mb-[1rem] flex-row gap-4 items-center justify-start">
                                <BusinessCenterIcon className="text-slate-100 " fontSize="medium"/>
                                <span className="text-lg">Work History</span>
                            </div>
                            <div className="flex w-full flex-col gap-4 h-full">
                            <WorkExperience CompanyLogo={Innosoft} CompanyName="Cebu Innosoft Solution Services Inc. - Full Time" ExclusiveDates="July 2023 - July 2025" JobTitle="Full Stack Developer - Lead Developer" 
                            Skills={[
                                'Provide technical leadership and mentor interns.',
                                'Set coding standards and best practices for the development team.',
                                'Optimize front-end code for speed and accessibility.',
                                'Design and develop scalable, high-performance web applications.', 
                                'Ensure responsive and cross-platform compatibility.', 
                                'Build and maintain RESTful APIs',
                                'Implement authentication, authorization, and security best practices.',
                                'Develop interactive user interfaces using modern JavaScript frameworks (React, Angular)',
                                'Ensure UX/UI consistency across devices.',
                                'Create efficient, normalized database schemas that support business requirements.',
                                'Design entity-relationship models (ERD) for structured and scalable databases.',
                                'Set up automated database backups and disaster recovery plans.',
                                'Handle data migrations, transformations, and integrations between systems.'
                                ]}/>
                            <WorkExperience CompanyLogo={Himsog} CompanyName="Himsog - Remote Part Time" ExclusiveDates="February 2025 - April 2025" JobTitle="Full Stack Developer" 
                                Skills={[
                                'Develop end-to-end responsive web applications, handling both frontend (UI/UX) and backend (API, database)',
                                'Optimize front-end code for speed and accessibility.',
                                'Design and develop scalable, high-performance mobile application', 
                                'Build and maintain RESTful APIs',
                                'Work within Agile/Scrum frameworks, collaborating with UI/UX designers, backend engineers',
                                'Create efficient, normalized database schemas that support business requirements.',
                                'Design entity-relationship models (ERD) for structured and scalable databases.',
                                ]}/>
                            <WorkExperience CompanyLogo={Roots} CompanyName="Roots and Morphology - Remote Part Time" ExclusiveDates="September 2024 - December 2024" JobTitle="Full Stack Developer" 
                                Skills={[
                                'Develop end-to-end mobile applications, handling both frontend (UI/UX) and backend (API, database)',
                                'Optimize front-end code for speed and accessibility.',
                                'Design and develop scalable, high-performance mobile application', 
                                'Build and maintain RESTful APIs',
                                'Work within Agile/Scrum frameworks, collaborating with UI/UX designers, backend engineers',
                                'Create efficient, normalized database schemas that support business requirements.',
                                'Design entity-relationship models (ERD) for structured and scalable databases.',
                                'Ensure WCAG-compliant designs and optimize for touch gestures and screen readers.',
                                'Implement Google OAuth 2.0 for secure user authentication.',
                                'Implement Google Pay API for seamless checkout and payment processing.',
                                'Set up Google Play Billing for subscription-based or one-time purchases.',
                                ]}/>
                            <WorkExperience CompanyLogo={Connex} CompanyName="Connex - Remote Part Time" ExclusiveDates="September 2024 - December 2024" JobTitle="Full Stack Developer" 
                                Skills={[
                                'Develop end-to-end responsive web applications, handling both frontend (UI/UX) and backend (API, database)',
                                'Optimize front-end code for speed and accessibility.',
                                'Design and develop scalable, high-performance mobile application', 
                                'Build and maintain RESTful APIs',
                                'Work within Agile/Scrum frameworks, collaborating with UI/UX designers, backend engineers',
                                'Create efficient, normalized database schemas that support business requirements.',
                                'Design entity-relationship models (ERD) for structured and scalable databases.',
                                ]}/>
                            <WorkExperience CompanyLogo={Rococo} CompanyName="Rococo Global Technologies Corporation  - Remote Internship" ExclusiveDates="January 2023 - May 2023" JobTitle="Software Developer" 
                                Skills={[
                                'Develop new application using ServiceNow Studio.',
                                'Implement and optimize Workflows, Business Rules, Client Scripts, UI Policies, and UI Actions.',
                                'Create and maintain Service Catalog items, Order Guides, and Record Producers.', 
                                'Configure and support ITSM processes in ServiceNow.',
                                'Implement ServiceNow ITOM solutions to monitor and automate system alerts.',
                                'Configure security settings, user roles, and group permissions in Access Control Lists (ACLs).',
                                ]}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center pb-[1rem] max-w-full">
                    <Footer/>
                </div>
            </div>
     
        </>
    )
}
export default memo(AboutPage)