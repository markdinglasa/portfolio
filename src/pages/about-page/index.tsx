import { Fragment, memo, Suspense } from "react";
import { SFC } from "../../types";
import { cn } from "../../utils";

import ProfileImage from "/image/mark-dinglasa.png";
import Innosoft from "../../assets/images/innosoft-logo2.png";
import Rococo from "../../assets/images/rococo.png";
import Questnova from "../../assets/images/questnova.png";
import WorkExperience, {
  WorkExperienceProps,
} from "../../components/work-expericence";
import Skill, { SkillSkeleton } from "../../components/skill-chip";

import { SkillData } from "@/constants";
import { GlareCard } from "@/components/Cards/glare-card";
import Counter from "@/components/counter";
import { PageHeaderPanel } from "@/components/panels/page-header-panel";
import * as motion from "motion/react-client";

const WORK_EXPERIENCE_DATA: WorkExperienceProps[] = [
  {
    CompanyLogo: Questnova,
    CompanyName: "Questnova Systems Corporation",
    ExclusiveDates: "February 2026 - Present",
    JobTitle: "Senior Full Stack Developer (Team Lead) - Project Based",
    Skills: [
      "Leading a team of developers in a fast-paced agile environment. Responsible for driving end-to-end application development, architecting scalable solutions, and ensuring timely delivery of high-quality software products.",
      "Collaborates closely with cross-functional teams to translate business requirements into technical implementations while maintaining code quality, performance, and security standards. ",
      "Demonstrated leadership in mentoring team members, streamlining development workflows, and accelerating feature delivery in rapidly evolving project demands.",
    ],
  },
  {
    CompanyLogo: Innosoft,
    CompanyName: "Innosoft Solutions Inc.",
    ExclusiveDates: "July 2023 - February 2026",
    JobTitle: "Full Stack Developer (Team Lead) - Full Time",
    Skills: [
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
    ],
  },
  {
    CompanyLogo: Innosoft,
    CompanyName: "Innosoft Solutions Inc.",
    ExclusiveDates: "February 2023 - May 2023",
    JobTitle: "Software Developer - Internship",
    Skills: [
      "ERP module implementation",
      "Support and Maintain legacy applications",
      "Set up automated database backups for clients",
      "Handle data migrations, transformations, and integrations from one system to another.",
    ],
  },
  {
    CompanyLogo: Rococo,
    CompanyName: "Rococo Global Technologies Corporation",
    ExclusiveDates: "February 2022 - June 2023",
    JobTitle: "Software Developer - Internship",
    Skills: [
      "Develop new application using ServiceNow Studio.",
      "Implement and optimize Workflows, Business Rules, Client Scripts, UI Policies, and UI Actions.",
      "Create and maintain Service Catalog items, Order Guides, and Record Producers.",
      "Configure and support ITSM processes in ServiceNow.",
      "Implement ServiceNow ITOM solutions to monitor and automate system alerts.",
      "Configure security settings, user roles, and group permissions in Access Control Lists (ACLs).",
    ],
  },
];

export const AboutPage: SFC = ({ ClassName }) => {
  const data = {
    title: "About",
    subtitle: "A passionate full stack developer",
    qoute:
      "Build with intention, design with empathy, and code with precision.",
  };

  return (
    <div>
      <PageHeaderPanel
        title={data.title}
        subtitle={data.subtitle}
        qoute={data.qoute}
        backdrop="fullstack"
      />

      {/* ─── Section 1: Introduction ─── */}
      <section
        id="about-intro"
        className={cn(
          "relative flex justify-center items-center md:py-24 py-12 md:px-0 px-4 overflow-hidden",
          ClassName
        )}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none opacity-[0.03] select-none z-0">
          <span className="text-[12rem] md:text-[20rem] font-black uppercase tracking-tighter text-white">
            About
          </span>
        </div>

        <div className="w-full md:w-10/12 flex flex-col items-center relative z-10">
          {/* Intro Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm mb-4">
              Who I Am
            </span>
            <h1 className="font-bold uppercase overflow-visible text-[2.5rem] md:text-[4rem] leading-tight mb-6">
              The Dreamer
            </h1>
          </motion.div>

          {/* Bio + Photo Layout */}
          <div className="flex md:flex-row flex-col items-center justify-center gap-12 md:gap-16 w-full">
            {/* Left Bio */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col w-full md:w-1/3 gap-5"
            >
              <p className="text-xl md:text-2xl font-semibold text-white/90 leading-snug overflow-visible">
                Hi, I'm Mark—a passionate developer ready to bring your ideas to
                life.
              </p>
              <p className="text-[15px] text-[#9C9C9C]/80 leading-relaxed">
                A <strong className="text-white/80">Full Stack Developer</strong> with{" "}
                {new Date().getFullYear() - 2022}+ years of experience
                specializing in frontend and backend development.
              </p>
              <p className="text-[15px] text-[#9C9C9C]/80 leading-relaxed">
                Passionate about building{" "}
                <strong className="text-white/80">Web</strong>,{" "}
                <strong className="text-white/80">Mobile</strong>, and{" "}
                <strong className="text-white/80">Desktop Applications</strong>
                , contributing to open source, and continuously learning new
                trends and technologies.
              </p>
            </motion.div>

            {/* Center Photo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative overflow-visible flex-shrink-0"
            >
              <GlareCard className="shadow-md">
                <div className="w-full h-full z-10 relative">
                  <img
                    alt="Mark Dinglasa - Portfolio"
                    src={ProfileImage}
                    className="w-full h-full duration-300 ease-in-out"
                  />
                </div>
              </GlareCard>
            </motion.div>

            {/* Right Bio */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col w-full md:w-1/3 gap-5"
            >
              <p className="text-[15px] text-[#9C9C9C]/80 leading-relaxed">
                My career started with a basic interest in how technology affects
                people's lives, which developed into a profession focused on
                creating meaningful things.
              </p>
              <p className="text-[15px] text-[#9C9C9C]/80 leading-relaxed">
                I have worked on a variety of projects over the years, ranging
                from small-scale tools to large-scale platforms, all of which
                have taught me how to design for{" "}
                <strong className="text-white/80">scalability</strong>,{" "}
                <strong className="text-white/80">performance</strong>, and{" "}
                <strong className="text-white/80">usability</strong>.
              </p>
              <p className="text-[15px] text-[#9C9C9C]/80 leading-relaxed">
                If you're looking for someone who can transform ideas into
                meaningful digital experiences, let's build something amazing
                together.
              </p>
            </motion.div>
          </div>

          {/* Stats Counters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col md:flex-row gap-6 items-center justify-evenly w-full py-20 md:py-28"
          >
            <Counter label="Years of Software Development" initialTarget={3} />
            <Counter initialTarget={60} />
            <Counter initialTarget={12} label="Systems Built" />
          </motion.div>
        </div>
      </section>

      {/* ─── Section 2: Tech Arsenal ─── */}
      <section
        id="tech-stack"
        className="relative flex justify-center items-center md:py-24 py-12 md:px-0 px-4 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none opacity-[0.03] select-none z-0">
          <span className="text-[12rem] md:text-[20rem] font-black uppercase tracking-tighter text-white">
            Stack
          </span>
        </div>

        <div className="w-full md:w-10/12 flex flex-col items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm mb-4">
              My Arsenal
            </span>
            <h1 className="font-bold uppercase overflow-visible text-[2.5rem] md:text-[4rem] leading-tight mb-6">
              Tech Stack
            </h1>
            <p className="text-lg md:text-xl text-[#9C9C9C] max-w-2xl leading-relaxed">
              I've gained proficiency in these technologies through practical
              application rather than merely studying them. Each one is a
              reliable tool that I use to transform difficult challenges into
              elegant, efficient solutions.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex w-full flex-wrap items-center justify-center gap-1"
          >
            {SkillData.map((skill, index) => (
              <Fragment key={"skills-" + index}>
                <Suspense fallback={<SkillSkeleton />}>
                  <Skill Name={skill.name} Logo={skill?.logo} />
                </Suspense>
              </Fragment>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Section 3: Work Experience ─── */}
      <section
        id="experience"
        className="relative flex justify-center items-center md:py-24 py-12 md:px-0 px-4 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center items-center pointer-events-none opacity-[0.03] select-none z-0">
          <span className="text-[12rem] md:text-[20rem] font-black uppercase tracking-tighter text-white">
            Career
          </span>
        </div>

        <div className="w-full md:w-10/12 flex flex-col items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center text-center mb-16"
          >
            <span className="text-primary font-mono tracking-[0.3em] uppercase text-sm mb-4">
              My Journey
            </span>
            <h1 className="font-bold uppercase overflow-visible text-[2.5rem] md:text-[4rem] leading-tight mb-6">
              Experience
            </h1>
            <p className="text-lg md:text-xl text-[#9C9C9C] max-w-2xl leading-relaxed">
              My career path is a story of continuous evolution—from writing my
              first lines of code to architecting full-stack solutions. Each role
              has been a chapter in developing not just my technical skills, but
              my ability to solve real business problems.
            </p>
          </motion.div>

          {/* Milestone Timeline */}
          <div className="relative w-full">
            {/* Continuous vertical line */}
            <div className="absolute left-6 md:left-1/2 md:-translate-x-[0.5px] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#e9c6a9]/40 via-[#e9c6a9]/20 to-transparent" />

            <div className="flex flex-col gap-0">
              {WORK_EXPERIENCE_DATA.map((experience, index) => {
                const isEven = index % 2 === 0;

                return (
                  <motion.div
                    key={"milestone-" + index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.12 }}
                    className="relative flex md:items-center items-start w-full py-8"
                  >
                    {/* ── Milestone dot ── */}
                    <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                      <div className="w-[14px] h-[14px] rounded-full border-2 border-[#e9c6a9]/40 bg-[#161616] flex items-center justify-center group">
                        <div className="w-[6px] h-[6px] rounded-full bg-[#e9c6a9]/60" />
                      </div>
                    </div>

                    {/* ── Desktop: alternating sides ── */}
                    {/* Left spacer or content */}
                    <div
                      className={cn(
                        "hidden md:flex w-1/2 pr-12",
                        isEven ? "justify-end" : "justify-end opacity-0 pointer-events-none"
                      )}
                    >
                      {isEven && (
                        <WorkExperience
                          CompanyLogo={experience.CompanyLogo}
                          CompanyName={experience.CompanyName}
                          ExclusiveDates={experience.ExclusiveDates}
                          JobTitle={experience.JobTitle}
                          Skills={experience.Skills}
                          ClassName="max-w-lg"
                        />
                      )}
                    </div>

                    {/* Right spacer or content */}
                    <div
                      className={cn(
                        "hidden md:flex w-1/2 pl-12",
                        isEven ? "justify-start opacity-0 pointer-events-none" : "justify-start"
                      )}
                    >
                      {!isEven && (
                        <WorkExperience
                          CompanyLogo={experience.CompanyLogo}
                          CompanyName={experience.CompanyName}
                          ExclusiveDates={experience.ExclusiveDates}
                          JobTitle={experience.JobTitle}
                          Skills={experience.Skills}
                          ClassName="max-w-lg"
                        />
                      )}
                    </div>

                    {/* ── Mobile: always right of line ── */}
                    <div className="flex md:hidden pl-16 w-full">
                      <WorkExperience
                        CompanyLogo={experience.CompanyLogo}
                        CompanyName={experience.CompanyName}
                        ExclusiveDates={experience.ExclusiveDates}
                        JobTitle={experience.JobTitle}
                        Skills={experience.Skills}
                      />
                    </div>
                  </motion.div>
                );
              })}

              {/* ── Timeline end marker ── */}
              <div className="relative flex items-center justify-center py-4">
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20">
                  <div className="w-3 h-3 rounded-full bg-[#e9c6a9]/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default memo(AboutPage);
