import { PROJECT, ProjectType } from "@/types";

type ProjectStatus = "Done" | "Underconstruction";
interface Project {
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
  stages: {
    stage: number;
    title: string;
    objective?: string;
    details: string[];
    image?: string;
  }[];
  demo: {
    title: string;
    description: string;
    image: string;
    className: string;
  }[];
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
    demo: [
      {
        title: "Brief demo",
        description: "a short demo for client viewing",
        image: "/image/sims-demo.gif",
        className: "md:col-span-2 ",
      },
      {
        title: "Sample report",
        description: "A sample printed report of the client",
        image: "/image/330944402_566575652157772_1248992777909342005_n.jpg",
        className: "md:col-span-1 ",
      },
      {
        title: "Sample student information",
        description: "a sample printed student information of the client.",
        image: "/image/329845709_1305378640035266_6087332649173389488_n.jpg",
        className: "md:col-span-1 ",
      },
      {
        title: "A brief student profile client testing",
        description: "a short demonstration of the student creation.",
        image:
          "/image/329627148_5982429585157404_8139163752903028699_n-ezgif.com-video-to-gif-converter.gif",
        className: "md:col-span-2 ",
      },
    ],
    stages: [
      {
        stage: 1,
        title: "The Discovery: Uncovering the Frustration",
        image: "/image/pexels-cottonbro-6803551.jpg",
        objective:
          "To move beyond the initial idea and understand the real human problem we needed to solve.",
        details: [
          "Our journey began with a group of ambitious university students, brimming with a visionary idea to transform campus life. They saw their peers and professors struggling daily with a common frustration: essential information was scattered across countless portals, emails, and flyers, making simple tasks needlessly complicated.",
          "Their dream was to build a central academic hub—a 'Wiki-University'. They envisioned a single, reliable source for everything from course catalogs and department details to student profiles and class lists. However, while their vision was crystal clear, they faced a daunting roadblock: they had the blueprint but not the tools to build it.",
          "Their challenge wasn't a lack of creativity, but a gap in technical capacity. They needed a partner to architect a secure system that could serve students, teachers, and administrators with different levels of access, all while transforming their innovative concept into a robust, functional platform that could genuinely reduce the campus-wide frustration they had identified.",
        ],
      },
      {
        stage: 2,
        title: "The Strategy: Architecting the Blueprint Against the Clock",
        objective:
          "To craft a robust, scalable plan that balanced their ambitious vision with a demanding deadline.",
        image: "/image/pexels-cottonbro-3201781.jpg",
        details: [
          "The university-students presented me with a formidable challenge: to be their technical partner and help bring their vision to life. The catch? Their academic timeline demanded a fully functional platform in just two weeks.",
          "Faced with this tight deadline, my first priority was strategic planning. I conducted a deep-dive into their feature list, meticulously mapping every function and user interaction. To deliver a high-quality product on time, I proposed a lean, battle-tested tech stack: PHP, Bootstrap, jQuery, and MySQL. This decision was intentional—it allowed me to leverage proven, reusable components from my past projects without sacrificing stability, ensuring we could build fast without cutting corners.",
          "With the 'how' defined, I moved to architect the foundation. I designed the core database schema to efficiently handle students, courses, and departments, and mapped out the critical user flows for each role. Finally, I synthesized our entire strategy into a clear project summary and agreement, aligning our vision and setting the stage for a focused, rapid build.",
        ],
      },
      {
        stage: 3,
        title: "The Build: Precision Under Pressure",
        objective:
          "To transform our carefully crafted blueprint into a robust, functional platform while navigating unexpected challenges.",
        image: "/image/pexels-pluyar-924676.jpg",
        details: [
          "The morning after our strategy session, I began with a thorough review of our documentation. One crucial question emerged - hosting infrastructure. A quick clarification needed to be confirmed if they needed full deployment, then I immediately began architecting the codebase.",
          "As a fourth-year student balancing academics, I dedicated my evenings to focused development sessions. By that first night, I had constructed the core framework of the Student Information Management System. Understanding their need for visibility, I maintained transparent communication through progress screenshots and video updates, regularly sharing milestones as they checked in every other day.",
          "Throughout the week, we navigated minor design revisions and feature adjustments - all manageable within our aggressive timeline. After seven intense days of development, we reached the 60% completion mark. Then, a new challenge emerged: my internship program began, dramatically compressing my available development hours.",
          "The pressure intensified when, walking home from internship duties, I received a message requesting an accelerated delivery - moving the deadline up by nearly a day. Despite the mounting constraints, I maintained professional composure. I communicated clearly that while I couldn't make firm promises, I would dedicate every available moment to meet their new timeline.",
          "Through strategic time management and focused late-night coding sessions, I delivered the completed platform exactly on-time. The client expressed genuine satisfaction with the result, bringing us to our final crucial phase: ensuring every component functioned flawlessly through rigorous testing.",
        ],
      },
      {
        stage: 4,
        title: "The Final Mile: Validation and Empowerment",
        objective:
          "To ensure a reliable system, successful adoption, and empower the client for long-term success.",
        image: "/image/pexels-thisisengineering-3862149.jpg",
        details: [
          "On the day of completion, I conducted rigorous final testing, validating every feature against our requirements. We scheduled a user-acceptance meeting where the clients would experience the system firsthand and put it through its paces.",
          "Despite their location being quite distant from the city, I ensured a professional setting by waiting at a quiet café, prepared for our crucial session. When they arrived, we exchanged warm greetings and immediately began the demonstration - a moment of truth after weeks of intense effort.",
          "I guided them through each feature and functionality, occasionally navigating sidetrack conversations while gracefully steering us back to the core training. The demonstration evolved into a comprehensive onboarding session where I explained operational workflows and prepared them for various scenarios they might encounter.",
          "After thorough exploration and testing, they found no critical issues and expressed complete satisfaction with the delivered platform. The project was officially completed and handed over. Following the successful transfer, I received the full payment - not just compensation for work done, but validation of the sleepless nights and relentless dedication poured into making their vision a reality.",
        ],
      },
      {
        stage: 5,
        title: "Epilogue: Lessons Forged in Fire",
        image: "/image/pexels-j-mt_photography-628996-3680094.jpg",
        details: [
          "This project became my crucible of growth. The tight timeline taught me strategic planning under pressure, while the accelerated deadline mid-internship forced masterful time management. I learned that transparency in communication builds trust even when delivering difficult news.",
          "The distance challenge reinforced that professionalism means meeting clients where they are - both literally and figuratively. Most importantly, I discovered that technical skill must be paired with emotional intelligence; keeping calm under pressure and maintaining client relationships matter as much as writing perfect code.",
          "This experience transformed me from a student developer into a professional problem-solver, proving that constraints often breed the most innovative solutions and that perseverance, coupled with clear communication, can turn overwhelming challenges into triumphant successes.",
        ],
      },
    ],
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
    stages: [
      {
        stage: 1,
        title: "",
        objective: "",
        details: [],
      },
    ],
    demo: [],
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
    stages: [
      {
        stage: 1,
        title: "",
        objective: "",
        details: [],
      },
    ],
    demo: [],
  },
  {
    id: 13,
    status: "Underconstruction",
    projectType: "Responsive Web Application",
    title: "Secret Parfum",
    alias: PROJECT.SECRET_PARFUM,
    link: `/projects/d/${PROJECT.SECRET_PARFUM}`,
    thumbnail: "/image/laravel_4.png",
    description: "A secret scent you wont forget",
    timeframe: "October 2025 - January 2025",
    techStack: [],
    stages: [
      {
        stage: 1,
        title: "",
        objective: "",
        details: [],
      },
    ],
    demo: [],
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
    stages: [
      {
        stage: 1,
        title: "",
        objective: "",
        details: [],
      },
    ],
    demo: [],
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
    stages: [
      {
        stage: 1,
        title: "",
        objective: "",
        details: [],
      },
    ],
    demo: [],
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
    stages: [
      {
        stage: 1,
        title: "",
        objective: "",
        details: [],
      },
    ],
    demo: [],
  },
  {
    id: 10,
    status: "Underconstruction",
    projectType: "Mobile Application",
    title: "Roots & Morphology",
    alias: PROJECT.ROOTS_AND_MORPHOLOGY,
    link: `/projects/d/${PROJECT.ROOTS_AND_MORPHOLOGY}`,
    thumbnail: "/image/rtm-banner.png",
    description:
      "Anatomy and Physiology educators. Introduce scientific terms to your students by way of their Latin and Greek Roots and Morphology. ",
    timeframe: "Septempber 2024 - December 2024",
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
    stages: [
      {
        stage: 1,
        title: "",
        objective: "",
        details: [],
      },
    ],
    demo: [],
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
    stages: [
      {
        stage: 1,
        title: "",
        objective: "",
        details: [],
      },
    ],
    demo: [],
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
    stages: [
      {
        stage: 1,
        title: "",
        objective: "",
        details: [],
      },
    ],
    demo: [],
  },
  {
    id: 5,
    status: "Underconstruction",
    projectType: "Mobile Application",
    title: "Lingua",
    alias: PROJECT.LINGUA,
    link: `/projects/d/${PROJECT.LINGUA}`,
    thumbnail: "/image/lingua-banner.jpg",
    description: "An AI Powered Sign Language Interpreter for Android.",
    timeframe: "January 2023 - April 2023",
    techStack: ["JavaScript", "Xamarin", "C#", "Azure Cloud", "Fimga"],
    stages: [
      {
        stage: 1,
        title: "",
        objective: "",
        details: [],
      },
    ],
    demo: [
      {
        title: "Application Process Flow",
        description: "A client given application process-flow",
        image: "/image/345832210_787914325914295_4769016543718427534_n.png",
        className: "md:col-span-1 ",
      },
      {
        title: "Lingua Interface",
        description:
          "The application simple chat interface for communation for abled and disabled person",
        image: "/image/345947042_245352481376029_6187819857753128108_n.jpg",
        className: "md:col-span-1 ",
      },
      {
        title: "Client Testing",
        description: "A simple try-out of the client for simple testing",
        image: "/image/344169983_904597010615706_5509447302410151114_n.jpg",
        className: "md:col-span-1 ",
      },
      {
        title: "Sign Language Turorials",
        description: "A list of sign-language tutorial for abled-person",
        image: "/image/345887010_1298170644468879_4214142062166137543_n.jpg",
        className: "md:col-span-1 ",
      },
      {
        title: "Application Flowchart",
        description: "A draft of detailed application flowchart",
        image: "/image/346104648_792199252341601_4142304619976887552_n.png",
        className: "md:col-span-2 ",
      },
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
    stages: [
      {
        stage: 1,
        title: "",
        objective: "",
        details: [],
      },
    ],
    demo: [],
  },
  {
    id: 1,
    status: "Underconstruction",
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
    stages: [
      {
        stage: 1,
        title: "The Discovery:",
        image: "/image/pexels-cottonbro-6803551.jpg",
        objective:
          "To move beyond the initial idea and understand the real human problem we needed to solve.",
        details: [],
      },
      {
        stage: 2,
        title: "The Strategy: Architecting the Blueprint Against the Clock",
        objective:
          "To craft a robust, scalable plan that balanced their ambitious vision with a demanding deadline.",
        image: "/image/pexels-cottonbro-3201781.jpg",
        details: [],
      },
      {
        stage: 3,
        title: "The Build: Precision Under Pressure",
        objective:
          "To transform our carefully crafted blueprint into a robust, functional platform while navigating unexpected challenges.",
        image: "/image/pexels-pluyar-924676.jpg",
        details: [],
      },
      {
        stage: 4,
        title: "The Final Mile:",
        objective:
          "To ensure a reliable system, successful adoption, and empower the client for long-term success.",
        image: "/image/pexels-thisisengineering-3862149.jpg",
        details: [],
      },
      {
        stage: 5,
        title: "Epilogue: ",
        image: "/image/pexels-j-mt_photography-628996-3680094.jpg",
        details: [],
      },
    ],

    demo: [
      {
        title: "Brief demo",
        description: "a short demo for client viewing",
        image: "/image/sims-demo.gif",
        className: "md:col-span-2 ",
      },
      {
        title: "Sample report",
        description: "A sample printed report of the client",
        image: "/image/330944402_566575652157772_1248992777909342005_n.jpg",
        className: "md:col-span-1 ",
      },
      {
        title: "Sample student information",
        description: "a sample printed student information of the client.",
        image: "/image/329845709_1305378640035266_6087332649173389488_n.jpg",
        className: "md:col-span-1 ",
      },
      {
        title: "A brief student profile client testing",
        description: "a short demonstration of the student creation.",
        image:
          "/image/329627148_5982429585157404_8139163752903028699_n-ezgif.com-video-to-gif-converter.gif",
        className: "md:col-span-2 ",
      },
    ],
  },
];
