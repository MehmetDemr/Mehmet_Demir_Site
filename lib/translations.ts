//languages
export const languages = [
  { code: "tr", label: "Türkçe" },
  { code: "en", label: "English" },
] as const;

//header translations
export const navTranslations = {
  tr: {
    skills: "Yetenekler",
    experience: "Deneyim",
    education: "Eğitim",
    projects: "Projelerim",
    about: "Hakkımda",
    contact: "İletişim",
    resume: "Özgeçmiş",
    services: "Hizmetler",
  },
  en: {
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    projects: "My Projects",
    about: "About",
    contact: "Contact",
    resume: "Resume",
    services: "Services",
  },
} as const;

//footer translations

export const footerTranslations = {
  tr: {
    role: "Full-Stack Geliştirici",
    rights: "Tüm hakları saklıdır.",
  },
  en: {
    role: "Full-Stack Developer",
    rights: "All rights reserved.",
  },
} as const;

//body translations

export const bodyTranslations = {
  en: {
    // Hero Section
    hero: {
      tag: "Full-Stack Developer",
      heading: "Developing modern\nfull-stack architecture",
      role: "Full-Stack Developer • Mehmet Demir",
      description:
        "I build scalable and high-performance web applications using {Node.js}, {Express.js}, {NestJs}, {C#/.NET}, {React}, {Next.js}, focusing on robust backend architecture, clean frontend systems, and efficient, maintainable development workflows.",
      highlights: ["Node.js", "Express.js", "C#/.NET", "React", "Next.js"],
      btnExplore: "Explore My Experience",
      btnContact: "Contact Me",
    },

    // Stats Bar
    stats: {
      experience: { num: "3+", label: "Years of Experience" },
      technologies: { num: "30+", label: "Technologies" },
      projects: { num: "20+", label: "Projects" },
    },

    // Skills Section
    skills: {
      tag: "Expertise",
      title: "Core Technologies",
      description:
        "A comprehensive and well-balanced stack covering backend engineering, frontend architecture, database design, and cloud infrastructure, enabling the development of scalable, high-performance, and production-ready applications.",
      categories: {
        Backend: [
          { name: "C#", color: "#239120" },
          { name: "ASP.NET", color: "#512BD4" },
          { name: "Node.js", color: "#339933" },
          { name: "Express.js", color: "#8b949e" },
          { name: "NestJS", color: "#E0234E" },
          { name: "Java", color: "#007396" },
          { name: "Docker", color: "#F7DF1E" },
          { name: "REST API", color: "#00d9a3" },
          { name: "GraphQL", color: "#673DE6" },
        ],
        Frontend: [
          { name: "React", color: "#61DAFB" },
          { name: "Next.js", color: "#8b949e" },
          { name: "TypeScript", color: "#007ACC" },
          { name: "JavaScript", color: "#F7DF1E" },
          { name: "HTML5", color: "#E34F26" },
          { name: "CSS3", color: "#1572B6" },
          { name: "jQuery", color: "#0769AD" },
          { name: "Tailwind CSS", color: "#06B6D4" },
          { name: "Bootstrap", color: "#7952B3" },
        ],
        Database: [
          { name: "PostgreSQL", color: "#4169E1" },
          { name: "MySQL", color: "#4479A1" },
          { name: "SQL Server", color: "#CC2927" },
          { name: "MongoDB", color: "#47A248" },
        ],
        "Cloud & Tools": [
          { name: "AWS", color: "#FF9900" },
          { name: "Git", color: "#F05032" },
          { name: "Hostinger", color: "#673DE6" },
          { name: "Vercel", color: "#61DAFB" },
          { name: "Railway", color: "#512BD4" },
          { name: "Supabase", color: "#3ECF8E" },
          { name: "Render", color: "#46E3B7" },
          { name: "Google Tag Manager", color: "#007ACC" },
          { name: "Google Cloud (OAuth)", color: "#7952B3" },
          { name: "Apple Sign In (OAuth)", color: "#E0234E" },
        ],
      },
    },

    // Experience Section
    experience: {
      tag: "Career",
      title: "Professional Experience",
      description:
        "Proven hands-on experience across internships, part-time, and full-time full-stack development roles, delivering real-world solutions and contributing to production-level systems.",
      activeBadge: "Active Role",
      items: [
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Full Time",
          period: "Februrary 2026 — May 2026",
          current: false,
        },
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Part Time",
          period: "August 2025 — Februrary 2026",
          current: false,
        },
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Intern",
          period: "June 2025 — July 2025",
          current: false,
        },
        {
          company: "Ottopus A.Ş",
          role: "Full-Stack Developer",
          type: "Intern",
          period: "July 2024 — June 2025",
          current: false,
        },
      ],
    },

    // Education Section
    education: {
      tag: "Education",
      title: "Academic Background",
      items: [
        {
          school: "İzmir Bakırçay University",
          period: "2022 — 2026",
        },
        {
          school: "Fatma Saygın Anadolu High School",
          period: "2017 — 2021",
        },
      ],
    },

    // About Section
    about: {
      tag: "About",
      title: "About Me",
      subtitle: "Full-Stack Developer Overview",
      items: [
        {
          title: "Who is Full-Stack Developer Mehmet Demir?",
          content: `I am Full-Stack Developer Mehmet Demir with a degree in Computer Engineering from Bakırçay University. My expertise includes modern web technologies, mobile application development, and SQL-based database design. Over the past 3+ years, I have successfully developed and delivered multiple projects, working both individually and within dynamic teams. I am passionate about building high-performance, scalable, and user-centric solutions, and I continuously strive to expand my knowledge in emerging technologies.`,
        },
        {
          title: "Front-End Development Expertise",
          content:
            "I specialize in front-end development using HTML, CSS, JavaScript, React, and Next.js, crafting scalable, high-performance, and visually engaging user interfaces that deliver a seamless user experience.",
        },
        {
          title: "Back-End Development Expertise",
          content:
            "I develop back-end systems using Node.js, Express.js, NestJs, and C#/.NET, designing scalable architectures and high-performance APIs with a strong emphasis on maintainability, security, and clean code practices.",
        },
        {
          title: "Mobile Development Expertise",
          content:
            "In mobile application development, I mainly work with React Native, leveraging its close alignment with React to develop applications faster and more efficiently while maintaining a consistent development experience.",
        },
        {
          title: "DevOps & Cloud Expertise",
          content: `I focus on using modern platforms to build, deploy, and manage real-world applications efficiently. I have hands-on experience with AWS services such as EC2, RDS, Amplify, and Route 53, enabling me to develop scalable cloud-based systems.\n\nI also use platforms like Vercel and Hostinger for fast and reliable deployments. Additionally, I rely on Git-based workflows to safely update live applications, ensuring stability, continuous delivery, and minimal downtime.`,
        },
      ],
    },

    // Contact Section
    contact: {
      tag: "Contact",
      title: "Let's Contact",
      description:
        "Available for collaborations, full-time opportunities, and meaningful product work.",
      email: "demirmehmet226648@gmail.com",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  tr: {
    // Hero Section
    hero: {
      tag: "Full-Stack Geliştirici",
      heading: "Modern full-stack\n mimari geliştirme",
      role: "Full-Stack Geliştirici • Mehmet Demir",
      description:
        "{Node.js}, {Express.js}, {NestJs}, {C#/.NET}, {React}, {Next.js} kullanarak; ölçeklenebilir ve yüksek performanslı web uygulamaları geliştiriyor; güçlü backend mimarisine, temiz frontend sistemlerine ve verimli, sürdürülebilir geliştirme iş akışlarına odaklanıyorum.",
      highlights: ["Node.js", "Express.js", "C#/.NET", "React", "Next.js"],
      btnExplore: "Deneyimlerimi Keşfedin",
      btnContact: "Benimle İletişime Geçin",
    },

    // Stats Bar
    stats: {
      experience: { num: "3+", label: "Yıl Deneyim" },
      technologies: { num: "30+", label: "Teknoloji" },
      projects: { num: "20+", label: "Proje" },
    },

    // Skills Section
    skills: {
      tag: "Uzmanlık",
      title: "Temel Teknolojiler",
      description:
        "Backend mühendisliği, frontend mimarisi, veritabanı tasarımı ve bulut altyapısını kapsayan; ölçeklenebilir, yüksek performanslı ve canlıya alınmaya hazır (production-ready) uygulamalar geliştirmeyi sağlayan kapsamlı ve dengeli bir teknoloji yığını.",
      categories: {
        Backend: [
          { name: "C#", color: "#239120" },
          { name: "ASP.NET", color: "#512BD4" },
          { name: "Node.js", color: "#339933" },
          { name: "Express.js", color: "#8b949e" },
          { name: "NestJS", color: "#E0234E" },
          { name: "Java", color: "#007396" },
          { name: "Docker", color: "#F7DF1E" },
          { name: "REST API", color: "#00d9a3" },
          { name: "GraphQL", color: "#673DE6" },
        ],
        Frontend: [
          { name: "React", color: "#61DAFB" },
          { name: "Next.js", color: "#8b949e" },
          { name: "TypeScript", color: "#007ACC" },
          { name: "JavaScript", color: "#F7DF1E" },
          { name: "HTML5", color: "#E34F26" },
          { name: "CSS3", color: "#1572B6" },
          { name: "jQuery", color: "#0769AD" },
          { name: "Tailwind CSS", color: "#06B6D4" },
          { name: "Bootstrap", color: "#7952B3" },
        ],
        Database: [
          { name: "PostgreSQL", color: "#4169E1" },
          { name: "MySQL", color: "#4479A1" },
          { name: "SQL Server", color: "#CC2927" },
          { name: "MongoDB", color: "#47A248" },
        ],
        "Cloud & Tools": [
          { name: "AWS", color: "#FF9900" },
          { name: "Git", color: "#F05032" },
          { name: "Hostinger", color: "#673DE6" },
          { name: "Vercel", color: "#61DAFB" },
          { name: "Railway", color: "#512BD4" },
          { name: "Google Tag Manager", color: "#007ACC" },
          { name: "Google Cloud (OAuth)", color: "#7952B3" },
          { name: "Apple Sign In (OAuth)", color: "#E0234E" },
        ],
      },
    },

    // Experience Section
    experience: {
      tag: "Kariyer",
      title: "Profesyonel Deneyim",
      description:
        "Staj, yarı zamanlı ve tam zamanlı full-stack geliştirme rollerinde kanıtlanmış pratik deneyim; gerçek dünya çözümleri sunma ve production seviyesindeki sistemlere katkıda bulunma yetkinliği.",
      activeBadge: "Aktif Rol",
      items: [
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Geliştirici",
          type: "Full Time",
          period: "Şubat 2026 — Mayıs 2026",
          current: false,
        },
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Geliştirici",
          type: "Part Time",
          period: "Ağustos 2025 — Şubat 2026",
          current: false,
        },
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Geliştirici",
          type: "Intern",
          period: "Haziran 2025 — Temmuz 2025",
          current: false,
        },
        {
          company: "Ottopus A.Ş",
          role: "Full-Stack Geliştirici",
          type: "Intern",
          period: "Temmuz 2024 — Haziran 2025",
          current: false,
        },
      ],
    },

    // Education Section
    education: {
      tag: "Eğitim",
      title: "Akademik Geçmiş",
      items: [
        {
          school: "İzmir Bakırçay Üniversitesi",
          period: "2022 — 2026",
        },
        {
          school: "Fatma Saygın Anadolu Lisesi",
          period: "2017 — 2021",
        },
      ],
    },

    // About Section
    about: {
      tag: "Hakkımda",
      title: "Hakkımda",
      subtitle: "Full-Stack Geliştirici Genel Bakış",
      items: [
        {
          title: "Full-Stack Geliştirici Mehmet Demir Kimdir?",
          content: `Bakırçay Üniversitesi Bilgisayar Mühendisliği mezunu Full-Stack Geliştirici Mehmet Demir'im. Uzmanlığım modern web teknolojileri, mobil uygulama geliştirme ve SQL tabanlı veritabanı tasarımını kapsamaktadır. Son 3 yılı aşkın süredir, hem bireysel hem de dinamik ekipler içinde çalışarak birden fazla projeyi başarıyla geliştirip teslim ettim. Yüksek performanslı, ölçeklenebilir ve kullanıcı odaklı çözümler üretme konusunda tutkuluyum ve yeni gelişen teknolojilerdeki bilgimi sürekli genişletmeye çalışıyorum.`,
        },
        {
          title: "Front-End Geliştirme Uzmanlığı",
          content:
            "HTML, CSS, JavaScript, React ve Next.js kullanarak front-end geliştirme konusunda uzmanlaşıyorum; sorunsuz bir kullanıcı deneyimi sunan ölçeklenebilir, yüksek performanslı ve görsel olarak etkileyici kullanıcı arayüzleri tasarlıyorum.",
        },
        {
          title: "Back-End Geliştirme Uzmanlığı",
          content:
            "Node.js, Express.js, NestJs ve C#/.NET kullanarak back-end sistemleri geliştiriyor; sürdürülebilirlik, güvenlik ve temiz kod pratiklerine güçlü bir vurgu yaparak ölçeklenebilir mimariler ve yüksek performanslı API'ler tasarlıyorum.",
        },
        {
          title: "Mobil Geliştirme Uzmanlığı",
          content:
            "Mobil uygulama geliştirmede temel olarak React Native ile çalışıyorum; tutarlı bir geliştirme deneyimi sağlarken, React ile olan yakın uyumundan yararlanarak uygulamaları daha hızlı ve verimli bir şekilde geliştiriyorum.",
        },
        {
          title: "DevOps & Bulut Uzmanlığı",
          content: `Gerçek dünya uygulamalarını verimli bir şekilde oluşturmak, yayına almak ve yönetmek için modern platformları kullanmaya odaklanıyorum. Ölçeklenebilir bulut tabanlı sistemler geliştirmemi sağlayan EC2, RDS, Amplify ve Route 53 gibi AWS servislerinde pratik deneyime sahibim.\n\nHızlı ve güvenilir dağıtımlar için Vercel ve Hostinger gibi platformları da kullanıyorum. Ek olarak, canlı uygulamaları güvenli bir şekilde güncellemek, kararlılık, sürekli teslimat ve minimum kesinti süresi sağlamak için Git tabanlı iş akışlarına güveniyorum.`,
        },
      ],
    },

    // Contact Section
    contact: {
      tag: "İletişim",
      title: "İletişime Geçelim",
      description:
        "İş birlikleri, tam zamanlı fırsatlar ve anlamlı ürün çalışmaları için müsaidim.",
      email: "demirmehmet226648@gmail.com",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
} as const;

//project translations

export const projectsTranslations = {
  en: {
    pageTag: "Personal Projects",
    pageTitle: {
      main: "My",
      accent: "Projects",
    },
    pageDesc:
      "A collection of full-stack projects spanning backend systems, frontend interfaces, and cloud-deployed applications.",
    stats: {
      total: "Total Personal Projects",
      live: "Live",
      github: "IN GITHUB",
    },
    liveBadge: {
      live: "Live",
      github: "In Github",
    },
    viewProject: "View Project",
    projectList: [
      {
        name: "Dressify (Full-Stack E-Commerce Platform)",
        description:
          "A scalable full-stack e-commerce platform focused on fashion, enabling users to explore, filter, and interact with products organized by brands and categories. The system features secure JWT-based authentication, OTP verification via SMS (Twilio) and email (Brevo), and a personalized user dashboard that tracks activity and engagement. Built with a modular backend architecture, it supports slug-based routing, dynamic filtering, and optimized pagination. The platform includes a robust multi-step password recovery flow with OTP validation, real-time interactions for favorites and cart management, and a responsive UI. Deployed on AWS infrastructure using EC2, RDS, Amplify, and Route 53 for high availability and scalability.",
        features: [
          "JWT authentication with secure bcrypt password hashing",
          "Dual OTP system: SMS via Twilio and Email via Brevo SMTP",
          "Advanced user profile management (email, phone, activity tracking)",
          "Dynamic product listing with pagination, favorites, and cart system",
          "Brand-based category structure with SEO-friendly slug routing",
          "Personalized user activity dashboard with engagement tracking",
          "Multi-step forgot password flow with OTP verification and token reset",
          "RESTful API architecture with modular and scalable backend design",
          "Responsive and modern UI with optimized user experience",
          "AWS deployment with EC2 (server), RDS (PostgreSQL), Amplify (frontend), Route 53 (DNS)",
        ],
        live: true,
        liveUrl: "https://www.dressify-shop.com",
        tags: [
          "React",
          "Node.js",
          "TypeScript",
          "Express.js",
          "PostgreSQL",
          "AWS",
          "EC2",
          "RDS",
          "Amplify",
          "Route 53",
          "Twilio",
          "Brevo",
          "JWT",
          "REST API",
          "HTML5",
          "CSS3",
          "Responsive Design",
        ],
      },
      {
        name: "Blogy (Full-Stack Project With AI-Powered Content Classification System)",
        description:
          "A scalable full-stack application built with ASP.NET Core and C#, designed using MVC and Onion Architecture principles. The system integrates a Python-based AI microservice for multi-label text classification using FastAPI. It features secure authentication workflows, SMTP-based password reset, responsive UI, and seamless communication between backend and AI services through RESTful APIs.",
        features: [
          "ASP.NET Core backend with MVC architecture",
          "Onion Architecture for maintainability and scalability",
          "Python-based AI microservice using FastAPI",
          "Multi-label text classification with TF-IDF model",
          "Pydantic-based request validation and structured API responses",
          "Text preprocessing pipeline (lowercasing, URL cleaning, normalization)",
          "SMTP-based secure password reset with tokenized email verification",
          "Responsive UI built with HTML5 and CSS3",
          "Dynamic frontend interactions using JavaScript and jQuery",
          "Decoupled microservice architecture for independent AI model updates",
        ],
        live: true,
        liveUrl: "https://blogy-ee8w.onrender.com",
        tags: [
          "C#",
          "ASP.NET Core",
          "MVC",
          "Onion Architecture",
          "Python",
          "FastAPI",
          "Machine Learning",
          "TF-IDF",
          "JavaScript",
          "jQuery",
          "Render",
          "MYSQL",
          "HTML5",
          "CSS3",
          "SMTP",
          "Responsive Design",
        ],
      },
      {
        name: "Tickio Web (Full-Stack Productivity Platform)",
        description:
          "A full-stack productivity platform built to help users manage tasks, build consistency, and monitor long-term progress. Tickio allows users to create, update, complete, and organize tasks through a structured system designed around discipline, daily planning, and personal growth. The web application was developed with Next.js, delivering a fast, modern, and responsive user experience, while the backend was built with NestJS to provide a scalable and modular server-side architecture. The platform includes authentication flows, OTP-based password recovery, achievement-driven interactions, ranking systems, and detailed statistics pages that visualize user performance over time. With dedicated modules for dashboards, task management, profile handling, rankings, and productivity analytics, Tickio is designed as a scalable full-stack ecosystem rather than a simple task tracker.",
        features: [
          "Full-stack architecture with Next.js frontend and NestJS backend",
          "Task creation, editing, updating, and completion workflows",
          "Category-based task organization for study, sport, work, hobby, travel, and daily routines",
          "Secure authentication and account management flows",
          "OTP-based forgot password and recovery system",
          "Achievement system triggered by productivity milestones",
          "Interactive dashboard with daily tasks, weekly overview, and quick statistics",
          "Detailed profile management with user progress and achievement summaries",
          "Statistics module with productivity tracking across daily, weekly, monthly, and yearly periods",
          "Sortable ranking system based on task count, finished tasks, streaks, and overall performance",
          "Reusable component-based UI architecture for both scalability and maintainability",
          "REST API-driven communication between frontend and backend services",
        ],
        live: true,
        liveUrl: "https://tickio-website.vercel.app",
        tags: [
          "Next.js",
          "NestJS",
          "TypeScript",
          "REST API",
          "SMTP",
          "JWT",
          "PostgreSQL",
          "Railway",
          "Vercel",
          "HTML5",
          "CSS3",
          "Responsive Design",
        ],
      },
      {
        name: "Tickio Mobile (Productivity & Task Tracking App)",
        description:
          "A modern mobile productivity application designed to help users build discipline, manage daily goals, and track long-term progress through an intuitive task management experience. Tickio Mobile enables users to create, edit, complete, and organize tasks across different categories such as study, sport, daily life, work, and personal goals. The app includes secure authentication flows, OTP-based password recovery, achievement-driven interactions, and user-centric dashboards that visualize productivity statistics and recent activity. With dedicated sections for tasks, rankings, profile management, and performance analytics, the platform transforms everyday planning into a structured and motivating experience. Built with a clean mobile-first architecture, Tickio Mobile focuses on responsive design, smooth user flows, and scalable service integration for future growth.",
        features: [
          "Secure authentication and account management for mobile users",
          "Task creation, editing, completion, and status tracking",
          "Categorized productivity flows for study, sport, work, hobby, travel, and daily routines",
          "Achievement system triggered by task completion milestones",
          "Interactive dashboard with daily tasks, 7-day activity overview, and quick stats",
          "Personal profile page with task summaries, achievements, and account information",
          "Statistics page with visual productivity insights across daily, weekly, monthly, and yearly ranges",
          "Ranking system with sortable leaderboards based on total tasks, finished tasks, streaks, and overall performance",
          "Multi-step forgot password flow with OTP verification and password reset",
          "Mobile-first UI design with reusable components and a consistent design system",
          "Scalable API-driven architecture prepared for future feature expansion",
        ],
        live: false,
        liveUrl: "https://github.com/MehmetDemr",
        tags: [
          "React Native",
          "TypeScript",
          "SMTP",
          "REST API",
          "PostgreSQL",
          "JWT",
        ],
      },
      {
        name: "Mehmet Demir Portfolio (Personal Website)",
        description:
          "A modern personal portfolio website built to present my professional identity, technical background, and software development projects in a clean and structured way. Developed using Next.js and TypeScript, the platform serves as a central hub where visitors can explore my experience, skills, and completed work. The website includes dedicated sections for projects, career journey, and contact information, along with a downloadable resume for quick access. Designed with a strong focus on performance, responsiveness, and user experience, the portfolio reflects both my technical capabilities and my approach to building scalable, well-structured web applications.",
        features: [
          "Built with Next.js and TypeScript for performance and scalability",
          "Clean and responsive UI optimized for all device sizes",
          "Dedicated sections for projects, experience, and personal background",
          "Project showcase with detailed descriptions and technology stacks",
          "Contact section for direct communication",
          "Downloadable resume integration",
          "SEO-friendly structure for better visibility",
          "Component-based architecture for maintainability",
        ],
        live: true,
        liveUrl: "https://cengmehmetdemir.com/",
        tags: [
          "Next.js",
          "TypeScript",
          "HTML5",
          "CSS3",
          "Vercel",
          "Responsive Design",
          "SEO",
        ],
      },
      {
        name: "Wordplay (Competitive Word Gaming Platform)",
        description:
          "Wordplay is a full-stack competitive word gaming platform designed to bring together multiple word-based games under a single, unified experience. Built with Next.js and TypeScript, the platform offers players a structured environment where they can challenge themselves across different games, track their performance, and compete on leaderboards. The platform currently features Wordle and Hangman, each with multiple difficulty levels and curated word pools. Authentication is handled via both JWT-based login and OAuth providers including Google and Apple, ensuring a seamless onboarding experience. A dynamic scoring system rewards players based on difficulty and performance, with scores persisted across daily, weekly, and all-time leaderboards. The dashboard provides a personalized experience with real-time stats, game history, and session tracking, while the architecture is built to scale with additional games and features over time.",
        features: [
          "Multi-game platform with Wordle and Hangman under a unified dashboard",
          "JWT-based authentication alongside Google and Apple OAuth integration",
          "Three difficulty tiers per game with curated word pools",
          "Dynamic scoring system with daily, weekly, and all-time leaderboard tracking",
          "Personalized dashboard with real-time stats and session progress",
          "Dictionary validation via Free Dictionary API for legitimate word enforcement",
          "Daily game limits with persistent session tracking",
          "Fully responsive UI optimized for both mobile and desktop",
          "Smooth animations including tile flips, shake feedback, and toast notifications",
          "Scalable component-based architecture designed for future game expansion",
        ],
        live: true,
        liveUrl: "https://wordplay-site.vercel.app",
        tags: [
          "Next.js",
          "TypeScript",
          "CSS3",
          "JWT",
          "OAuth",
          "Google Auth",
          "Apple Auth",
          "Prisma",
          "Vercel",
          "REST API",
          "Responsive Design",
          ,
        ],
      },
    ],
  },
  tr: {
    pageTag: "Kişisel Projeler",
    pageTitle: {
      main: "Benim",
      accent: "Projelerim",
    },
    pageDesc:
      "Backend sistemleri, frontend arayüzleri ve bulut tabanlı uygulamaları kapsayan full-stack projelerden oluşan bir koleksiyon.",
    stats: {
      total: "Toplam Kişisel Proje",
      live: "Yayında",
      github: "GITHUB'DA",
    },
    liveBadge: {
      live: "Yayında",
      github: "Github'da",
    },
    viewProject: "Projeyi Görüntüle",
    projectList: [
      {
        name: "Dressify (Full-Stack E-Ticaret Platformu)",
        description:
          "Moda odaklı, kullanıcıların markalara ve kategorilere göre ürünleri keşfetmesine, filtrelemesine ve etkileşime girmesine olanak tanıyan ölçeklenebilir bir full-stack e-ticaret platformu. Sistem; güvenli JWT tabanlı kimlik doğrulama, SMS (Twilio) ve e-posta (Brevo) yoluyla OTP doğrulaması ve etkileşimleri takip eden kişiselleştirilmiş bir kullanıcı paneli içerir. Modüler bir backend mimarisiyle inşa edilen proje; slug tabanlı yönlendirmeyi, dinamik filtrelemeyi ve optimize edilmiş sayfalamayı destekler. Platform; OTP doğrulamalı çok aşamalı şifre kurtarma akışı, favoriler ve sepet yönetimi için gerçek zamanlı etkileşimler ve duyarlı bir kullanıcı arayüzü sunar. Yüksek kullanılabilirlik ve ölçeklenebilirlik için EC2, RDS, Amplify ve Route 53 kullanılarak AWS altyapısında yayına alınmıştır.",
        features: [
          "Güvenli bcrypt şifre hashleme ile JWT kimlik doğrulama",
          "Çift OTP sistemi: Twilio ile SMS ve Brevo SMTP ile E-posta",
          "Gelişmiş kullanıcı profili yönetimi (e-posta, telefon, aktivite takibi)",
          "Sayfalama, favoriler ve sepet sistemi içeren dinamik ürün listeleme",
          "SEO dostu slug yönlendirmeli, marka tabanlı kategori yapısı",
          "Etkileşim takibi sağlayan kişiselleştirilmiş kullanıcı aktivite paneli",
          "OTP doğrulaması ve token sıfırlama içeren çok aşamalı şifremi unuttum akışı",
          "Modüler ve ölçeklenebilir backend tasarımına sahip RESTful API mimarisi",
          "Optimize edilmiş kullanıcı deneyimi sunan modern ve duyarlı arayüz",
          "EC2 (sunucu), RDS (PostgreSQL), Amplify (frontend) ve Route 53 (DNS) ile AWS dağıtımı",
        ],
        live: true,
        liveUrl: "https://www.dressify-shop.com",
        tags: [
          "React",
          "Node.js",
          "TypeScript",
          "Express.js",
          "PostgreSQL",
          "AWS",
          "EC2",
          "RDS",
          "Amplify",
          "Route 53",
          "Twilio",
          "Brevo",
          "JWT",
          "REST API",
          "HTML5",
          "CSS3",
          "Responsive Design",
        ],
      },
      {
        name: "Blogy (Yapay Zeka Destekli İçerik Sınıflandırma Sistemli Full-Stack Proje)",
        description:
          "ASP.NET Core ve C# ile inşa edilmiş, MVC ve Onion Architecture prensipleriyle tasarlanmış ölçeklenebilir bir full-stack uygulama. Sistem, FastAPI kullanan çok etiketli metin sınıflandırması için Python tabanlı bir yapay zeka mikro hizmetini entegre eder. Güvenli kimlik doğrulama iş akışları, SMTP tabanlı şifre sıfırlama, duyarlı kullanıcı arayüzü ve RESTful API'ler aracılığıyla backend ile yapay zeka hizmetleri arasında sorunsuz iletişim özelliklerine sahiptir.",
        features: [
          "MVC mimarisine sahip ASP.NET Core backend",
          "Bakım kolaylığı ve ölçeklenebilirlik için Onion Architecture (Soğan Mimarisi)",
          "FastAPI kullanan Python tabanlı yapay zeka mikro hizmeti",
          "TF-IDF modeli ile çok etiketli metin sınıflandırma",
          "Pydantic tabanlı istek doğrulaması ve yapılandırılmış API yanıtları",
          "Metin ön işleme hattı (küçük harfe dönüştürme, URL temizleme, normalizasyon)",
          "Token tabanlı e-posta doğrulaması ile SMTP tabanlı güvenli şifre sıfırlama",
          "HTML5 ve CSS3 ile oluşturulmuş duyarlı kullanıcı arayüzü",
          "JavaScript ve jQuery kullanan dinamik frontend etkileşimleri",
          "Bağımsız yapay zeka modeli güncellemeleri için ayrıştırılmış mikro hizmet mimarisi",
        ],
        live: true,
        liveUrl: "https://blogy-ee8w.onrender.com",
        tags: [
          "C#",
          "ASP.NET Core",
          "MVC",
          "Onion Architecture",
          "Python",
          "FastAPI",
          "Machine Learning",
          "TF-IDF",
          "JavaScript",
          "jQuery",
          "Render",
          "MYSQL",
          "HTML5",
          "CSS3",
          "SMTP",
          "Responsive Design",
        ],
      },
      {
        name: "Tickio Mobile (Verimlilik ve Görev Takip Uygulaması)",
        description:
          "Kullanıcıların disiplin oluşturmasına, günlük hedeflerini yönetmesine ve sezgisel bir görev yönetimi deneyimiyle uzun vadeli ilerlemeyi izlemesine yardımcı olmak için tasarlanmış modern bir mobil verimlilik uygulaması. Tickio Mobile; kullanıcıların ders, spor, günlük yaşam, iş ve kişisel hedefler gibi farklı kategorilerde görevler oluşturmasına, düzenlemesine, tamamlamasına ve organize etmesine olanak tanır. Uygulama; güvenli kimlik doğrulama akışları, OTP tabanlı şifre kurtarma, başarı odaklı etkileşimler ve verimlilik istatistiklerini görselleştiren kullanıcı merkezli paneller içerir. Görevler, sıralamalar, profil yönetimi ve performans analitiği için özel bölümleriyle platform, günlük planlamayı yapılandırılmış ve motive edici bir deneyime dönüştürür. Temiz bir mobil öncelikli mimariyle inşa edilen Tickio Mobile, duyarlı tasarıma, akıcı kullanıcı akışlarına ve gelecekteki büyüme için ölçeklenebilir hizmet entegrasyonuna odaklanır.",
        features: [
          "Mobil kullanıcılar için güvenli kimlik doğrulama ve hesap yönetimi",
          "Görev oluşturma, düzenleme, tamamlama ve durum takibi",
          "Ders, spor, iş, hobi, seyahat ve günlük rutinler için kategorize edilmiş verimlilik akışları",
          "Görev tamamlama dönüm noktalarıyla tetiklenen başarı sistemi",
          "Günlük görevler, 7 günlük aktivite özeti ve hızlı istatistikler içeren etkileşimli panel",
          "Görev özetleri, başarılar ve hesap bilgilerini içeren kişisel profil sayfası",
          "Günlük, haftalık, aylık ve yıllık aralıklarda görsel verimlilik içgörüleri sunan istatistik sayfası",
          "Toplam görev, tamamlanan görev ve serilere dayalı sıralanabilir liderlik tabloları",
          "OTP doğrulaması ve şifre sıfırlama içeren çok aşamalı şifremi unuttum akışı",
          "Yeniden kullanılabilir bileşenler ve tutarlı bir tasarım sistemi ile mobil öncelikli kullanıcı arayüzü",
          "Gelecekteki özellik genişletmeleri için hazırlanan ölçeklenebilir API odaklı mimari",
        ],
        live: false,
        liveUrl: "https://github.com/MehmetDemr",
        tags: [
          "React Native",
          "TypeScript",
          "SMTP",
          "REST API",
          "PostgreSQL",
          "JWT",
        ],
      },
      {
        name: "Tickio Web (Full-Stack Verimlilik Platformu)",
        description:
          "Kullanıcıların görevlerini yönetmelerine, istikrar oluşturmalarına ve uzun vadeli ilerlemeyi izlemelerine yardımcı olmak için oluşturulmuş bir full-stack verimlilik platformu. Tickio; kullanıcıların disiplin, günlük planlama ve kişisel gelişim etrafında tasarlanmış yapılandırılmış bir sistem aracılığıyla görevler oluşturmasına, güncellemesine ve organize etmesine olanak tanır. Web uygulaması Next.js ile geliştirilerek hızlı ve modern bir kullanıcı deneyimi sunarken, backend ölçeklenebilir bir mimari sağlamak için NestJS ile oluşturulmuştur. Platform; kimlik doğrulama, OTP tabanlı şifre kurtarma, başarı odaklı etkileşimler, sıralama sistemleri ve kullanıcı performansını zaman içinde görselleştiren ayrıntılı istatistik sayfaları içerir. Tickio, basit bir görev takipçisinden ziyade ölçeklenebilir bir full-stack ekosistem olarak tasarlanmıştır.",
        features: [
          "Next.js frontend ve NestJS backend ile full-stack mimari",
          "Görev oluşturma, düzenleme, güncelleme ve tamamlama iş akışları",
          "Ders, spor, iş, hobi, seyahat ve günlük rutinler için kategori tabanlı görev organizasyonu",
          "Güvenli kimlik doğrulama ve hesap yönetimi akışları",
          "OTP tabanlı şifremi unuttum ve kurtarma sistemi",
          "Verimlilik dönüm noktalarıyla tetiklenen başarı sistemi",
          "Günlük görevler, haftalık özet ve hızlı istatistikler içeren etkileşimli panel",
          "Kullanıcı ilerlemesi ve başarı özetlerini içeren ayrıntılı profil yönetimi",
          "Günlük, haftalık, aylık ve yıllık dönemlerde verimlilik takibi sunan istatistik modülü",
          "Görev sayısı, tamamlanan görevler ve serilere göre sıralanabilir sıralama sistemi",
          "Ölçeklenebilirlik ve bakım kolaylığı için yeniden kullanılabilir bileşen tabanlı kullanıcı arayüzü mimarisi",
          "Frontend ve backend hizmetleri arasında REST API tabanlı iletişim",
        ],
        live: true,
        liveUrl: "https://tickio-website.vercel.app",
        tags: [
          "Next.js",
          "NestJS",
          "TypeScript",
          "REST API",
          "SMTP",
          "JWT",
          "PostgreSQL",
          "HTML5",
          "CSS3",
          "Responsive Design",
        ],
      },
      {
        name: "Wordplay (Rekabetçi Kelime Oyunları Platformu)",
        description:
          "Wordplay, birden fazla kelime tabanlı oyunu tek ve bütünleşik bir deneyim altında bir araya getirmek için tasarlanmış full-stack bir rekabetçi kelime oyunları platformudur. Next.js ve TypeScript ile geliştirilen platform, oyunculara farklı oyunlarda kendilerini zorlayabilecekleri, performanslarını takip edebilecekleri ve liderlik tablolarında rekabet edebilecekleri düzenli bir ortam sunar. Platform şu anda Wordle ve Hangman oyunlarını içermektedir; her iki oyun da birden fazla zorluk seviyesine ve özenle hazırlanmış kelime havuzlarına sahiptir. Kimlik doğrulama, hem JWT tabanlı giriş hem de Google ve Apple dahil OAuth sağlayıcıları aracılığıyla yönetilir ve kullanıcılar için sorunsuz bir başlangıç deneyimi sağlar. Dinamik puanlama sistemi, oyuncuları zorluk seviyesi ve performanslarına göre ödüllendirir; puanlar günlük, haftalık ve tüm zamanlar liderlik tablolarında kalıcı olarak saklanır. Dashboard, gerçek zamanlı istatistikler, oyun geçmişi ve oturum takibiyle kişiselleştirilmiş bir deneyim sunarken, mimari zaman içinde ek oyunlar ve özelliklerle ölçeklenebilecek şekilde tasarlanmıştır.",
        features: [
          "Wordle ve Hangman oyunlarını tek bir dashboard altında birleştiren çoklu oyun platformu",
          "Google ve Apple OAuth entegrasyonu ile birlikte JWT tabanlı kimlik doğrulama",
          "Her oyun için özenle hazırlanmış kelime havuzlarına sahip üç zorluk seviyesi",
          "Günlük, haftalık ve tüm zamanlar liderlik tabloları takibine sahip dinamik puanlama sistemi",
          "Gerçek zamanlı istatistikler ve oturum ilerlemesi sunan kişiselleştirilmiş dashboard",
          "Geçerli kelime kontrolü için Free Dictionary API üzerinden sözlük doğrulaması",
          "Kalıcı oturum takibiyle günlük oyun limitleri",
          "Hem mobil hem de masaüstü için optimize edilmiş tamamen responsive arayüz",
          "Kart çevirme, sallanma geri bildirimi ve toast bildirimleri gibi akıcı animasyonlar",
          "Gelecekteki oyun genişletmeleri için tasarlanmış ölçeklenebilir component tabanlı mimari",
        ],
        live: true,
        liveUrl: "https://wordplay-site.vercel.app",
        tags: [
          "Next.js",
          "TypeScript",
          "CSS3",
          "JWT",
          "OAuth",
          "Google Auth",
          "Apple Auth",
          "Prisma",
          "Vercel",
          "REST API",
          "Responsive Design",
        ],
      },
      {
        name: "Mehmet Demir Portfolio (Kişisel Web Sitesi)",
        description:
          "Profesyonel kimliğimi, teknik geçmişimi ve yazılım geliştirme projelerimi temiz ve yapılandırılmış bir şekilde sunmak için oluşturulmuş modern bir kişisel portfolyo web sitesi. Next.js ve TypeScript kullanılarak geliştirilen platform; ziyaretçilerin deneyimlerimi, becerilerimi ve tamamlanmış çalışmalarımı inceleyebileceği merkezi bir merkez görevi görür. Web sitesi; performans, duyarlılık ve kullanıcı deneyimine odaklanarak tasarlanmış olup, ölçeklenebilir ve iyi yapılandırılmış web uygulamaları oluşturma yaklaşımımı yansıtır.",
        features: [
          "Performans ve ölçeklenebilirlik için Next.js ve TypeScript ile oluşturuldu",
          "Tüm cihaz boyutları için optimize edilmiş temiz ve duyarlı kullanıcı arayüzü",
          "Projeler, deneyim ve kişisel geçmiş için özel bölümler",
          "Ayrıntılı açıklamalar ve teknoloji yığınları içeren proje sunumu",
          "Doğrudan iletişim için iletişim bölümü",
          "İndirilebilir özgeçmiş entegrasyonu",
          "Daha iyi görünürlük için SEO dostu yapı",
          "Bakım kolaylığı için bileşen tabanlı mimari",
        ],
        live: true,
        liveUrl: "https://cengmehmetdemir.com/",
        tags: [
          "Next.js",
          "TypeScript",
          "HTML5",
          "CSS3",
          "Responsive Design",
          "SEO",
        ],
      },
    ],
  },
} as const;

//services translations

export const servicesTranslations = {
  en: {
    pageTag: "Services",
    pageTitle: { main: "My", accent: "Services" },
    pageDesc:
      "Ready-to-use digital solutions I design and build for businesses and individuals, from QR menus to personal websites.",
    stats: { total: "Total Services", live: "Live", inProgress: "In Progress" },
    statusBadge: { live: "Live", inProgress: "In Progress" },
    viewService: "View Service",
    comingSoon: "Coming Soon",
    serviceList: [
      {
        name: "QR Menu (Digital Menu System for Restaurants & Cafes)",
        description:
          "A modern QR menu service for restaurants, cafes, and any venue that serves food and drinks. Customers scan a code and instantly see your full menu on their own device, while you manage everything from a simple admin panel without touching any code.",
        features: [
          "Fully responsive design that works on phones, tablets, and computers",
          "Product detail pages with ingredients and allergen information",
          "Admin panel to add products, add categories, and edit your menu anytime",
          "Stock tracking to mark products as available or out of stock",
          "Customizable color palettes to match your brand identity",
        ],
        live: false,
        linkUrl: "",
        tags: [
          "QR Code",
          "Admin Panel",
          "Stock Tracking",
          "Allergen Info",
          "Theme Customization",
          "Responsive Design",
        ],
      },
      {
        name: "Personal Website Design (Interactive & Professional)",
        description:
          "A custom-designed personal website that presents who you are and what you do. Whether you want a clean professional look or an interactive, eye-catching experience, I build a site that reflects your personality and makes a strong first impression.",
        features: [
          "Professional or interactive design tailored to your style",
          "Fast, modern, and fully responsive on every device",
          "Sections for about, projects, experience, and contact",
          "Smooth animations and engaging interactions",
          "SEO-friendly structure for better visibility on search engines",
          "Multi-language support and downloadable resume integration",
        ],
        live: false,
        linkUrl: "",
        tags: [
          "Next.js",
          "TypeScript",
          "Custom Design",
          "Animations",
          "SEO",
          "Responsive Design",
        ],
      },
    ],
  },
  tr: {
    pageTag: "Hizmetler",
    pageTitle: { main: "Sunduğum", accent: "Hizmetler" },
    pageDesc:
      "QR menüden kişisel web sitesine kadar, işletmeler ve bireyler için tasarlayıp geliştirdiğim kullanıma hazır dijital çözümler.",
    stats: {
      total: "Toplam Hizmet",
      live: "Yayında",
      inProgress: "Yapım Aşamasında",
    },
    statusBadge: { live: "Yayında", inProgress: "Yapım Aşamasında" },
    viewService: "Hizmeti Görüntüle",
    comingSoon: "Çok Yakında",
    serviceList: [
      {
        name: "QR Menü (Restoran ve Kafeler İçin Dijital Menü Sistemi)",
        description:
          "Restoranlar, kafeler ve yiyecek-içecek sunan tüm işletmeler için modern bir QR menü hizmeti. Müşterileriniz kodu okutarak menünüze kendi cihazından anında ulaşır; siz ise tek satır kod yazmadan her şeyi basit bir yönetim panelinden yönetirsiniz.",
        features: [
          "Telefon, tablet ve bilgisayarda sorunsuz çalışan tamamen uyumlu (responsive) tasarım",
          "Ürün detay sayfalarında içindekiler ve alerjen bilgileri",
          "Ürün ekleme, kategori ekleme ve menüyü istediğin zaman düzenleme imkânı sunan yönetim paneli",
          "Ürünleri stokta var/yok olarak işaretleyebileceğin stok takibi",
          "Marka kimliğine uygun, istenildiğinde değiştirilebilen renk paletleri",
        ],
        live: false,
        linkUrl: "",
        tags: [
          "QR Code",
          "Admin Panel",
          "Stock Tracking",
          "Allergen Info",
          "Theme Customization",
          "Responsive Design",
        ],
      },
      {
        name: "Kişisel Web Sitesi Tasarımı (İnteraktif ve Profesyonel)",
        description:
          "Kim olduğunuzu ve ne yaptığınızı en iyi şekilde anlatan, size özel tasarlanmış kişisel web sitesi. İster sade ve profesyonel, ister interaktif ve dikkat çekici bir deneyim isteyin; kişiliğinizi yansıtan ve güçlü bir ilk izlenim bırakan bir site geliştiriyorum.",
        features: [
          "Tarzınıza göre profesyonel veya interaktif tasarım",
          "Hızlı, modern ve her cihazda tamamen uyumlu yapı",
          "Hakkımda, projeler, deneyim ve iletişim bölümleri",
          "Akıcı animasyonlar ve etkileyici etkileşimler",
          "Arama motorlarında daha iyi görünürlük için SEO dostu yapı",
          "Çoklu dil desteği ve indirilebilir özgeçmiş entegrasyonu",
        ],
        live: false,
        linkUrl: "",
        tags: [
          "Next.js",
          "TypeScript",
          "Custom Design",
          "Animations",
          "SEO",
          "Responsive Design",
        ],
      },
    ],
  },
} as const;
