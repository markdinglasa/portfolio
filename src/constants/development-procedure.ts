import { DevelopmentProcedure } from "@/types";
import {
  mdiFileCodeOutline,
  mdiFileFindOutline,
  mdiOrderBoolAscendingVariant,
  mdiRocketLaunchOutline,
  mdiStrategy,
} from "@mdi/js";

export const DevelopmentProcedureData: DevelopmentProcedure[] = [
  {
    phase: "Phase 1",
    title: "Analysis",
    alias: "Discover & Business Analysis",
    objective: "To fully understand the 'Why' before the 'How.'",
    icon: mdiFileFindOutline,
    //description: "The client initially wanted a simple booking form, but through our Discovery phase, we identified the core issue was a fragmented customer journey. Our new goal became creating an integrated booking and payment system.",
    activity: [
      {
        title: "Stakeholder Interviews",
        description:
          "We collaborate with the client the business goals, target audience, and key challenges. What kind of problem we're going to solve?",
        //"I sit down with you to understand your business goals, target audience, and key challenges. What problem are we really solving?",
      },
      {
        title: "Problem Definition",
        description: `Collaboratively refine the core problem. (e.g., "We need to reduce manual data entry for our sales team by 50%" is better than "We need a CRM.").`,
      },
      {
        title: "Competitive & Market Analysis",
        description: `We research the client's competitors and industry standards to identify opportunities and pitfalls.`,
      },
      {
        title: "Success Metrics",
        description: `We define what success looks like with clear, measurable KPIs (Key Performance Indicators).`,
      },
    ],
  },

  {
    phase: "Phase 2",
    title: "Planning",
    alias: "Strategic Planning & Architecture",
    objective: "To build a robust, scalable blueprint.",
    icon: mdiStrategy,
    // description: "",
    activity: [
      {
        title: "Feature Prioritization",
        description:
          "Ceate a feature list and prioritize it using a framework like MoSCoW (Must-have, Should-have, Could-have, Won't-have) for a clear MVP (Minimum Viable Product).",
      },
      {
        title: "Technology Selection",
        description:
          "Propose the tech stack (Frontend, Backend, Database, APIs) and justify my choices based on the project's needs (scalability, performance, team skills, budget).",
      },
      {
        title: "System Design & Data Modeling",
        description:
          "We outline the system architecture, database schema, and key user flows. This is the technical blueprint.",
      },
      {
        title: "Project Roadmap & Timeline",
        description:
          "Break down the project into clear sprints or phases with deliverable milestones.",
      },
    ],
  },

  {
    phase: "Phase 3",
    title: "Development",
    alias: "Agile Development & Iteratative Build",
    objective: "To transform the plan into a high-quality, functional product.",
    icon: mdiFileCodeOutline,
    // description: "",
    activity: [
      {
        title: "Sprint Planning",
        description:
          "Work in short, focused cycles (sprints) to build features incrementally.",
      },
      {
        title: "Full-Stack Implementation",
        description:
          "This is where we code—building the frontend user interfaces, backend APIs, and database interactions.",
      },
      {
        title: "Version Control & Collaboration",
        description:
          "Utilizes Git for all code, with clear commit messages and branch management, allowing for transparent collaboration.",
      },
      {
        title: "Continuous Integration/Deployment (CI/CD)",
        description:
          "Set up automated pipelines to test and deploy code, ensuring stability.",
      },
      {
        title: "Transparent Communication",
        description:
          "We update the client regularly (weekly), demos, and have access to staging environments to see progress in real-time.",
        //"The client would receive regular updates (weekly), demos, and have access to staging environments to see progress in real-time.",
      },
    ],
  },

  {
    phase: "Phase 4",
    title: "Testing",
    alias: "Rigorous Testing & Deployment",
    objective: "To ensure a reliable and secure launch.",
    icon: mdiOrderBoolAscendingVariant,
    //description: "",
    activity: [
      {
        title: "Comprehensive Testing",
        description:
          "We conduct multiple layers of testing like Unit Testing, Integration Testing, End-to-End Testing, User Acceptance Testing.",
      },
      {
        title: "Performance & Security Audit",
        description:
          "We optimizes the load times and conduct security checks before going live.",
      },
      {
        title: "Production Deployment",
        description:
          "We manage the deployment process to a live server (e.g., AWS, Vercel, Heroku) with minimal downtime.",
      },
    ],
  },

  {
    phase: "Phase 5",
    title: "Launch",
    alias: "Launching and OnBoarding",
    objective:
      "To ensure successful adoption and empower the client for long-term success",
    icon: mdiRocketLaunchOutline,
    // description: "",
    activity: [
      {
        title: "Final Delivery & Go-Live Support",
        description:
          "We manage the final launch sequence and on standby to ensure a smooth Day One experience, handling any immediate post-launch hiccups.",
      },
      {
        title: "Creation of Onboarding Materials",
        description:
          "We don't just deliver code; We deliver understanding. For instance Admin & User Training Sessions, Custom Documentation (easy-to-understand guides and manuals), Video Tutorials.",
      },
      {
        title: "Knowledge Transfer Session",
        description:
          "A dedicated meeting where we'll walk your technical team through the architecture, codebase, and deployment process, ensuring they feel confident to take over.",
      },
      {
        title: "Handoff of Assets & Access",
        description:
          "Organized delivery of all source code, design assets, database credentials, and server access.",
      },
      {
        title: "Transition to Support",
        description:
          "We establish a clear plan for ongoing maintenance, whether that's a formal support retainer, a handoff to an internal team, or guidance on how to manage it.",
      },
    ],
  },
];
