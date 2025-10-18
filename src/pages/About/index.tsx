import { Fragment, memo, Suspense } from "react";
import { SFC } from "../../types";
import { cn } from "../../utils";

import ProfileImage from "/image/mark-dinglasa.png";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import Innosoft from "../../assets/images/innosoft-logo2.png";
import Rococo from "../../assets/images/rococo.png";
import WorkExperience from "../../components/WorkExperience";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import Skill, { SkillSkeleton } from "../../components/Skill";

import { SkillData } from "@/constants";
import { GlareCard } from "../../components/Cards/GlareCard";
export const AboutPage: SFC = ({ ClassName }) => {
  return (
    <>
      <div
        className={cn(
          "w-full flex flex-col items-center justify-center px-[1rem]",
          ClassName
        )}
      >
        <div className="w-full md:w-10/12 flex flex-col items-center justify-center mt-[50px] h-full pt-10">
          <h1 className="text-primary text-[45px]  font-black uppercase h-18 text-center">
            A b o u t
          </h1>
          <div className="flex justify-center items-center flex-col p-2 w-full md:w-4/6 text-center">
            <span className="text-[20px] break-words">
              Build with intention, design with empathy, and code with
              precision.
            </span>
          </div>
        </div>
        <div className="w-full md:w-10/12 flex flex-col items-center justify-center mt-[50px]  rounded-md h-full">
          <div className="w-full pb-[1rem]">
            <div className="w-full text-white h-fit rounded-lg bg-[# ] p-[1rem]">
              <div className="flex md:flex-row flex-col items-center justify-center gap-[1rem] ">
                <div className="relative overflow-visible">
                  <GlareCard className="shadow-md">
                    <div className="w-full h-full z-10 relative">
                      <img
                        src={ProfileImage}
                        className="w-full h-full duration-300 ease-in-out hover:border-[#E9C6A9] "
                      />
                    </div>
                  </GlareCard>
                </div>
                <div className="flex flex-col w-full  gap-[1rem] items-start justify-center p-5 text-sm text-[#9C9C9C] text-justify">
                  <span className="text-lg text-slate-100">
                    Hi, I'm Mark—a passionate developer ready to bring your
                    ideas to life.
                  </span>
                  <span>
                    A <b> Full Stack Developer</b> with 3+ years of experience
                    specializing in frontend and backend development. Passionate
                    about building web application, mobile application and
                    desktop application, contributing to open source, and
                    continuously learning to new trends and technologies.
                  </span>
                  <span>
                    My journey began with a simple curiosity about how
                    technology shapes human experiences — and that curiosity
                    evolved into a career dedicated to building products that
                    matter.
                  </span>
                  <span>
                    Over the years, I’ve worked on diverse projects — from
                    small-scale tools to full-scale platforms — each one
                    teaching me how to design for performance, usability, and
                    scalability.
                  </span>
                  <span>
                    If you’re looking for someone who can transform ideas into
                    meaningful digital experiences, let’s build something
                    amazing together.
                  </span>
                </div>
              </div>
              <div className="w-full pb-[1rem]">
                <div className="w-full text-white h-fit rounded-lg ">
                  {/*<div className="flex p-3 mb-[1rem] flex-row gap-4 items-center justify-start">
                    <AutoFixHighIcon
                      className="text-slate-100 "
                      fontSize="medium"
                    />
                    <span className="text-lg">Skills</span>
                  </div>*/}
                  <div className="flex w-full flex-wrap  h-full">
                    {SkillData.map((data, index) => (
                      <Fragment key={index}>
                        <Suspense fallback={<SkillSkeleton />}>
                          <Skill Name={data.name} Logo={data?.logo} />
                        </Suspense>
                      </Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full pb-[1rem]">
            <div className="w-full text-white h-fit rounded-lg ">
              <div className="flex p-3 mb-[1rem] flex-row gap-4 items-center justify-start">
                <BusinessCenterIcon
                  className="text-slate-100 "
                  fontSize="medium"
                />
                <span className="text-lg">Work History</span>
              </div>
              <div className="flex w-full flex-col h-full">
                <WorkExperience
                  CompanyLogo={Innosoft}
                  CompanyName="Innosoft Solutions Inc. - Full Time"
                  ExclusiveDates="July 2023 - Present"
                  JobTitle="Full Stack Developer - Lead Developer"
                  Skills={[
                    "Provide technical leadership and mentor interns.",
                    "Set coding standards and best practices for the development team.",
                    "Optimize front-end code for speed and accessibility.",
                    "Design and develop scalable, high-performance web applications.",
                    "Ensure responsive and cross-platform compatibility.",
                    "Build and maintain RESTful APIs",
                    "Implement authentication, authorization, and security best practices.",
                    "Develop interactive user interfaces using modern JavaScript frameworks (React, Angular)",
                    "Ensure UX/UI consistency across devices.",
                    "Create efficient, normalized database schemas that support business requirements.",
                    "Design entity-relationship models (ERD) for structured and scalable databases.",
                    "Set up automated database backups and disaster recovery plans.",
                    "Handle data migrations, transformations, and integrations between systems.",
                  ]}
                />
                <WorkExperience
                  CompanyLogo={Innosoft}
                  CompanyName="Innosoft Solutions Inc. - Internship"
                  ExclusiveDates="February 2023 - May 2023"
                  JobTitle="Software Developer"
                  Skills={[
                    "ERP module implementation",
                    "Support and Maintain legacy applications",
                    "Set up automated database backups for clients",
                    "Handle data migrations, transformations, and integrations from one system to another.",
                  ]}
                />
                <WorkExperience
                  CompanyLogo={Rococo}
                  CompanyName="Rococo Global Technologies Corporation  - Remote Internship"
                  ExclusiveDates="January 2023 - May 2023"
                  JobTitle="Software Developer"
                  Skills={[
                    "Develop new application using ServiceNow Studio.",
                    "Implement and optimize Workflows, Business Rules, Client Scripts, UI Policies, and UI Actions.",
                    "Create and maintain Service Catalog items, Order Guides, and Record Producers.",
                    "Configure and support ITSM processes in ServiceNow.",
                    "Implement ServiceNow ITOM solutions to monitor and automate system alerts.",
                    "Configure security settings, user roles, and group permissions in Access Control Lists (ACLs).",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(AboutPage);
