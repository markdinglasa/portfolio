import { PROJECT, ProjectType } from "@/types";

export type ProjectStatus = "Done" | "Underconstruction";
export interface Project {
  id: number;
  status: ProjectStatus;
  projectType: ProjectType;
  title: string;
  alias: PROJECT;
  link: string;
  thumbnail: string;
  timeframe: string;
  description: string;
  techStack: string[];
  images?: string[];
  role?: string;
  context?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
}

export const JourneyData: Project[] = [
  {
    id: 2,
    status: "Done",
    projectType: "Responsive Web Application",
    title: "SIMS",
    alias: PROJECT.STUDENT_INFORMATION_MANAGEMENT_SYSTEM,
    link: `/projects/d/${PROJECT.STUDENT_INFORMATION_MANAGEMENT_SYSTEM}`,
    techStack: [
      "PHP",
      "Javascript",
      "HTML",
      "CSS",
      "Bootstrap",
      "MySQL",
      "JQuery",
    ],
    thumbnail: "/image/default-image.jpg",
    timeframe: "January 2023 - February 2023",
    description:
      "A streamlined Student Information Management System designed to efficiently store, manage, and retrieve student records, including personal details, academic performance, and enrollment history.",
    role: "Full Stack Developer",
    context:
      "The university was struggling with manual paper-based student records, leading to inefficiencies, lost documents, and difficult retrieval processes during enrollment periods.",
    challenge:
      "We needed to transition a massive volume of physical records into a secure, easily accessible digital format while ensuring that staff with minimal technical background could operate the new system.",
    solution:
      "I designed a straightforward, monolithic architecture using PHP and MySQL. By focusing on a highly intuitive Bootstrap-based UI, I ensured the learning curve for administrative staff was minimal. The database was normalized to handle thousands of concurrent queries during peak enrollment without performance degradation.",
    outcome:
      "Reduced enrollment processing time by 40% and completely eliminated data loss incidents related to paper records.",
  },
  {
    id: 12,
    status: "Underconstruction",
    projectType: "Responsive Web Application",
    title: "Himsog",
    alias: PROJECT.HIMSOG,
    link: `/projects/d/${PROJECT.HIMSOG}`,
    thumbnail: "/image/himsog-banner.jpg",
    description: "Empowering Filipino Lives Through Meal Planning.",
    timeframe: "February 2025 - April 2025",
    techStack: [
      "TypeScript",
      "React JS",
      "Scrapper API",
      "MySQL",
      "Express JS",
      "Node JS",
      "Figma",
    ],
  },
  {
    id: 4,
    status: "Underconstruction",
    projectType: "Responsive Web Application",
    title: "Iskalar",
    alias: PROJECT.ISKALAR,
    link: `/projects/d/${PROJECT.ISKALAR}`,
    thumbnail: "/image/iskalar-banner.png",
    description:
      "An online platform for Government scholar's management and monitoring.",
    timeframe: "March 2023 - April 2023",
    techStack: [
      "PHP",
      "Javascript",
      "HTML",
      "CSS",
      "Bootstrap",
      "MySQL",
      "JQuery",
    ],
  },
  {
    id: 13,
    status: "Done",
    projectType: "Responsive Web Application",
    title: "LandTrax",
    alias: PROJECT.LANDTRAX,
    link: `/projects/d/${PROJECT.LANDTRAX}`,
    thumbnail: "/image/landtrax.png",
    description:
      "LandTrax is a premier one-stop shop service provider for property documentation and registration in the Philippines, designed to simplify the complexities of real estate transactions for clients across the country.",
    timeframe: "February 2026 - June 2026",
    techStack: [
      "Next JS",
      "Nest JS",
      "Tanstack Query",
      "Zod",
      "MSSQL",
      "TypeScript",
      "Docker",
      "Figma",
      "Bedrock",
      "AWS",
      "S3",
      "TypeORM",
      "TailwindCSS",
    ],
    role: "Full Stack Engineer",
    context:
      "Property documentation and registration in the Philippines involve navigating complex bureaucratic processes. LandTrax aims to be a one-stop-shop to streamline these real estate transactions for clients nationwide.",
    challenge:
      "The primary challenge was digitizing a highly paper-based, multi-step legal process. We needed a secure system that could handle extensive document uploads, track complex transaction states, and manage user roles across clients and administrators without sacrificing ease of use.",
    solution:
      "We built a robust monolithic application utilizing Next JS for the frontend and Nest JS for the backend API. By integrating AWS S3 for secure document storage and Bedrock for intelligent processing, we automated significant portions of the workflow. The MSSQL database, managed via TypeORM, ensures strong data integrity for sensitive property records.",
    outcome:
      "Created a scalable digital platform that reduces manual intervention and provides clients with transparent, real-time tracking of their property transactions.",
    images: [
      "/image/landtrax/landing-page.png",
      "/image/landtrax/client-login-page.png",
      "/image/landtrax/client-dashboard.png",
      "/image/landtrax/client-transactions-page.png",
      "/image/landtrax/client-transaction-reports.png",
      "/image/landtrax/client-reports-hub.png",
      "/image/landtrax/client-user-management.png",
      "/image/landtrax/creating-of-payment.png",
      "/image/landtrax/document-library.png",
      "/image/landtrax/document-library-details.png",
      "/image/landtrax/lodgement-uploading-of-requirements.png",
      "/image/landtrax/logement-service-selection.png",
      "/image/landtrax/logement-summary.png",
      "/image/landtrax/payments-and-collection-page.png",
      "/image/landtrax/transaction-details.png",
      "/image/landtrax/transaction-management-page.png",
      "/image/landtrax/admin-dashboards.png",
      "/image/landtrax/admin-reports-hub.png",
      "/image/landtrax/admin-user-managmeent.png",
      "/image/landtrax/audit-trails-page.png",
      "/image/landtrax/email-template-preview-and-edit-page.png",
      "/image/landtrax/entity-code-management-page.png",
      "/image/landtrax/export-widget.png",
      "/image/landtrax/system-settings-manage-notifications.png",
      "/image/landtrax/system-settings-page.png",
      "/image/landtrax/widget-preview.png",
      "/image/landtrax/wiget-customization.png",
    ],
  },
  {
    id: 3,
    status: "Underconstruction",
    projectType: "Responsive Web Application",
    title: "LMS",
    alias: PROJECT.LIBRARY_MANAGEMENT_SYSTEM,
    link: `/projects/d/${PROJECT.LIBRARY_MANAGEMENT_SYSTEM}`,
    thumbnail: "/image/default-image.jpg",
    description: "A simple Library Management System, for University usage",
    timeframe: "February 2023 - February 2023",
    techStack: [
      "PHP",
      "Javascript",
      "HTML",
      "CSS",
      "Bootstrap",
      "MySQL",
      "JQuery",
    ],
  },
  {
    id: 6,
    status: "Underconstruction",
    projectType: "Responsive Web Application",
    title: "GMS",
    alias: PROJECT.GRADE_MANAGEMENT_SYSTEM,
    link: `/projects/d/${PROJECT.GRADE_MANAGEMENT_SYSTEM}`,
    thumbnail: "/image/default-image.jpg",
    description: "An online Grade Management System.",
    timeframe: "July 2023 - October 2023",
    techStack: [
      "PHP",
      "Javascript",
      "HTML",
      "CSS",
      "Bootstrap",
      "MySQL",
      "JQuery",
    ],
  },
  {
    id: 7,
    status: "Underconstruction",
    projectType: "Responsive Web Application",
    title: "iPOS",
    alias: PROJECT.INNOSOFT_POINT_OF_SALES_SYSTEM,
    link: `/projects/d/${PROJECT.INNOSOFT_POINT_OF_SALES_SYSTEM}`,
    thumbnail: "/image/innosoft-banner.png",
    description: "Cloud based innovative Point of Sales System.",
    timeframe: "Septempber 2023 - December 2025",
    techStack: [
      "TypeScript",
      "Cloudinary",
      "React JS",
      "Node JS",
      "Express JS",
      "Aiven Cloud",
      "MySQL",
    ],
  },
  {
    id: 10,
    status: "Done",
    projectType: "Mobile Application",
    title: "Roots & Morphology",
    alias: PROJECT.ROOTS_AND_MORPHOLOGY,
    link: `/projects/d/${PROJECT.ROOTS_AND_MORPHOLOGY}`,
    thumbnail: "/image/rtm-banner.png",
    description:
      "Anatomy and Physiology educators. Introduce scientific terms to your students by way of their Latin and Greek Roots and Morphology. ",
    timeframe: "September 2024 - December 2024",
    techStack: [
      "React Native",
      "React JS",
      "Express JS",
      "Node JS",
      "Javascript",
      "TailwindCSS",
      "MySQL",
      "Aiven Cloud",
      "Figma",
    ],
    role: "Full Stack App Developer",
    context:
      "Medical and scientific students often struggle with memorizing complex terminology. Understanding the Latin and Greek roots of these words provides a foundational way to decode unfamiliar terms.",
    challenge:
      "We needed to create an engaging, mobile-first educational tool that felt modern and fast, while securely syncing a large dictionary of morphological terms across devices.",
    solution:
      "I built the mobile application using React Native to ensure a smooth, native-like experience on both iOS and Android. The backend is powered by Node JS and Express JS, serving data from a MySQL database hosted on Aiven Cloud. TailwindCSS was utilized within the React ecosystem to maintain a consistent, clean design language.",
    outcome:
      "Delivered a comprehensive educational app featuring term lists, volume breakdowns, and bookmarking capabilities to assist students in their studies.",
    images: [
      "/image/rtm/onboarding-step-1.jpeg",
      "/image/rtm/onboarding-step-2.jpeg",
      "/image/rtm/onboarding-step-3.jpeg",
      "/image/rtm/list-of-bookmarks.webp",
      "/image/rtm/list-of-terms-in-cardiovascular-system.webp",
      "/image/rtm/list-of-volumes.webp",
      "/image/rtm/sample-terminology-1.webp",
      "/image/rtm/sample-terminalogy-2.jpeg",
    ],
  },
  {
    id: 9,
    status: "Underconstruction",
    projectType: "Desktop Application",
    title: "iSIA",
    alias: PROJECT.INNOSOFT_SALES_INSIGHT_AND_ANALYTICS,
    link: `/projects/d/${PROJECT.INNOSOFT_SALES_INSIGHT_AND_ANALYTICS}`,
    thumbnail: "/image/innosoft-banner.png",
    description: "POS integrator for Sales reports, Insights and Analytics.",
    timeframe: "June 2024 - September 2024",
    techStack: [
      "Electron JS",
      "TypeScript",
      "React JS",
      "TailwindCSS",
      "MySQL",
    ],
  },
  {
    id: 8,
    status: "Underconstruction",
    projectType: "Desktop Application",
    title: "iTMS",
    alias: PROJECT.INNOSOFT_TICKET_MANAGEMENT_SYSTEM,
    link: `/projects/d/${PROJECT.INNOSOFT_TICKET_MANAGEMENT_SYSTEM}`,
    thumbnail: "/image/innosoft-banner.png",
    description:
      "An efficient iTMS (Ticketing Management System) designed to streamline issue tracking, support requests, and task management.",
    timeframe: "August 2024 - November 2024",
    techStack: [
      "Electron JS",
      "TypeScript",
      "React JS",
      "TailwindCSS",
      "MySQL",
    ],
  },
  {
    id: 5,
    status: "Done",
    projectType: "Mobile Application",
    title: "Lingua",
    alias: PROJECT.LINGUA,
    link: `/projects/d/${PROJECT.LINGUA}`,
    thumbnail: "/image/lingua-banner.jpg",
    description: "An AI Powered Sign Language Interpreter for Android.",
    timeframe: "January 2023 - April 2023",
    techStack: ["JavaScript", "Xamarin", "C#", "Azure Cloud", "Figma"],
    role: "Mobile Developer",
    context:
      "Communication barriers exist between the Deaf or Hard of Hearing community and those who do not understand sign language. Lingua was conceived as a bridge to facilitate seamless, real-time communication.",
    challenge:
      "Processing video input for sign language recognition on a mobile device requires intensive computation. The challenge was to achieve accurate, real-time AI interpretation without draining the device battery or suffering from severe latency.",
    solution:
      "We developed a cross-platform mobile application using Xamarin and C#. To handle the heavy lifting of AI interpretation, we offloaded the machine learning processing to Azure Cloud. The app captures video streams, securely transmits them to our cloud infrastructure for instant sign-to-text and sign-to-voice translation, and returns the result to the UI.",
    outcome:
      "Successfully prototyped a functional Android interpreter capable of two-way communication (sign-to-voice and voice-to-sign) with an intuitive dark-themed interface.",
    images: [
      "/image/lingua/landing-page.png",
      "/image/lingua/primary-dark-loading-state.png",
      "/image/lingua/sign-language-to-text-actuacl-testing.jpg",
      "/image/lingua/sign-language-to-text-interface.png",
      "/image/lingua/sign-language-to-voice-actucal-testing.png",
      "/image/lingua/sign-language-to-voice-interface.png",
      "/image/lingua/turtorial-page.jpg",
      "/image/lingua/tutorials-interface.png",
      "/image/lingua/voice-to-sign-language-interface.png",
    ],
  },
  {
    id: 11,
    status: "Underconstruction",
    projectType: "Responsive Web Application",
    title: "Connex",
    alias: PROJECT.CONNEX,
    link: `/projects/d/${PROJECT.CONNEX}`,
    thumbnail: "/image/connex-banner.png",
    description:
      "A Web-Based Platform for Nurturing Alumni Connections and Success.",
    timeframe: "Septempber 2024 - December 2024",
    techStack: [
      "TypeScript",
      "React JS",
      "TailwindCSS",
      "MSSQL",
      "Express JS",
      "Node JS",
      "Figma",
    ],
  },
  {
    id: 1,
    status: "Done",
    projectType: "Responsive Web Application",
    title: "AMS",
    alias: PROJECT.ATTENDANCE_MONITORING_SYSTEM,
    link: `/projects/d/${PROJECT.ATTENDANCE_MONITORING_SYSTEM}`,
    thumbnail: "/image/default-image.jpg",
    description: "Attendance Monitoring System with Face detection",
    timeframe: "November 2022 - January 2023",
    techStack: [
      "PHP",
      "Javascript",
      "HTML",
      "CSS",
      "Bootstrap",
      "MySQL",
      "JQuery",
      "FaceIO API",
    ],
    images: [
      "/image/sims-demo.gif",
      "/image/330944402_566575652157772_1248992777909342005_n.jpg",
      "/image/329845709_1305378640035266_6087332649173389488_n.jpg",
      "/image/329627148_5982429585157404_8139163752903028699_n-ezgif.com-video-to-gif-converter.gif",
    ],
  },
  {
    id: 14,
    status: "Done",
    projectType: "Responsive Web Application",
    title: "Karaoke Forge",
    alias: PROJECT.KARAOKE_FORGE,
    link: `/projects/d/${PROJECT.KARAOKE_FORGE}`,
    thumbnail: "/image/karaoke-forge.jpeg",
    description:
      "An AI powered tool to create a karaoke video in just a minute",
    timeframe: "June 2026 - June 2026",
    techStack: [
      "Next JS",
      "Python",
      "OpenAI Whisper",
      "TypeScript",
      "TailwindCSS",
      "Ffmpeg-static",
    ],
    role: "AI & Full Stack Developer",
    context:
      "Creating high-quality karaoke videos with perfectly synced lyrics has historically been a tedious, manual process requiring specialized video editing software.",
    challenge:
      "The goal was to automate the extraction of vocals, detection of lyrics, and synchronization of text to audio down to the millisecond, all within a browser-accessible web application.",
    solution:
      "I architected a pipeline utilizing Python and OpenAI Whisper for highly accurate audio transcription and timestamp generation. The frontend, built with Next JS and TailwindCSS, provides an intuitive interface for uploading assets. We integrated FFmpeg-static to handle the final video rendering directly, combining the audio track with the synced lyrical overlays.",
    outcome:
      "Reduced the time required to produce a professional karaoke video from hours to approximately one minute.",
    images: [
      "/image/karaoke-forge/landing-page.png",
      "/image/karaoke-forge/how-it-works.png",
      "/image/karaoke-forge/step-1-uploading-of-assets.png",
      "/image/karaoke-forge/step-2-pasting-lyrics-or-auto-detect-lyrics.png",
      "/image/karaoke-forge/step-2-auto-detection-lyrics-sample.png",
      "/image/karaoke-forge/step-3-video-settings.png",
      "/image/karaoke-forge/step-4-preview-of-karaoke-video.png",
      "/image/karaoke-forge/step-4-generate-and-download.png",
    ],
  },
];
