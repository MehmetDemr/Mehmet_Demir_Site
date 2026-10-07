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
          "A modern digital menu service for restaurants, cafes, and food and beverage businesses. Your customers reach your menu instantly on their own device, while you manage your menu, stock, and brand look from a single admin panel, without writing any code.",
        features: [],
        featureGroups: [
          {
            title: "Customer side",
            items: [
              "Responsive design for phones, tablets, and computers",
              "A dedicated menu address per business (/business-name) and category pages (/business-name/category)",
              "Easy browsing with image-based category cards",
              "Product cards with ingredients, allergen info, preparation time, and calories",
              "A business landing page: introduction, featured products, contact, address, opening hours, and social links",
              "Optionally show or hide prices, with currency selection",
              "A branded 404 page that matches the business's colors",
            ],
          },
          {
            title: "Admin panel",
            items: [
              "Separate, secure login for each business (email and password)",
              "\"Forgot password\" flow: single-use, time-limited link sent by email",
              "Add, edit, delete, reorder, activate/deactivate, search, and paginate categories and products",
              "Per-product image, description, price, calories, preparation time, allergens, and ingredients",
              "Manage the allergen list",
              "Edit business info: logo, cover image, phone, address, opening hours, social media",
              "Send support requests from the panel",
            ],
          },
          {
            title: "Stock tracking",
            items: [
              "Track stock items by quantity and unit",
              "Link products to recipes made of these items",
              "Stock decreases automatically when a sale is recorded, with low-stock warnings",
              "Export the stock list to Excel",
            ],
          },
          {
            title: "Brand identity",
            items: [
              "Color palette (primary, secondary, background, text, accent, etc.) and heading/body font selection",
              "Contrast check for color readability",
              "Revert to the previous design in one click",
            ],
          },
          {
            title: "Bulk operations",
            items: [
              "Ready-made Excel templates for products, categories, allergens, and stock",
              "Import your whole menu from Excel in one go",
            ],
          },
        ],
        live: true,
        linkUrl: "",
        links: [
          { label: "View Menu", url: "https://restaurant-qr-menu-two.vercel.app/qr-menu" },
          { label: "Admin Panel", url: "https://restaurant-qr-menu-two.vercel.app/qr-menu/business" },
        ],
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
        name: "3D & Interactive E-Commerce Website Design",
        description:
          "Don't lock your product inside a photo gallery. Let your customers rotate it in 3D right in the browser, inspect it from every angle, switch its color instantly, and add it to the cart from the same page. I design and code a smooth, memorable shopping experience made for your brand.",
        features: [],
        featureGroups: [
          {
            title: "Customer side",
            items: [
              "Real-time 3D product viewing: drag to rotate, inspect from every angle",
              "Scroll-aware scenes: as the page scrolls, the product turns and zooms on its own, taking a different pose in the detail, sole, and color sections",
              "Instant color selection without reloading the product; the page background and text colors change with the selected color",
              "Category selection (e.g. men/women) with the model, copy, and product list changing accordingly",
              "Size selection, add to cart, cart drawer, quantity changes, and total price",
              "Scene-matched sections for product features, highlights, and technical details",
              "Discounted price display and a catalog of product cards",
              "Smooth scrolling and fluid animations on page transitions",
              "Responsive design for phones, tablets, and computers",
              "Accessibility details such as keyboard and screen reader support",
            ],
          },
          {
            title: "Brand identity",
            items: [
              "Color palette, typography, and page atmosphere are designed from scratch around your brand",
              "Separate scene colors for each product color",
              "No templates: a page flow built specifically for your product",
            ],
          },
          {
            title: "Technical foundation",
            items: [
              "A modern, fast, and extensible stack built with Next.js, React, Three.js, and React Three Fiber",
              "Preparing and optimizing your product model (GLB/3D file) for the web",
              "If you don't have a 3D model, guidance on modeling from product photos or design files",
              "Image and model optimization for fast loading",
            ],
          },
          {
            title: "Optional add-ons",
            items: [
              "Payment infrastructure integration",
              "Product, stock, and order management panel",
              "Multi-language and multi-currency",
              "Content management system for adding and editing products",
            ],
          },
          {
            title: "Who is it for?",
            items: [
              "For brands selling products whose shape, texture, and details influence the sale, such as shoes, watches, furniture, electronics, and accessories. If you want to stand out from competitors in the first second and show your product by \"walking customers around it\", this service is for you.",
            ],
          },
        ],
        live: true,
        linkUrl: "https://marketing-omega-ten-91.vercel.app",
        tags: [
          "Next.js",
          "React",
          "Three.js",
          "React Three Fiber",
          "3D",
          "E-Commerce",
        ],
      },
      {
        name: "Interactive Showcase Page for Your Business",
        description:
          "The first time someone finds your business online, they form an impression before they ever visit. I design modern, interactive showcase pages made for your brand. It won't be an ordinary info page: it draws visitors in from the first second and makes your business memorable.",
        features: [],
        featureGroups: [
          {
            title: "Visitor experience",
            items: [
              "The page unfolds with lively, fluid animations as you scroll.",
              "Presents your products, services, and strengths in clear, visual-first sections.",
              "Works smoothly on phones, tablets, and computers.",
              "Address, opening hours, and phone are one tap away: get directions on the map or call directly.",
              "If you like, a QR menu and social media links are added to the page.",
            ],
          },
          {
            title: "Made for your business",
            items: [
              "Colors, visuals, copy, and content are designed from scratch around your brand.",
              "Your business info is managed in one place and reflected in every section of the page.",
              "Adapted to your industry: restaurant, cafe, barber, boutique, office, and more.",
            ],
          },
          {
            title: "How we work",
            items: [
              "I listen to understand your business, audience, and needs.",
              "I prepare a design that fits your brand.",
              "With your approval, I publish the page.",
            ],
          },
        ],
        note: "Note: The work shown here is a prototype. It demonstrates the design language, animations, and page flow. The final page is shaped by your content, visuals, and needs.",
        live: true,
        linkUrl: "https://interactive-business-project.vercel.app",
        tags: [
          "Next.js",
          "TypeScript",
          "Custom Design",
          "Animations",
          "SEO",
          "Responsive Design",
        ],
      },
      {
        name: "Professional Business Website Made for Your Brand",
        description:
          "Your business should look as good online as your menu does. For restaurants, cafes, bakeries, patisseries, and all food and beverage businesses, we build a modern showcase page shaped around your brand identity. The page you see is an example. Content, colors, and sections can be built from scratch for your business.",
        features: [
          "A look that's yours: Colors, fonts, and logo are adapted to your brand. The page looks like your business's own page.",
          "A strong first impression: With an impressive headline, a short intro, and buttons leading straight to the menu or contact, visitors see what you offer on the first screen.",
          "Sections that tell your story: Sections highlight what sets your business apart (quality, service, experience), your featured products, and how you work. Which sections to include is decided per business.",
          "Connected to the QR menu: Visitors can jump to your up-to-date digital menu with one click.",
          "Easy to reach: Address, opening hours, phone, email, and social media accounts are clearly shown. Customers can call or get directions with one tap.",
          "Works on every device: Runs properly on phones, tablets, and computers, with an easy-to-use mobile menu.",
          "Fast and tidy: The page loads quickly and stays up to date when your information changes.",
          "Flexible structure: Sections can be added, removed, or rearranged. This example is a starting point showing how the page prepared for you will look.",
        ],
        note: "Result: Your customers find you, trust you, browse your menu, and reach you easily. All on a single page prepared in your brand's voice.",
        live: true,
        linkUrl: "https://restaurant-qr-menu-two.vercel.app",
        tags: [
          "Next.js",
          "Custom Design",
          "Brand Identity",
          "QR Menu Integration",
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
          "Restoranlar, kafeler ve yiyecek-içecek işletmeleri için modern bir dijital menü hizmeti. Müşterileriniz menünüze kendi cihazından anında ulaşır. Siz de menünüzü, stoğunuzu ve markanızın görünümünü tek bir yönetim panelinden, kod yazmadan yönetirsiniz.",
        features: [],
        featureGroups: [
          {
            title: "Müşteri tarafı",
            items: [
              "Telefon, tablet ve bilgisayarda uyumlu (responsive) tasarım",
              "Her işletmeye özel menü adresi (/isletme-adi) ve kategori bazlı sayfalar (/isletme-adi/kategori)",
              "Görselli kategori kartlarıyla kolay gezinme",
              "Ürün kartında içindekiler, alerjen bilgisi, hazırlanma süresi ve kalori",
              "İşletmeye özel açılış sayfası: tanıtım, öne çıkan ürünler, iletişim, adres, çalışma saatleri ve sosyal medya bağlantıları",
              "Fiyatları isteğe bağlı gösterme veya gizleme, para birimi seçimi",
              "İşletmenin renklerine uyan, markalı 404 sayfası",
            ],
          },
          {
            title: "Yönetim paneli",
            items: [
              "Her işletmeye ait ayrı, güvenli giriş (e-posta ve şifre)",
              "\"Şifremi unuttum\" akışı: e-postayla tek kullanımlık, süreli bağlantı",
              "Kategori ve ürün ekleme, düzenleme, silme, sıralama, aktif/pasif yapma, arama ve sayfalama",
              "Ürün başına görsel, açıklama, fiyat, kalori, hazırlanma süresi, alerjen ve içerik tanımlama",
              "Alerjen listesini yönetme",
              "İşletme bilgilerini düzenleme: logo, kapak görseli, telefon, adres, çalışma saatleri, sosyal medya",
              "Panelden destek talebi gönderme",
            ],
          },
          {
            title: "Stok takibi",
            items: [
              "Stok kalemlerini miktar ve birimle takip etme",
              "Ürünleri bu kalemlerden oluşan reçetelerle bağlama",
              "Satış kaydedildiğinde stoğun otomatik düşmesi, yetersiz stokta uyarı",
              "Stok listesini Excel olarak dışa aktarma",
            ],
          },
          {
            title: "Marka kimliği",
            items: [
              "Renk paleti (ana, ikincil, arka plan, yazı, vurgu vb.) ve başlık/yazı fontu seçimi",
              "Renklerin okunabilirliği için kontrast kontrolü",
              "Önceki tasarıma tek tıkla geri dönme",
            ],
          },
          {
            title: "Toplu işlemler",
            items: [
              "Ürün, kategori, alerjen ve stok için hazır Excel şablonları",
              "Menüyü Excel'den tek seferde içe aktarma",
            ],
          },
        ],
        live: true,
        linkUrl: "",
        links: [
          { label: "Menüyü Görüntüle", url: "https://restaurant-qr-menu-two.vercel.app/qr-menu" },
          { label: "Yönetim Paneli", url: "https://restaurant-qr-menu-two.vercel.app/qr-menu/business" },
        ],
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
        name: "3D ve İnteraktif E-Ticaret Sitesi Tasarımı",
        description:
          "Ürününüzü fotoğraf galerisine hapsetmeyin. Müşteriniz ürünü tarayıcıda 3D olarak döndürsün, her açıdan incelesin, rengini anında değiştirsin ve aynı sayfadan sepete eklesin. Markanıza özel, akıcı ve akılda kalan bir alışveriş deneyimi tasarlıyor ve kodluyorum.",
        features: [],
        featureGroups: [
          {
            title: "Müşteri tarafı",
            items: [
              "Gerçek zamanlı 3D ürün görüntüleme: sürükleyerek çevirme, her açıdan inceleme",
              "Kaydırmaya duyarlı sahneler: sayfa aşağı indikçe ürün kendiliğinden dönüp yaklaşır, detay, taban ve renk bölümlerinde farklı bir poz alır",
              "Ürünü hiç yeniden yüklemeden anlık renk seçimi, sayfa arka planı ve yazı renkleri de seçilen renge göre değişir",
              "Kategori seçimi (ör. erkek/kadın) ve ona göre değişen model, metin ve ürün listesi",
              "Beden seçimi, sepete ekleme, sepet çekmecesi, adet değiştirme ve toplam tutar",
              "Ürün özellikleri, öne çıkan detaylar ve teknik bilgiler için sahneyle uyumlu bölümler",
              "İndirimli fiyat gösterimi ve ürün kartlarından oluşan katalog",
              "Yumuşak kaydırma (smooth scroll) ve sayfa geçişlerinde akıcı animasyonlar",
              "Telefon, tablet ve bilgisayarda uyumlu (responsive) tasarım",
              "Klavye ve ekran okuyucu desteği gibi erişilebilirlik detayları",
            ],
          },
          {
            title: "Marka kimliği",
            items: [
              "Renk paleti, tipografi ve sayfa atmosferi markanıza göre baştan tasarlanır",
              "Her ürün rengi için ayrı sahne renkleri",
              "Şablon kullanmadan, ürününüze özel kurgulanmış sayfa akışı",
            ],
          },
          {
            title: "Teknik altyapı",
            items: [
              "Next.js, React, Three.js ve React Three Fiber ile modern, hızlı ve geliştirilebilir yapı",
              "Ürün modelinizin (GLB/3D dosyası) siteye uygun şekilde hazırlanması ve optimize edilmesi",
              "Hazır 3D modeliniz yoksa, ürün fotoğraflarından veya tasarım dosyalarından modelleme yönlendirmesi",
              "Hızlı yüklenme için görsel ve model optimizasyonu",
            ],
          },
          {
            title: "İhtiyaca göre eklenebilecekler",
            items: [
              "Ödeme altyapısı entegrasyonu",
              "Ürün, stok ve sipariş yönetim paneli",
              "Çoklu dil ve para birimi",
              "Ürün ekleme ve düzenleme için içerik yönetim sistemi",
            ],
          },
          {
            title: "Kimler için uygun?",
            items: [
              "Ayakkabı, saat, mobilya, elektronik, aksesuar gibi şekli, dokusu ve detayları satışı etkileyen ürünler satan markalar için. Rakiplerinizden ilk saniyede ayrışmak ve ürününüzü \"gezdirerek\" anlatmak istiyorsanız bu hizmet tam size göre.",
            ],
          },
        ],
        live: true,
        linkUrl: "https://marketing-omega-ten-91.vercel.app",
        tags: [
          "Next.js",
          "React",
          "Three.js",
          "React Three Fiber",
          "3D",
          "E-Commerce",
        ],
      },
      {
        name: "İşletmenize Özel İnteraktif Tanıtım Sayfası",
        description:
          "İşletmenizi internette ilk gören kişi, daha mekâna gelmeden size dair bir fikir edinir. Ben de işletmeler için modern, interaktif ve markanıza özel tanıtım sayfaları tasarlıyorum. Sayfa sıradan bir bilgi sayfası olmaz. Ziyaretçiyi ilk saniyeden içine çeker ve işletmenizi akılda kalıcı kılar.",
        features: [],
        featureGroups: [
          {
            title: "Ziyaretçi deneyimi",
            items: [
              "Sayfa kaydırdıkça hareket eden, canlı ve akıcı animasyonlarla açılır.",
              "Ürünlerinizi, hizmetlerinizi ve güçlü yanlarınızı görsel ağırlıklı, anlaşılır bölümlerle sunar.",
              "Telefon, tablet ve bilgisayarda sorunsuz çalışır.",
              "Adres, çalışma saatleri ve telefon bilgisine tek dokunuşla ulaşılır. Haritada yol tarifi alınır, telefonla arama yapılır.",
              "İsterseniz QR menü ve sosyal medya bağlantıları da sayfaya eklenir.",
            ],
          },
          {
            title: "İşletmenize özel",
            items: [
              "Renkler, görseller, metinler ve içerik markanıza göre baştan tasarlanır.",
              "İşletme bilgileriniz tek yerden yönetilir ve sayfanın her bölümüne yansır.",
              "Sektörünüze göre uyarlanır: restoran, kafe, kuaför, butik, ofis ve daha fazlası.",
            ],
          },
          {
            title: "Nasıl çalışıyoruz",
            items: [
              "İşletmenizi, hedef kitlenizi ve ihtiyaçlarınızı dinlerim.",
              "Markanıza uygun tasarımı hazırlarım.",
              "Onayınızla sayfayı yayına alırım.",
            ],
          },
        ],
        note: "Not: Burada gösterdiğim çalışma bir prototiptir. Tasarım dilini, animasyonları ve sayfa akışını gösterir. Nihai sayfa, sizin içerik, görsel ve ihtiyaçlarınıza göre şekillenir.",
        live: true,
        linkUrl: "https://interactive-business-project.vercel.app",
        tags: [
          "Next.js",
          "TypeScript",
          "Custom Design",
          "Animations",
          "SEO",
          "Responsive Design",
        ],
      },
      {
        name: "Markanıza Özel, Profesyonel İşletme Sitesi",
        description:
          "Menünüz kadar işletmenizin kendisi de çevrimiçi iyi görünmeli. Restoran, kafe, fırın, pastane ve tüm yiyecek-içecek işletmeleri için, marka kimliğinize göre şekillenen modern bir tanıtım sayfası hazırlıyoruz. Gördüğünüz sayfa bir örnektir. İçerik, renk ve bölümler işletmenize göre baştan kurulabilir.",
        features: [
          "Size özel görünüm: Renkler, yazı tipleri ve logo markanıza uyarlanır. Sayfa sizin işletmenizin sayfası gibi görünür.",
          "Güçlü bir ilk izlenim: Etkileyici bir başlık, kısa bir tanıtım metni ve doğrudan menüye ya da iletişime yönlendiren butonlarla ziyaretçi ilk ekranda ne sunduğunuzu anlar.",
          "Hikâyenizi anlatan bölümler: İşletmenizi öne çıkaran yönleri (kalite, hizmet, deneyim gibi), öne çıkan ürünleri ve çalışma şeklinizi anlatan bölümler eklenir. Hangi bölümlerin olacağı işletmeye göre belirlenir.",
          "QR menü ile bağlantılı: Ziyaretçi, sayfadan tek tıkla güncel dijital menünüze geçebilir.",
          "Kolay ulaşım: Adres, çalışma saatleri, telefon, e-posta ve sosyal medya hesapları net biçimde yer alır. Müşteri tek dokunuşla arayabilir veya yol tarifi alabilir.",
          "Her cihazda uyumlu: Telefon, tablet ve bilgisayarda düzgün çalışır, mobilde kullanımı kolay bir menüye sahiptir.",
          "Hızlı ve düzenli: Sayfa hızlı açılır, bilgileriniz değiştiğinde güncel kalır.",
          "Esnek yapı: Bölümler eklenebilir, çıkarılabilir veya yeniden düzenlenebilir. Bu örnek, sizin için hazırlanacak sayfanın nasıl görüneceğini gösteren bir başlangıç noktasıdır.",
        ],
        note: "Sonuç: Müşterileriniz sizi bulur, güvenir, menünüzü inceler ve size kolayca ulaşır. Hepsi markanızın diliyle hazırlanmış tek bir sayfada.",
        live: true,
        linkUrl: "https://restaurant-qr-menu-two.vercel.app",
        tags: [
          "Next.js",
          "Custom Design",
          "Brand Identity",
          "QR Menu Integration",
          "SEO",
          "Responsive Design",
        ],
      },
    ],
  },
} as const;
