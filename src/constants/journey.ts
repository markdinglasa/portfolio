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
  imageCategories?: {
    title: string;
    images: string[];
  }[];
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
    techStack: ["PHP", "Apache", "MySQL", "Bootstrap", "Axios"],
    thumbnail: "/image/default-image.jpg",
    timeframe: "January 2023 - February 2023",
    images: [
      "/image/sims-demo.gif",
      "/image/sims/330944402_566575652157772_1248992777909342005_n.jpg",
      "/image/sims/329845709_1305378640035266_6087332649173389488_n.jpg",
      "/image/sims/329627148_5982429585157404_8139163752903028699_n-ezgif.com-video-to-gif-converter.gif",
    ],
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
    status: "Done",
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
    images: [],
    imageCategories: [
      {
        title: "Landing & Public Experience",
        images: [
          "/image/himsog/landing-page.png",
          "/image/himsog/how-it-works.png",
          "/image/himsog/why-choose-himsog.png",
        ]
      },
      {
        title: "Advocate (User) Experience",
        images: [
          "/image/himsog/advocate-onboarding-1.png",
          "/image/himsog/advocate-onboarding-2.png",
          "/image/himsog/advocate-onboarding-3.png",
          "/image/himsog/advocate-onboarding-4.png",
          "/image/himsog/advocate-onboarding-5.png",
          "/image/himsog/advocate-dashboard.png",
          "/image/himsog/advocate-meal-plans.png",
          "/image/himsog/advocate-available-meal-plans.png",
          "/image/himsog/advocate-avaiable-nutritionists.png",
          "/image/himsog/meals.png",
          "/image/himsog/messenger.png",
          "/image/himsog/notifications.png",
        ]
      },
      {
        title: "Nutritionist Portal",
        images: [
          "/image/himsog/nutritionist-dashboard.png",
          "/image/himsog/nutritionist-meal-plans.png",
          "/image/himsog/nutritionist-meal-plan-details.png",
          "/image/himsog/nutritionist-meal-details.png",
          "/image/himsog/nutritionist-personalize-plans.png",
          "/image/himsog/nutritionist-request-details.png",
          "/image/himsog/nutritionist-transactions.png",
          "/image/himsog/nutritionist-payments.png",
          "/image/himsog/nutritionists-subscription.png",
          "/image/himsog/nutritionist-settings-personal.png",
          "/image/himsog/nutritionist-settings-professional-credentials.png",
          "/image/himsog/nutritionist-settings-security.png",
        ]
      },
      {
        title: "Admin Command Center",
        images: [
          "/image/himsog/admin-dashboard.png",
          "/image/himsog/admin-meal-plans.png",
          "/image/himsog/admin-meal-plan-details.png",
          "/image/himsog/user-managment.png",
          "/image/himsog/user-details.png",
          "/image/himsog/subcription-managmeent.png",
          "/image/himsog/create-subscription.png",
          "/image/himsog/report-subscriptions.png",
          "/image/himsog/report-users.png",
        ]
      }
    ],
    role: "Full Stack Developer",
    context:
      "Meal planning can be incredibly time-consuming and difficult for families or individuals trying to maintain a balanced, healthy diet while managing busy schedules.",
    challenge:
      "We needed to create an intelligent system capable of suggesting culturally relevant (Filipino) meals, tracking nutritional information, and generating dynamic grocery lists based on diverse user preferences and dietary restrictions.",
    solution:
      "I developed a web application utilizing React JS for an engaging frontend and Express/Node JS for a robust backend. The platform integrates a Scrapper API to constantly source new recipes and nutritional data, which is then stored efficiently in a MySQL database. Figma was used to prototype a user-friendly, appetizing interface.",
    outcome:
      "Delivered a comprehensive platform that significantly reduces the friction of daily meal preparation and encourages healthier eating habits.",
  },
  {
    id: 4,
    status: "Done",
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
    role: "Full Stack Developer",
    context:
      "Government scholarship programs often rely on disparate databases and paper trails, making it incredibly difficult to monitor scholar progress, disburse funds, and track program efficacy.",
    challenge:
      "The challenge was building a centralized, highly secure portal that could handle sensitive government data, allow scholars to submit their grades, and enable administrators to efficiently audit and approve disbursements.",
    solution:
      "I engineered a custom web portal utilizing a traditional LAMP stack (PHP, MySQL). We leaned on Bootstrap and jQuery to build a highly responsive, accessible dashboard interface that works reliably on legacy government hardware as well as modern scholar devices. The database was optimized to generate complex demographic and academic reports instantly.",
    outcome:
      "Standardized the scholarship tracking process, leading to faster stipend disbursements and vastly improved administrative oversight.",
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
    status: "Done",
    projectType: "Responsive Web Application",
    title: "LMS",
    alias: PROJECT.LIBRARY_MANAGEMENT_SYSTEM,
    link: `/projects/d/${PROJECT.LIBRARY_MANAGEMENT_SYSTEM}`,
    thumbnail: "/image/default-image.jpg",
    description: "A simple Library Management System, for University usage",
    timeframe: "February 2023 - February 2023",
    techStack: ["PHP", "Apache", "MySQL", "Bootstrap", "Axios"],
    role: "Full Stack Developer",
    context:
      "University libraries manage tens of thousands of assets, from textbooks to digital media. Relying on outdated desktop software leads to long queues, lost inventory, and frustrated students.",
    challenge:
      "The goal was to build a modern, web-based catalog system that could handle high-concurrency searches, seamless borrowing/returning workflows, and automated penalty tracking for overdue items.",
    solution:
      "I built the system using PHP and MySQL, served via Apache. To ensure the interface felt snappy and modern without full page reloads, I integrated Axios for asynchronous API calls. Bootstrap was utilized to ensure the application was fully responsive, allowing students to check book availability from their mobile phones.",
    outcome:
      "Dramatically reduced the time required for book checkout and modernized the university's asset tracking capabilities.",
  },
  {
    id: 6,
    status: "Done",
    projectType: "Responsive Web Application",
    title: "GMS",
    alias: PROJECT.GRADE_MANAGEMENT_SYSTEM,
    link: `/projects/d/${PROJECT.GRADE_MANAGEMENT_SYSTEM}`,
    thumbnail: "/image/default-image.jpg",
    description: "An online Grade Management System.",
    timeframe: "July 2023 - October 2023",
    techStack: ["PHP", "Apache", "MySQL", "Bootstrap", "Axios"],
    role: "Full Stack Developer",
    context:
      "Managing academic grading at scale is a critical, error-sensitive operation. Faculty needed a reliable, accessible way to input, calculate, and distribute grades securely.",
    challenge:
      "We had to design an architecture that prevented unauthorized grade modifications, supported complex weighted grading formulas, and provided students with real-time access to their academic standing.",
    solution:
      "The Grade Management System was engineered with a PHP backend and MySQL database, utilizing Apache. By adopting Axios on the frontend alongside Bootstrap, we created a seamless spreadsheet-like data entry experience for professors that autosaves securely. Strict role-based access control was implemented at the API level.",
    outcome:
      "Eliminated grade calculation errors and provided faculty with a secure, efficient toolset that streamlined the end-of-semester administrative rush.",
  },
  {
    id: 7,
    status: "Done",
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
    role: "Lead Full Stack Developer",
    context:
      "Modern retail environments demand fast, reliable, and cloud-synchronized point-of-sale systems. Traditional legacy POS systems are often siloed, making multi-store management a nightmare.",
    challenge:
      "The system needed to process transactions instantly, handle complex inventory syncing across multiple branches, and operate flawlessly even during brief network interruptions.",
    solution:
      "I architected a cloud-first POS using React JS for a highly responsive, app-like frontend and Node/Express JS for the API. We utilized MySQL hosted on Aiven Cloud for robust, scalable data management, and integrated Cloudinary for seamless product image handling. The use of TypeScript across the entire stack ensured extreme type safety and reduced runtime errors.",
    outcome:
      "Delivered an innovative, cloud-based POS that empowers business owners with real-time multi-branch visibility and lightning-fast checkout experiences.",
    imageCategories: [
      {
        title: "Landing & Onboarding",
        images: [
          "/image/ipos/landing-page.png",
          "/image/ipos/pos-solutions.png",
          "/image/ipos/data-privacy.png",
          "/image/ipos/onboarding-1.png",
          "/image/ipos/onboarding-2.png",
          "/image/ipos/onboarding-3.png",
          "/image/ipos/onboarding-4.png",
          "/image/ipos/login-page.png",
        ]
      },
      {
        title: "Dashboard & Administration",
        images: [
          "/image/ipos/dashboard.png",
          "/image/ipos/admin-dashboard.png",
          "/image/ipos/admin-profile-verification.png",
        ]
      }
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
    status: "Done",
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
      "MSSQL",
    ],
    role: "Desktop Application Developer",
    context:
      "While a cloud POS handles transactions, business owners need deep, offline-capable analytical tools to extract meaningful insights from massive amounts of historical sales data.",
    challenge:
      "Processing and visualizing millions of transaction rows in a web browser can cause performance bottlenecks. The client required a powerful desktop utility to integrate with their POS and run heavy analytical computations locally.",
    solution:
      "I engineered a cross-platform desktop application using Electron JS. By combining the power of local machine resources with a modern React JS and TailwindCSS interface, the application can securely pull data from MSSQL and generate complex graphical reports, heatmaps, and sales forecasts without stuttering.",
    outcome:
      "Provided enterprise clients with a powerful desktop command center that turns raw sales data into actionable business intelligence.",
  },
  {
    id: 8,
    status: "Done",
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
      "MSSQL",
    ],
    role: "Desktop Application Developer",
    context:
      "IT departments and customer support teams require highly responsive issue-tracking systems that integrate deeply with their desktop environments for notifications and quick access.",
    challenge:
      "Web-based ticketing systems often get lost in browser tabs. We needed a dedicated desktop client that could handle real-time ticket updates, robust search capabilities, and complex workflow states.",
    solution:
      "I built the Ticketing Management System as a standalone Electron JS application. Leveraging React JS and TypeScript, I created a highly organized, drag-and-drop enabled interface styled with TailwindCSS. The system connects to a central MSSQL database to ensure all team members stay synced on issue resolutions.",
    outcome:
      "Streamlined the support pipeline, significantly reducing average ticket response times and improving team accountability.",
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
    status: "Done",
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
    role: "Full Stack Developer",
    context:
      "Educational institutions struggle to maintain meaningful, active connections with their alumni after graduation, often missing out on networking, mentoring, and fundraising opportunities.",
    challenge:
      "We needed to build a modern, engaging social platform that encouraged alumni to register, update their professional profiles, and interact with the university and each other securely.",
    solution:
      "I developed Connex using a modern stack consisting of React JS and TailwindCSS for a beautiful, intuitive user interface. The robust backend was built with Node/Express JS and connected to an enterprise-grade MSSQL database to ensure the secure handling of sensitive professional data and communication logs.",
    outcome:
      "Fostered a thriving digital community that successfully bridged the gap between past graduates and the institution's current initiatives.",
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
    techStack: ["PHP", "Apache", "MySQL", "Bootstrap", "Axios", "FaceIO API"],
    role: "Full Stack Developer",
    context:
      "Traditional attendance systems using RFID or manual sign-ins are prone to 'buddy punching' and human error, leading to inaccurate time tracking and payroll discrepancies.",
    challenge:
      "The objective was to implement a highly secure, frictionless attendance system that utilized biometric verification without requiring the purchase of expensive proprietary hardware.",
    solution:
      "I built a web-based attendance terminal using PHP, Apache, and MySQL. I integrated the FaceIO API to provide instant, highly accurate facial recognition directly through standard webcams. The frontend was constructed with Bootstrap for a clean UI and Axios to handle the asynchronous API payloads required for rapid face verification.",
    outcome:
      "Completely eliminated attendance fraud and modernized the time-tracking workflow with cutting-edge biometric integration.",
    images: [],
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
