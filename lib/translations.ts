//languages
export const languages = [
  { code: "tr", label: "Türkçe" },
  { code: "en", label: "English" },
  { code: "de", label: "Deutsch" },
  { code: "ru", label: "Русский" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "pl", label: "Polski" },
  { code: "it", label: "Italiano" },
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
  },
  en: {
    skills: "Skills",
    experience: "Experience",
    education: "Education",
    projects: "My Projects",
    about: "About",
    contact: "Contact",
    resume: "Resume",
  },
  de: {
    skills: "Fähigkeiten",
    experience: "Erfahrung",
    education: "Ausbildung",
    projects: "Meine Projekte",
    about: "Über mich",
    contact: "Kontakt",
    resume: "Lebenslauf",
  },
  ru: {
    skills: "Навыки",
    experience: "Опыт",
    education: "Образование",
    projects: "Мои проекты",
    about: "Обо мне",
    contact: "Контакты",
    resume: "Резюме",
  },
  es: {
    skills: "Habilidades",
    experience: "Experiencia",
    education: "Educación",
    projects: "Mis Proyectos",
    about: "Sobre mí",
    contact: "Contacto",
    resume: "Currículum",
  },
  fr: {
    skills: "Compétences",
    experience: "Expérience",
    education: "Formation",
    projects: "Mes Projets",
    about: "À propos",
    contact: "Contact",
    resume: "CV",
  },
  pl: {
    skills: "Umiejętności",
    experience: "Doświadczenie",
    education: "Edukacja",
    projects: "Moje Projekty",
    about: "O mnie",
    contact: "Kontakt",
    resume: "CV",
  },
  it: {
    skills: "Competenze",
    experience: "Esperienza",
    education: "Formazione",
    projects: "I Miei Progetti",
    about: "Chi sono",
    contact: "Contatto",
    resume: "Curriculum",
  },
} as const;

//footer translations

export const footerTranslations = {
  tr: {
    role: "Full-Stack Developer",
    contact: "İletişim",
    skills: "Yetenekler",
    education: "Eğitim",
    experience: "Deneyim",
    backend: "Back-End",
    frontend: "Front-End",
    database: "Veritabanı",
    cloud: "Bulut & Araçlar",
    email: "E-posta",
    myprojects: "Projelerim",
    about: "Hakkımda",
  },
  en: {
    role: "Full-Stack Developer",
    contact: "Contact",
    skills: "Skills",
    education: "Education",
    experience: "Experience",
    backend: "Back-End",
    frontend: "Front-End",
    database: "Database",
    cloud: "Cloud & Tools",
    email: "Email",
    myprojects: "My Projects",
    about: "About",
  },
  de: {
    role: "Full-Stack Developer",
    contact: "Kontakt",
    skills: "Fähigkeiten",
    education: "Ausbildung",
    experience: "Erfahrung",
    backend: "Back-End",
    frontend: "Front-End",
    database: "Datenbank",
    cloud: "Cloud & Tools",
    email: "E-Mail",
    myprojects: "Meine Projekte",
    about: "Um",
  },
  ru: {
    role: "Full-Stack Developer",
    contact: "Контакты",
    skills: "Навыки",
    education: "Образование",
    experience: "Опыт",
    backend: "Back-End",
    frontend: "Front-End",
    database: "База данных",
    cloud: "Облако и инструменты",
    email: "Почта",
    myprojects: "Мои проекты",
    about: "О",
  },
  es: {
    role: "Full-Stack Developer",
    contact: "Contacto",
    skills: "Habilidades",
    education: "Educación",
    experience: "Experiencia",
    backend: "Back-End",
    frontend: "Front-End",
    database: "Base de datos",
    cloud: "Nube y herramientas",
    email: "Correo",
    myprojects: "Mis Proyectos",
    about: "Acerca de",
  },
  fr: {
    role: "Full-Stack Developer",
    contact: "Contact",
    skills: "Compétences",
    education: "Formation",
    experience: "Expérience",
    backend: "Back-End",
    frontend: "Front-End",
    database: "Base de données",
    cloud: "Nuage et outils",
    email: "Email",
    myprojects: "Mes Projets",
    about: "À propos",
  },
  pl: {
    role: "Full-Stack Developer",
    contact: "Kontakt",
    skills: "Umiejętności",
    education: "Edukacja",
    experience: "Doświadczenie",
    backend: "Back-End",
    frontend: "Front-End",
    database: "Baza danych",
    cloud: "Chmura i narzędzia",
    email: "Email",
    myprojects: "Moje projekty",
    about: "O",
  },
  it: {
    role: "Full-Stack Developer",
    contact: "Contatto",
    skills: "Competenze",
    education: "Formazione",
    experience: "Esperienza",
    backend: "Back-End",
    frontend: "Front-End",
    database: "Banca dati",
    cloud: "Nuvola e strumenti",
    email: "Email",
    myprojects: "I miei progetti",
    about: "Di",
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
      experience: { num: "2+", label: "Years of Experience" },
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
      tag: "Full-Stack Developer",
      heading: "Modern full-stack mimari\ngeliştirme",
      role: "Full-Stack Developer • Mehmet Demir",
      description:
        "{Node.js}, {Express.js}, {NestJs}, {C#/.NET}, {React}, {Next.js} kullanarak; ölçeklenebilir ve yüksek performanslı web uygulamaları geliştiriyor; güçlü backend mimarisine, temiz frontend sistemlerine ve verimli, sürdürülebilir geliştirme iş akışlarına odaklanıyorum.",
      highlights: ["Node.js", "Express.js", "C#/.NET", "React", "Next.js"],
      btnExplore: "Deneyimlerimi Keşfedin",
      btnContact: "Benimle İletişime Geçin",
    },

    // Stats Bar
    stats: {
      experience: { num: "2+", label: "Yıl Deneyim" },
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
          role: "Full-Stack Developer",
          type: "Full Time",
          period: "Şubat 2026 — Mayıs 2026",
          current: false,
        },
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Part Time",
          period: "Ağustos 2025 — Şubat 2026",
          current: false,
        },
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Intern",
          period: "Haziran 2025 — Temmuz 2025",
          current: false,
        },
        {
          company: "Ottopus A.Ş",
          role: "Full-Stack Developer",
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
      subtitle: "Full-Stack Developer Genel Bakış",
      items: [
        {
          title: "Full-Stack Developer Mehmet Demir Kimdir?",
          content: `Bakırçay Üniversitesi Bilgisayar Mühendisliği mezunu Full-Stack Developer Mehmet Demir'im. Uzmanlığım modern web teknolojileri, mobil uygulama geliştirme ve SQL tabanlı veritabanı tasarımını kapsamaktadır. Son 3 yılı aşkın süredir, hem bireysel hem de dinamik ekipler içinde çalışarak birden fazla projeyi başarıyla geliştirip teslim ettim. Yüksek performanslı, ölçeklenebilir ve kullanıcı odaklı çözümler üretme konusunda tutkuluyum ve yeni gelişen teknolojilerdeki bilgimi sürekli genişletmeye çalışıyorum.`,
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
  de: {
    // Hero Section
    hero: {
      tag: "Full-Stack Developer",
      heading: "Entwicklung moderner\nFull-Stack-Architektur",
      role: "Full-Stack Developer • Mehmet Demir",
      description:
        "Ich entwickle skalierbare und hochperformante Webanwendungen mit {Node.js}, {Express.js}, {NestJs}, {C#/.NET}, {React}, {Next.js}, mit Fokus auf robuste Backend-Architektur, saubere Frontend-Systeme und effiziente, wartbare Entwicklungs-Workflows.",
      highlights: ["Node.js", "Express.js", "C#/.NET", "React", "Next.js"],
      btnExplore: "Meine Erfahrung entdecken",
      btnContact: "Kontaktieren Sie mich",
    },

    // Stats Bar
    stats: {
      experience: { num: "2+", label: "Jahre Erfahrung" },
      technologies: { num: "30+", label: "Technologien" },
      projects: { num: "20+", label: "Projekte" },
    },

    // Skills Section
    skills: {
      tag: "Sachverstand",
      title: "Kerntechnologien",
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
      tag: "Karriere",
      title: "Berufserfahrung",
      description:
        "Nachgewiesene praktische Erfahrung in Praktika, Teilzeit- und Vollzeit-Rollen als Full-Stack Developer, Umsetzung von praxisnahen Lösungen und Mitwirkung an Systemen auf Production-Ebene.",
      activeBadge: "Aktuelle Position",
      items: [
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Vollzeit",
          period: "Februar 2026 — Mai 2026",
          current: false,
        },
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Teilzeit",
          period: "August 2025 — Februar 2026",
          current: false,
        },
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Praktikant",
          period: "Juni 2025 — Juli 2025",
          current: false,
        },
        {
          company: "Ottopus A.Ş",
          role: "Full-Stack Developer",
          type: "Praktikant",
          period: "Juli 2024 — Juni 2025",
          current: false,
        },
      ],
    },

    // Education Section
    education: {
      tag: "Bildung",
      title: "Akademischer Hintergrund",
      items: [
        {
          school: "İzmir Bakırçay Universität",
          period: "2022 — 2026",
        },
        {
          school: "Fatma Saygın Anadolu Gymnasium",
          period: "2017 — 2021",
        },
      ],
    },

    // About Section
    about: {
      tag: "Über mich",
      title: "Über mich",
      subtitle: "Full-Stack Developer Überblick",
      items: [
        {
          title: "Wer ist Full-Stack Developer Mehmet Demir?",
          content: `Ich bin Full-Stack Developer Mehmet Demir mit einem Abschluss in Computer Engineering von der Bakırçay Universität. Meine Expertise umfasst moderne Webtechnologien, mobile App-Entwicklung und SQL-basiertes Datenbankdesign. In den letzten 3+ Jahren habe ich erfolgreich zahlreiche Projekte entwickelt und ausgeliefert, wobei ich sowohl individuell als auch in dynamischen Teams gearbeitet habe. Meine Leidenschaft gilt dem Aufbau hochperformanter, skalierbarer und benutzerzentrierter Lösungen, und ich strebe ständig danach, mein Wissen in neuen Technologien zu erweitern.`,
        },
        {
          title: "Front-End Development Entwicklungskompetenz",
          content:
            "Ich spezialisiere mich auf Front-End Development mit HTML, CSS, JavaScript, React und Next.js und erstelle skalierbare, hochperformante und visuell ansprechende Benutzeroberflächen, die eine nahtlose User Experience bieten.",
        },
        {
          title: "Back-End Entwicklungskompetenz",
          content:
            "Ich entwickle Back-End-Systeme mit Node.js, Express.js, NestJs und C#/.NET und entwerfe skalierbare Architekturen sowie hochperformante APIs mit starkem Fokus auf Wartbarkeit, Sicherheit und Clean-Code-Praktiken.",
        },
        {
          title: "Mobile Entwicklungskompetenz",
          content:
            "In der mobilen App-Entwicklung arbeite ich hauptsächlich mit React Native und nutze die enge Verbindung zu React, um Anwendungen schneller und effizienter zu entwickeln und dabei eine konsistente Entwicklungserfahrung beizubehalten.",
        },
        {
          title: "DevOps & Cloud Expertise",
          content: `Ich konzentriere mich auf den Einsatz moderner Plattformen, um reale Anwendungen effizient zu erstellen, bereitzustellen und zu verwalten. Ich verfüge über praktische Erfahrung mit AWS-Services wie EC2, RDS, Amplify und Route 53, was mir ermöglicht, skalierbare cloudbasierte Systeme zu entwickeln.\n\nZudem nutze ich Plattformen wie Vercel und Hostinger für schnelle und zuverlässige Deployments. Ergänzend setze ich auf Git-basierte Workflows, um Live-Anwendungen sicher zu aktualisieren und Stabilität, Continuous Delivery sowie minimale Ausfallzeiten zu gewährleisten.`,
        },
      ],
    },

    // Contact Section
    contact: {
      tag: "Kontakt",
      title: "Lassen Sie uns vernetzen",
      description:
        "Verfügbar für Kooperationen, Vollzeitangebote und die Arbeit an bedeutungsvollen Produkten.",
      email: "demirmehmet226648@gmail.com",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  ru: {
    // Hero Section
    hero: {
      tag: "Full-Stack Developer",
      heading: "Разработка современной\nfull-stack архитектуры",
      role: "Full-Stack Developer • Mehmet Demir",
      description:
        "Я создаю масштабируемые и высокопроизводительные веб-приложения с использованием {Node.js}, {Express.js}, {NestJs}, {C#/.NET}, {React}, {Next.js}, уделяя особое внимание надежной архитектуре backend, чистым системам frontend и эффективным, поддерживаемым процессам разработки.",
      highlights: ["Node.js", "Express.js", "C#/.NET", "React", "Next.js"],
      btnExplore: "Посмотреть мой опыт",
      btnContact: "Связаться со мной",
    },

    // Stats Bar
    stats: {
      experience: { num: "2+", label: "Лет опыта" },
      technologies: { num: "30+", label: "Технологий" },
      projects: { num: "20+", label: "Проектов" },
    },

    // Skills Section
    skills: {
      tag: "Экспертиза",
      title: "Ключевые технологии",
      description:
        "Комплексный и сбалансированный стек технологий, охватывающий backend инженерию, frontend архитектуру, проектирование баз данных и облачную инфраструктуру, что позволяет разрабатывать масштабируемые, высокопроизводительные и готовые к работе приложения.",
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
      tag: "Карьера",
      title: "Профессиональный опыт",
      description:
        "Подтвержденный практический опыт работы на стажировках, частичной и полной занятости в качестве full-stack разработчика, создание реальных решений и вклад в системы уровня production.",
      activeBadge: "Текущая роль",
      items: [
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Полная занятость",
          period: "Февраль 2026 — Май 2026",
          current: false,
        },
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Частичная занятость",
          period: "Август 2025 — Февраль 2026",
          current: false,
        },
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Стажер",
          period: "Июнь 2025 — Июль 2025",
          current: false,
        },
        {
          company: "Ottopus A.Ş",
          role: "Full-Stack Developer",
          type: "Стажер",
          period: "Июль 2024 — Июнь 2025",
          current: false,
        },
      ],
    },

    // Education Section
    education: {
      tag: "Образование",
      title: "Академическое образование",
      items: [
        {
          school: "Университет Измир Бакырчай",
          period: "2022 — 2026",
        },
        {
          school: "Анатолийская средняя школа имени Фатмы Сайгын",
          period: "2017 — 2021",
        },
      ],
    },

    // About Section
    about: {
      tag: "Обо мне",
      title: "Обо мне",
      subtitle: "Обзор Full-Stack разработчика",
      items: [
        {
          title: "Кто такой Full-Stack разработчик Mehmet Demir?",
          content: `Я Mehmet Demir, Full-Stack разработчик со степенью в области компьютерной инженерии Университета Бакырчай. Моя экспертиза включает современные веб-технологии, разработку мобильных приложений и проектирование баз данных на основе SQL. За последние 3+ года я успешно разработал и реализовал множество проектов, работая как индивидуально, так и в динамичных командах. Я увлечен созданием высокопроизводительных, масштабируемых и ориентированных на пользователя решений и постоянно стремлюсь расширять свои знания в области новых технологий.`,
        },
        {
          title: "Экспертиза в Front-End разработке",
          content:
            "Я специализируюсь на front-end разработке с использованием HTML, CSS, JavaScript, React и Next.js, создавая масштабируемые, высокопроизводительные и визуально привлекательные пользовательские интерфейсы, обеспечивающие бесшовный пользовательский опыт.",
        },
        {
          title: "Экспертиза в Back-End разработке",
          content:
            "Я разрабатываю back-end системы с использованием Node.js, Express.js, NestJs и C#/.NET, проектируя масштабируемые архитектуры и высокопроизводительные API с упором на удобство сопровождения, безопасность и практику чистого кода.",
        },
        {
          title: "Экспертиза в мобильной разработке",
          content:
            "В разработке мобильных приложений я в основном работаю с React Native, используя его тесную связь с React для более быстрой и эффективной разработки приложений при сохранении согласованного процесса разработки.",
        },
        {
          title: "Экспертиза в DevOps и облачных технологиях",
          content: `Я фокусируюсь на использовании современных платформ для эффективного создания, развертывания и управления реальными приложениями. У меня есть практический опыт работы с сервисами AWS, такими как EC2, RDS, Amplify и Route 53, что позволяет мне разрабатывать масштабируемые облачные системы.\n\nЯ также использую такие платформы, как Vercel и Hostinger, для быстрого и надежного развертывания. Кроме того, я полагаюсь на рабочие процессы на основе Git для безопасного обновления работающих приложений, обеспечивая стабильность, непрерывную доставку и минимальное время простоя.`,
        },
      ],
    },

    // Contact Section
    contact: {
      tag: "Контакт",
      title: "Связаться со мной",
      description:
        "Открыт для сотрудничества, предложений о полной занятости и работы над значимыми продуктами.",
      email: "demirmehmet226648@gmail.com",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  es: {
    // Hero Section
    hero: {
      tag: "Full-Stack Developer",
      heading: "Desarrollo de arquitectura\nfull-stack moderna",
      role: "Full-Stack Developer • Mehmet Demir",
      description:
        "Desarrollo aplicaciones web escalables y de alto rendimiento utilizando {Node.js}, {Express.js}, {NestJs}, {C#/.NET}, {React}, {Next.js}, centrándome en una arquitectura backend robusta, sistemas frontend limpios y flujos de trabajo de desarrollo eficientes y mantenibles.",
      highlights: ["Node.js", "Express.js", "C#/.NET", "React", "Next.js"],
      btnExplore: "Explorar mi experiencia",
      btnContact: "Contáctame",
    },

    // Stats Bar
    stats: {
      experience: { num: "2+", label: "Años de Experiencia" },
      technologies: { num: "30+", label: "Tecnologías" },
      projects: { num: "20+", label: "Proyectos" },
    },

    // Skills Section
    skills: {
      tag: "Experiencia",
      title: "Tecnologías Principales",
      description:
        "Un stack integral y equilibrado que abarca ingeniería de backend, arquitectura de frontend, diseño de bases de datos e infraestructura en la nube, permitiendo el desarrollo de aplicaciones escalables, de alto rendimiento y listas para producción.",
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
      tag: "Carrera",
      title: "Experiencia Profesional",
      description:
        "Experiencia práctica demostrada en prácticas, roles de desarrollo full-stack a tiempo parcial y tiempo completo, entregando soluciones del mundo real y contribuyendo a sistemas a nivel de producción.",
      activeBadge: "Rol Activo",
      items: [
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Tiempo Completo",
          period: "Febrero 2026 — Mayo de 2026",
          current: false,
        },
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Tiempo Parcial",
          period: "Agosto 2025 — Febrero 2026",
          current: false,
        },
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Pasante",
          period: "Junio 2025 — Julio 2025",
          current: false,
        },
        {
          company: "Ottopus A.Ş",
          role: "Full-Stack Developer",
          type: "Pasante",
          period: "Julio 2024 — Junio 2025",
          current: false,
        },
      ],
    },

    // Education Section
    education: {
      tag: "Educación",
      title: "Antecedentes Académicos",
      items: [
        {
          school: "Universidad İzmir Bakırçay",
          period: "2022 — 2026",
        },
        {
          school: "Escuela Secundaria Anadolu Fatma Saygın",
          period: "2017 — 2021",
        },
      ],
    },

    // About Section
    about: {
      tag: "Sobre mí",
      title: "Sobre mí",
      subtitle: "Resumen de Full-Stack Developer",
      items: [
        {
          title: "¿Quién es el Full-Stack Developer Mehmet Demir?",
          content: `Soy Mehmet Demir, Full-Stack Developer graduado en Ingeniería Informática por la Universidad de Bakırçay. Mi experiencia incluye tecnologías web modernas, desarrollo de aplicaciones móviles y diseño de bases de datos basadas en SQL. Durante los últimos 3+ años, he desarrollado y entregado con éxito múltiples proyectos, trabajando tanto individualmente como en equipos dinámicos. Me apasiona crear soluciones de alto rendimiento, escalables y centradas en el usuario, y me esfuerzo continuamente por ampliar mis conocimientos en tecnologías emergentes.`,
        },
        {
          title: "Experiencia en Desarrollo Frontend",
          content:
            "Me especializo en el desarrollo frontend utilizando HTML, CSS, JavaScript, React y Next.js, creando interfaces de usuario escalables, de alto rendimiento y visualmente atractivas que ofrecen una experiencia de usuario fluida.",
        },
        {
          title: "Experiencia en Desarrollo Backend",
          content:
            "Desarrollo sistemas backend utilizando Node.js, Express.js, NestJs y C#/.NET, diseñando arquitecturas escalables y APIs de alto rendimiento con un fuerte énfasis en la mantenibilidad, la seguridad y las prácticas de código limpio.",
        },
        {
          title: "Experiencia en Desarrollo Móvil",
          content:
            "En el desarrollo de aplicaciones móviles, trabajo principalmente con React Native, aprovechando su estrecha alineación con React para desarrollar aplicaciones de forma más rápida y eficiente, manteniendo una experiencia de desarrollo constante.",
        },
        {
          title: "Experiencia en DevOps y Cloud",
          content: `Me enfoco en el uso de plataformas modernas para construir, desplegar y gestionar aplicaciones del mundo real de manera eficiente. Tengo experiencia práctica con servicios de AWS como EC2, RDS, Amplify y Route 53, lo que me permite desarrollar sistemas escalables basados en la nube.\n\nTambién utilizo plataformas como Vercel y Hostinger para despliegues rápidos y fiables. Además, confío en los flujos de trabajo basados en Git para actualizar de forma segura las aplicaciones en vivo, garantizando la estabilidad, la entrega continua y un tiempo de inactividad mínimo.`,
        },
      ],
    },

    // Contact Section
    contact: {
      tag: "Contacto",
      title: "Ponerse en contacto",
      description:
        "Disponible para colaboraciones, oportunidades a tiempo completo y proyectos de productos significativos.",
      email: "demirmehmet226648@gmail.com",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  fr: {
    // Hero Section
    hero: {
      tag: "Full-Stack Developer",
      heading: "Développement d'architectures\nfull-stack modernes",
      role: "Full-Stack Developer • Mehmet Demir",
      description:
        "Je conçois des applications web évolutives et performantes avec {Node.js}, {Express.js}, {NestJs}, {C#/.NET}, {React}, {Next.js}, en mettant l'accent sur une architecture backend robuste, des systèmes frontend épurés et des workflows de développement efficaces et maintenables.",
      highlights: ["Node.js", "Express.js", "C#/.NET", "React", "Next.js"],
      btnExplore: "Découvrir mon expérience",
      btnContact: "Me contacter",
    },

    // Stats Bar
    stats: {
      experience: { num: "2+", label: "Années d'expérience" },
      technologies: { num: "30+", label: "Technologies" },
      projects: { num: "20+", label: "Projets" },
    },

    // Skills Section
    skills: {
      tag: "Expertise",
      title: "Technologies Clés",
      description:
        "Un stack complet et équilibré couvrant l'ingénierie backend, l'architecture frontend, la conception de bases de données et l'infrastructure cloud, permettant le développement d'applications évolutives, performantes et prêtes pour la production.",
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
      tag: "Carrière",
      title: "Expérience Professionnelle",
      description:
        "Une expérience pratique confirmée à travers des stages, des rôles à temps partiel et à plein temps en développement full-stack, apportant des solutions concrètes et contribuant à des systèmes de production.",
      activeBadge: "Poste Actuel",
      items: [
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Temps plein",
          period: "Février 2026 — Mai 2026",
          current: false,
        },
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Temps partiel",
          period: "Août 2025 — Février 2026",
          current: false,
        },
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Stagiaire",
          period: "Juin 2025 — Juillet 2025",
          current: false,
        },
        {
          company: "Ottopus A.Ş",
          role: "Full-Stack Developer",
          type: "Stagiaire",
          period: "Juillet 2024 — Juin 2025",
          current: false,
        },
      ],
    },

    // Education Section
    education: {
      tag: "Éducation",
      title: "Parcours Académique",
      items: [
        {
          school: "Université İzmir Bakırçay",
          period: "2022 — 2026",
        },
        {
          school: "Lycée Anadolu Fatma Saygın",
          period: "2017 — 2021",
        },
      ],
    },

    // About Section
    about: {
      tag: "À propos",
      title: "À propos de moi",
      subtitle: "Aperçu Full-Stack Developer",
      items: [
        {
          title: "Qui est Mehmet Demir, Full-Stack Developer ?",
          content: `Je suis Mehmet Demir, développeur Full-Stack diplômé en génie informatique de l'université Bakırçay. Mon expertise englobe les technologies web modernes, le développement d'applications mobiles et la conception de bases de données SQL. Au cours des 3 dernières années, j'ai développé et livré avec succès de nombreux projets, travaillant aussi bien de manière autonome qu'au sein d'équipes dynamiques. Je suis passionné par la création de solutions performantes, évolutives et centrées sur l'utilisateur, et je m'efforce continuellement d'élargir mes connaissances dans les technologies émergentes.`,
        },
        {
          title: "Expertise en Développement Front-End",
          content:
            "Je me spécialise dans le développement front-end avec HTML, CSS, JavaScript, React et Next.js, créant des interfaces utilisateur évolutives, performantes et visuellement attrayantes qui offrent une expérience utilisateur fluide.",
        },
        {
          title: "Expertise en Développement Back-End",
          content:
            "Je développe des systèmes back-end avec Node.js, Express.js, NestJs et C#/.NET, en concevant des architectures évolutives et des API performantes, avec un accent particulier sur la maintenabilité, la sécurité et les pratiques de code propre.",
        },
        {
          title: "Expertise en Développement Mobile",
          content:
            "Pour le développement d'applications mobiles, je travaille principalement avec React Native, profitant de sa proximité avec React pour développer des applications plus rapidement et plus efficacement tout en conservant une expérience de développement cohérente.",
        },
        {
          title: "Expertise DevOps & Cloud",
          content: `Je me concentre sur l'utilisation de plateformes modernes pour construire, déployer et gérer efficacement des applications réelles. J'ai une expérience pratique des services AWS tels qu'EC2, RDS, Amplify et Route 53, me permettant de développer des systèmes cloud évolutifs.\n\nJ'utilise également des plateformes comme Vercel et Hostinger pour des déploiements rapides et fiables. De plus, je m'appuie sur des workflows basés sur Git pour mettre à jour les applications en production en toute sécurité, garantissant stabilité, livraison continue et un temps d'arrêt minimal.`,
        },
      ],
    },

    // Contact Section
    contact: {
      tag: "Contact",
      title: "Prenons contact",
      description:
        "Disponible pour des collaborations, des opportunités à plein temps et des projets de produits significatifs.",
      email: "demirmehmet226648@gmail.com",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  pl: {
    // Hero Section
    hero: {
      tag: "Full-Stack Developer",
      heading: "Tworzenie nowoczesnych\narchitektur full-stack",
      role: "Full-Stack Developer • Mehmet Demir",
      description:
        "Buduję skalowalne i wydajne aplikacje webowe przy użyciu {Node.js}, {Express.js}, {NestJs}, {C#/.NET}, {React}, {Next.js}, koncentrując się na solidnej architekturze backendowej, przejrzystych systemach frontendowych oraz wydajnych i łatwych w utrzymaniu procesach programistycznych.",
      highlights: ["Node.js", "Express.js", "C#/.NET", "React", "Next.js"],
      btnExplore: "Poznaj moje doświadczenie",
      btnContact: "Skontaktuj się ze mną",
    },

    // Stats Bar
    stats: {
      experience: { num: "2+", label: "Lata doświadczenia" },
      technologies: { num: "30+", label: "Technologie" },
      projects: { num: "20+", label: "Projekty" },
    },

    // Skills Section
    skills: {
      tag: "Ekspertyza",
      title: "Kluczowe technologie",
      description:
        "Kompleksowy i zrównoważony stos technologiczny obejmujący inżynierię backendu, architekturę frontendu, projektowanie baz danych oraz infrastrukturę chmurową, umożliwiający tworzenie skalowalnych, wydajnych i gotowych do wdrożenia aplikacji.",
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
      tag: "Kariera",
      title: "Doświadczenie zawodowe",
      description:
        "Udowodnione praktyczne doświadczenie zdobyte podczas staży oraz pracy na część i pełny etat jako full-stack developer, dostarczanie rzeczywistych rozwiązań i wkład w systemy klasy produkcyjnej.",
      activeBadge: "Aktualna rola",
      items: [
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Pełny etat",
          period: "Luty 2026 — Maj 2026",
          current: false,
        },
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Część etatu",
          period: "Sierpień 2025 — Luty 2026",
          current: false,
        },
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Stażysta",
          period: "Czerwiec 2025 — Lipiec 2025",
          current: false,
        },
        {
          company: "Ottopus A.Ş",
          role: "Full-Stack Developer",
          type: "Stażysta",
          period: "Lipiec 2024 — Czerwiec 2025",
          current: false,
        },
      ],
    },

    // Education Section
    education: {
      tag: "Edukacja",
      title: "Wykształcenie Akademickie",
      items: [
        {
          school: "Uniwersytet İzmir Bakırçay",
          period: "2022 — 2026",
        },
        {
          school: "Liceum Ogólnokształcące Fatma Saygın Anadolu",
          period: "2017 — 2021",
        },
      ],
    },

    // About Section
    about: {
      tag: "O mnie",
      title: "O mnie",
      subtitle: "Przegląd profilu Full-Stack Developera",
      items: [
        {
          title: "Kim jest Full-Stack Developer Mehmet Demir?",
          content: `Jestem Full-Stack Developerem, absolwentem inżynierii komputerowej na Uniwersytecie Bakırçay. Moja wiedza obejmuje nowoczesne technologie internetowe, tworzenie aplikacji mobilnych oraz projektowanie baz danych SQL. W ciągu ostatnich ponad 3 lat z powodzeniem opracowałem i dostarczyłem wiele projektów, pracując zarówno indywidualnie, jak i w dynamicznych zespołach. Moją pasją jest budowanie wydajnych, skalowalnych i zorientowanych na użytkownika rozwiązań, a także nieustanne poszerzanie wiedzy o nowe technologie.`,
        },
        {
          title: "Ekspertyza w Front-Endzie",
          content:
            "Specjalizuję się w rozwoju front-endu przy użyciu technologii HTML, CSS, JavaScript, React oraz Next.js, tworząc skalowalne, wydajne i atrakcyjne wizualnie interfejsy użytkownika, które zapewniają płynne doświadczenia (UX).",
        },
        {
          title: "Ekspertyza w Back-Endzie",
          content:
            "Tworzę systemy back-endowe z wykorzystaniem Node.js, Express.js, NestJs oraz C#/.NET, projektując skalowalne architektury i wysokowydajne API, kładąc duży nacisk na łatwość utrzymania, bezpieczeństwo oraz zasady czystego kodu.",
        },
        {
          title: "Ekspertyza w Rozwiązaniach Mobilnych",
          content:
            "W tworzeniu aplikacji mobilnych pracuję głównie z React Native, wykorzystując jego ścisłe powiązanie z biblioteką React, co pozwala na szybsze i bardziej efektywne tworzenie aplikacji przy zachowaniu spójnego procesu programowania.",
        },
        {
          title: "Ekspertyza DevOps i Cloud",
          content: `Skupiam się na wykorzystaniu nowoczesnych platform do wydajnego budowania, wdrażania i zarządzania rzeczywistymi aplikacjami. Posiadam praktyczne doświadczenie z usługami AWS takimi jak EC2, RDS, Amplify oraz Route 53, co pozwala mi na tworzenie skalowalnych systemów chmurowych.\n\nKorzystam również z platform Vercel oraz Hostinger do szybkiego i niezawodnego wdrażania aplikacji. Ponadto opieram się na przepływach pracy (workflows) bazujących na Git, aby bezpiecznie aktualizować aplikacje produkcyjne, zapewniając stabilność, ciągłe dostarczanie (CD) i minimalne przestojów.`,
        },
      ],
    },

    // Contact Section
    contact: {
      tag: "Kontakt",
      title: "Skontaktujmy się",
      description:
        "Jestem dostępny do współpracy, ofert pracy na pełny etat oraz angażujących projektów produktowych.",
      email: "demirmehmet226648@gmail.com",
      linkedin: "LinkedIn",
      github: "GitHub",
    },
  },
  it: {
    // Hero Section
    hero: {
      tag: "Full-Stack Developer",
      heading: "Sviluppo di moderne\narchitetture full-stack",
      role: "Full-Stack Developer • Mehmet Demir",
      description:
        "Sviluppo applicazioni web scalabili e ad alte prestazioni utilizzando {Node.js}, {Express.js}, {NestJs}, {C#/.NET}, {React}, {Next.js}, concentrandomi su un'architettura backend robusta, sistemi frontend puliti e flussi di lavoro efficienti e mantenibili.",
      highlights: ["Node.js", "Express.js", "C#/.NET", "React", "Next.js"],
      btnExplore: "Esplora la mia esperienza",
      btnContact: "Contattami",
    },

    // Stats Bar
    stats: {
      experience: { num: "2+", label: "Anni di Esperienza" },
      technologies: { num: "30+", label: "Tecnologie" },
      projects: { num: "20+", label: "Progetti" },
    },

    // Skills Section
    skills: {
      tag: "Competenze",
      title: "Tecnologie Core",
      description:
        "Uno stack completo e ben bilanciato che spazia dall'ingegneria backend all'architettura frontend, dalla progettazione di database all'infrastruttura cloud, consentendo lo sviluppo di applicazioni scalabili, performanti e pronte per la produzione.",
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
      tag: "Carriera",
      title: "Esperienza Professionale",
      description:
        "Comprovata esperienza pratica attraverso stage, ruoli part-time e full-time come sviluppatore full-stack, fornendo soluzioni reali e contribuendo a sistemi di livello production.",
      activeBadge: "Ruolo Attivo",
      items: [
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Full Time",
          period: "Febbraio 2026 — Maggio 2026",
          current: false,
        },
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Part Time",
          period: "Agosto 2025 — Febbraio 2026",
          current: false,
        },
        {
          company: "Level End Yazılım A.Ş",
          role: "Full-Stack Developer",
          type: "Intern",
          period: "Giugno 2025 — Luglio 2025",
          current: false,
        },
        {
          company: "Ottopus A.Ş",
          role: "Full-Stack Developer",
          type: "Intern",
          period: "Luglio 2024 — Giugno 2025",
          current: false,
        },
      ],
    },

    // Education Section
    education: {
      tag: "Istruzione",
      title: "Percorso Accademico",
      items: [
        {
          school: "Università İzmir Bakırçay",
          period: "2022 — 2026",
        },
        {
          school: "Liceo Scientifico Fatma Saygın Anadolu",
          period: "2017 — 2021",
        },
      ],
    },

    // About Section
    about: {
      tag: "Chi sono",
      title: "Su di me",
      subtitle: "Panoramica come Full-Stack Developer",
      items: [
        {
          title: "Chi è il Full-Stack Developer Mehmet Demir?",
          content: `Sono Mehmet Demir, Full-Stack Developer laureato in Ingegneria Informatica presso l'Università Bakırçay. La mia competenza comprende tecnologie web moderne, sviluppo di applicazioni mobili e progettazione di database SQL. Negli ultimi 3+ anni, ho sviluppato e consegnato con successo molteplici progetti, lavorando sia individualmente che in team dinamici. Sono appassionato nella creazione di soluzioni ad alte prestazioni, scalabili e incentrate sull'utente, e mi impegno costantemente per ampliare le mie conoscenze nelle tecnologie emergenti.`,
        },
        {
          title: "Esperienza nel Sviluppo Front-End",
          content:
            "Mi occupo di sviluppo front-end utilizzando HTML, CSS, JavaScript, React e Next.js, realizzando interfacce utente scalabili, performanti e visivamente accattivanti che offrono un'esperienza utente fluida.",
        },
        {
          title: "Esperienza nel Sviluppo Back-End",
          content:
            "Sviluppo sistemi back-end utilizzando Node.js, Express.js, NestJs e C#/.NET, progettando architetture scalabili e API ad alte prestazioni con una forte enfasi sulla manutenibilità, la sicurezza e le pratiche di clean code.",
        },
        {
          title: "Esperienza nel Sviluppo Mobile",
          content:
            "Per quanto riguarda lo sviluppo di applicazioni mobili, lavoro principalmente con React Native, sfruttando la sua stretta affinità con React per sviluppare applicazioni in modo più rapido ed efficiente, mantenendo un'esperienza di sviluppo coerente.",
        },
        {
          title: "Esperienza DevOps & Cloud",
          content: `Mi concentro sull'utilizzo di piattaforme moderne per costruire, distribuire e gestire applicazioni reali in modo efficiente. Ho esperienza pratica con i servizi AWS come EC2, RDS, Amplify e Route 53, che mi consentono di sviluppare sistemi cloud scalabili.\n\nUtilizzo inoltre piattaforme come Vercel e Hostinger per distribuzioni rapide e affidabili. Inoltre, mi affido a flussi di lavoro basati su Git per aggiornare in sicurezza le applicazioni live, garantendo stabilità, continuous delivery e tempi di inattività minimi.`,
        },
      ],
    },

    // Contact Section
    contact: {
      tag: "Contatti",
      title: "Mettiamoci in contatto",
      description:
        "Disponibile per collaborazioni, opportunità a tempo pieno e progetti di prodotto significativi.",
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
  de: {
    pageTag: "Persönliche Projekte",
    pageTitle: {
      main: "Meine",
      accent: "Projekte",
    },
    pageDesc:
      "Eine Sammlung von Full-Stack-Projekten, die Backend-Systeme, Frontend-Schnittstellen und Cloud-Anwendungen umfassen.",
    stats: {
      total: "Gesamte Projekte",
      live: "Live",
      github: "AUF GITHUB",
    },
    liveBadge: {
      live: "Live",
      github: "Auf Github",
    },
    viewProject: "Projekt ansehen",
    projectList: [
      {
        name: "Dressify (Full-Stack E-Commerce Plattform)",
        description:
          "Eine skalierbare Full-Stack-E-Commerce-Plattform für Mode, die es Nutzern ermöglicht, Produkte nach Marken und Kategorien zu durchsuchen, zu filtern und zu interagieren. Das System bietet sichere JWT-basierte Authentifizierung, OTP-Verifizierung via SMS (Twilio) und E-Mail (Brevo) sowie ein personalisiertes Dashboard zur Verfolgung von Aktivitäten. Mit einer modularen Backend-Architektur unterstützt es Slug-basiertes Routing, dynamisches Filtern und optimierte Paginierung. Die Plattform umfasst einen robusten mehrstufigen Passwort-Wiederherstellungsprozess mit OTP-Validierung, Echtzeit-Interaktionen für Favoriten und Warenkorb-Management sowie ein responsives UI. Bereitgestellt auf AWS-Infrastruktur unter Verwendung von EC2, RDS, Amplify und Route 53 für hohe Verfügbarkeit und Skalierbarkeit.",
        features: [
          "JWT-Authentifizierung mit sicherer bcrypt-Passworthashierung",
          "Duales OTP-System: SMS via Twilio und E-Mail via Brevo SMTP",
          "Erweitertes Nutzerprofil-Management (E-Mail, Telefon, Aktivitätenverfolgung)",
          "Dynamische Produktauflistung mit Paginierung, Favoriten und Warenkorbsystem",
          "Markenbasierte Kategoriestruktur mit SEO-freundlichem Slug-Routing",
          "Personalisiertes Dashboard zur Verfolgung von Nutzeraktivitäten und Engagement",
          "Mehrstufiger 'Passwort vergessen'-Prozess mit OTP-Verifizierung und Token-Reset",
          "RESTful-API-Architektur mit modularem und skalierbarem Backend-Design",
          "Responsives und modernes UI mit optimierter Benutzererfahrung",
          "AWS-Deployment mit EC2 (Server), RDS (PostgreSQL), Amplify (Frontend), Route 53 (DNS)",
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
        name: "Blogy (Full-Stack Projekt mit KI-gestützter Inhaltsklassifizierung)",
        description:
          "Eine skalierbare Full-Stack-Anwendung auf Basis von ASP.NET Core und C#, entwickelt nach den Prinzipien von MVC und Onion Architecture. Das System integriert einen Python-basierten KI-Mikroservice für Multi-Label-Textklassifizierung mittels FastAPI. Es bietet sichere Authentifizierungs-Workflows, SMTP-basierte Passwort-Zurücksetzung, ein responsives UI und nahtlose Kommunikation zwischen Backend und KI-Services über RESTful APIs.",
        features: [
          "ASP.NET Core Backend mit MVC-Architektur",
          "Onion Architecture für Wartbarkeit und Skalierbarkeit",
          "Python-basierter KI-Mikroservice unter Verwendung von FastAPI",
          "Multi-Label-Textklassifizierung mit TF-IDF Modell",
          "Pydantic-basierte Validierung und strukturierte API-Antworten",
          "Text-Preprocessing-Pipeline (Bereinigung von URLs, Normalisierung etc.)",
          "SMTP-basierte sichere Passwort-Zurücksetzung mit tokenisierter E-Mail-Verifizierung",
          "Responsives UI, entwickelt mit HTML5 und CSS3",
          "Dynamische Frontend-Interaktionen mittels JavaScript und jQuery",
          "Entkoppelte Mikroservice-Architektur für unabhängige KI-Modell-Updates",
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
        name: "Tickio Mobile (Produktivitäts- & Task-Tracking App)",
        description:
          "Eine moderne mobile App zur Steigerung der Produktivität, die Nutzern hilft, Disziplin aufzubauen, tägliche Ziele zu verwalten und langfristige Fortschritte durch intuitives Aufgabenmanagement zu verfolgen. Tickio Mobile ermöglicht das Erstellen, Bearbeiten und Organisieren von Aufgaben in Kategorien wie Studium, Sport, Alltag, Arbeit und persönliche Ziele. Die App enthält sichere Authentifizierung, OTP-basierte Passwort-Wiederherstellung, erfolgsbasierte Interaktionen und Dashboards zur Visualisierung von Statistiken. Mit einem Fokus auf Mobile-First-Architektur bietet Tickio Mobile ein konsistentes Designsystem und flüssige User-Flows.",
        features: [
          "Sichere Authentifizierung und Kontenverwaltung für mobile Nutzer",
          "Erstellung, Bearbeitung und Statusverfolgung von Aufgaben",
          "Kategorisierte Workflows für Studium, Sport, Arbeit, Hobbys und Alltag",
          "Erfolgssystem (Achievements), das durch Meilensteine ausgelöst wird",
          "Interaktives Dashboard mit täglichen Aufgaben und 7-Tage-Aktivitätsübersicht",
          "Persönliche Profilseite mit Aufgabenzusammenfassungen und Erfolgen",
          "Statistikseite mit visuellen Einblicken (täglich, wöchentlich, monatlich, jährlich)",
          "Ranking-System mit Bestenlisten basierend auf erledigten Aufgaben und Streaks",
          "Mehrstufiger 'Passwort vergessen'-Prozess mit OTP-Verifizierung",
          "Mobile-First UI-Design mit wiederverwendbaren Komponenten",
          "Skalierbare API-gesteuerte Architektur für zukünftige Erweiterungen",
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
        name: "Tickio Web (Full-Stack Produktivitäts-Plattform)",
        description:
          "Eine Full-Stack-Plattform zur Aufgabenverwaltung und Fortschrittskontrolle. Entwickelt mit Next.js für ein schnelles, modernes Frontend und NestJS für eine skalierbare, modulare Server-Architektur. Tickio bietet ein umfassendes Ökosystem mit Authentifizierung, OTP-Passwort-Wiederherstellung, Ranking-Systemen und detaillierten Statistiken zur Visualisierung der Nutzerperformance über längere Zeiträume.",
        features: [
          "Full-Stack-Architektur mit Next.js Frontend und NestJS Backend",
          "Workflows zur Erstellung, Aktualisierung und Fertigstellung von Aufgaben",
          "Kategoriebasierte Organisation (Studium, Sport, Arbeit, Reise, Alltag)",
          "Sichere Authentifizierungs- und Kontoverwaltungs-Flows",
          "OTP-basiertes Passwort-Wiederherstellungssystem",
          "Achievement-System basierend auf Produktivitäts-Meilensteinen",
          "Interaktives Dashboard mit täglicher Übersicht und Schnellstatistiken",
          "Detailliertes Profilmanagement mit Fortschritts-Zusammenfassungen",
          "Statistikmodul mit Nachverfolgung über verschiedene Zeiträume",
          "Sortierbares Ranking-System nach Aufgabenanzahl, Streaks und Performance",
          "Wiederverwendbare komponentenbasierten UI-Architektur",
          "REST-API-gesteuerte Kommunikation zwischen Frontend und Backend",
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
        name: "Wordplay (Wettbewerbsorientierte Wortspiel-Plattform)",
        description:
          "Wordplay ist eine Full-Stack-Plattform für wettbewerbsorientierte Wortspiele, die entwickelt wurde, um mehrere wortbasierte Spiele in einer einzigen, einheitlichen Erfahrung zusammenzuführen. Die Plattform wurde mit Next.js und TypeScript entwickelt und bietet Spielern eine strukturierte Umgebung, in der sie sich in verschiedenen Spielen herausfordern, ihre Leistung verfolgen und auf Bestenlisten konkurrieren können. Die Plattform umfasst derzeit Wordle und Hangman, jeweils mit mehreren Schwierigkeitsstufen und sorgfältig zusammengestellten Wortpools. Die Authentifizierung wird sowohl über JWT-basiertes Login als auch über OAuth-Anbieter wie Google und Apple verwaltet, wodurch ein reibungsloses Onboarding-Erlebnis ermöglicht wird. Ein dynamisches Punktesystem belohnt Spieler basierend auf Schwierigkeitsgrad und Leistung; die Punkte werden dauerhaft in täglichen, wöchentlichen und All-Time-Bestenlisten gespeichert. Das Dashboard bietet eine personalisierte Erfahrung mit Echtzeit-Statistiken, Spielverlauf und Sitzungsverfolgung, während die Architektur so aufgebaut ist, dass sie im Laufe der Zeit mit zusätzlichen Spielen und Funktionen skalieren kann.",
        features: [
          "Multi-Game-Plattform mit Wordle und Hangman unter einem einheitlichen Dashboard",
          "JWT-basierte Authentifizierung zusammen mit Google- und Apple-OAuth-Integration",
          "Drei Schwierigkeitsstufen pro Spiel mit sorgfältig zusammengestellten Wortpools",
          "Dynamisches Punktesystem mit täglicher, wöchentlicher und All-Time-Bestenlistenverfolgung",
          "Personalisiertes Dashboard mit Echtzeit-Statistiken und Sitzungsfortschritt",
          "Wörterbuchvalidierung über die Free Dictionary API zur Sicherstellung gültiger Wörter",
          "Tägliche Spiellimits mit dauerhafter Sitzungsverfolgung",
          "Vollständig responsives UI, optimiert für Mobilgeräte und Desktop",
          "Flüssige Animationen wie Kachelumdrehungen, Shake-Feedback und Toast-Benachrichtigungen",
          "Skalierbare komponentenbasierte Architektur, entwickelt für zukünftige Spielerweiterungen",
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
        name: "Mehmet Demir Portfolio (Persönliche Webseite)",
        description:
          "Eine moderne Portfolio-Webseite zur Präsentation meiner beruflichen Identität, meines technischen Hintergrunds und meiner Softwareprojekte. Entwickelt mit Next.js und TypeScript, dient die Plattform als zentraler Knotenpunkt für Besucher, um meine Erfahrungen und Fähigkeiten zu erkunden. Die Seite legt großen Wert auf Performance, SEO und Benutzerfreundlichkeit.",
        features: [
          "Entwickelt mit Next.js und TypeScript für Performance und Skalierbarkeit",
          "Sauberes, responsives UI, optimiert für alle Gerätegrößen",
          "Spezielle Bereiche für Projekte, Erfahrung und persönlichen Hintergrund",
          "Projektschau mit detaillierten Beschreibungen und Tech-Stacks",
          "Kontaktbereich für direkte Kommunikation",
          "Integration eines herunterladbaren Lebenslaufs",
          "SEO-freundliche Struktur für bessere Sichtbarkeit",
          "Komponentenbasierte Architektur für einfache Wartung",
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
  ru: {
    pageTag: "Личные проекты",
    pageTitle: {
      main: "Мои",
      accent: "Проекты",
    },
    pageDesc:
      "Коллекция full-stack проектов, включающая бэкенд-системы, фронтенд-интерфейсы и облачные приложения.",
    stats: {
      total: "Всего личных проектов",
      live: "В сети",
      github: "НА GITHUB",
    },
    liveBadge: {
      live: "Live",
      github: "В Github",
    },
    viewProject: "Посмотреть проект",
    projectList: [
      {
        name: "Dressify (Full-Stack E-Commerce платформа)",
        description:
          "Масштабируемая full-stack платформа электронной коммерции, ориентированная на моду. Позволяет пользователям изучать, фильтровать и взаимодействовать с товарами, организованными по брендам и категориям. Система включает безопасную аутентификацию на основе JWT, OTP-верификацию через SMS (Twilio) и email (Brevo), а также персонализированную панель управления пользователя для отслеживания активности. Построенная на модульной бэкенд-архитектуре, платформа поддерживает маршрутизацию на основе слагов, динамическую фильтрацию и оптимизированную пагинацию. Проект включает надежный многоэтапный процесс восстановления пароля с валидацией OTP, взаимодействие с избранным и корзиной в реальном времени, а также адаптивный интерфейс. Развернуто на инфраструктуре AWS с использованием EC2, RDS, Amplify и Route 53 для обеспечения высокой доступности и масштабируемости.",
        features: [
          "JWT-аутентификация с безопасным хешированием паролей bcrypt",
          "Двойная система OTP: SMS через Twilio и Email через Brevo SMTP",
          "Расширенное управление профилем (email, телефон, отслеживание активности)",
          "Динамический список товаров с пагинацией, избранным и системой корзины",
          "Структура категорий на основе брендов с SEO-friendly маршрутизацией",
          "Персонализированный дашборд активности пользователя",
          "Многоэтапное восстановление пароля с проверкой OTP и сбросом токена",
          "Архитектура RESTful API с модульным и масштабируемым дизайном бэкенда",
          "Адаптивный современный интерфейс с оптимизированным UX",
          "Деплой на AWS: EC2 (сервер), RDS (PostgreSQL), Amplify (фронтенд), Route 53 (DNS)",
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
        name: "Blogy (Full-Stack проект с AI-системой классификации контента)",
        description:
          "Масштабируемое full-stack приложение на ASP.NET Core и C#, спроектированное с использованием принципов MVC и Onion Architecture. Система интегрирует ИИ-микросервис на Python для многоклассовой классификации текста с использованием FastAPI. Включает безопасные рабочие процессы аутентификации, сброс пароля через SMTP, адаптивный интерфейс и бесшовное взаимодействие между бэкендом и ИИ-сервисами через RESTful API.",
        features: [
          "Бэкенд на ASP.NET Core с архитектурой MVC",
          "Onion Architecture для удобства обслуживания и масштабируемости",
          "ИИ-микросервис на Python с использованием FastAPI",
          "Многоклассовая классификация текста с моделью TF-IDF",
          "Валидация запросов на базе Pydantic и структурированные ответы API",
          "Конвейер предобработки текста (очистка URL, нормализация)",
          "Безопасный сброс пароля через SMTP с токенизированной проверкой email",
          "Адаптивный интерфейс на HTML5 и CSS3",
          "Динамическое взаимодействие на фронтенде с JavaScript и jQuery",
          "Развязанная микросервисная архитектура для независимого обновления ИИ-модели",
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
        name: "Tickio Mobile (Приложение для продуктивности и трекинга задач)",
        description:
          "Современное мобильное приложение для повышения продуктивности, помогающее развивать дисциплину и управлять ежедневными целями. Tickio Mobile позволяет создавать, редактировать и организовывать задачи по категориям: учеба, спорт, работа, личные цели и быт. Приложение включает безопасную аутентификацию, восстановление пароля через OTP, систему достижений и дашборды с визуализацией статистики. Построенное на чистой мобильной архитектуре, приложение ориентировано на плавность интерфейса и масштабируемость.",
        features: [
          "Безопасная аутентификация и управление аккаунтом для мобильных пользователей",
          "Создание, редактирование и отслеживание статуса задач",
          "Категории задач: учеба, спорт, работа, хобби, путешествия и рутина",
          "Система достижений, привязанная к выполнению этапов задач",
          "Интерактивный дашборд с ежедневными задачами и обзором активности за неделю",
          "Профиль пользователя со сводкой задач и списком достижений",
          "Страница статистики с визуализацией за день, неделю, месяц и год",
          "Система рейтинга с таблицей лидеров по количеству выполненных задач",
          "Многоэтапное восстановление пароля с проверкой OTP",
          "Mobile-first дизайн интерфейса с переиспользуемыми компонентами",
          "Масштабируемая API-ориентированная архитектура",
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
        name: "Tickio Web (Full-Stack платформа для продуктивности)",
        description:
          "Полнофункциональная платформа для управления задачами и мониторинга долгосрочного прогресса. Tickio позволяет организовать ежедневное планирование через структурированную систему. Веб-приложение разработано на Next.js для обеспечения высокой скорости работы, а бэкенд на NestJS предоставляет масштабируемую модульную серверную архитектуру. Система включает модули аналитики, рейтингов и детальную визуализацию производительности пользователя.",
        features: [
          "Full-stack архитектура: фронтенд на Next.js и бэкенд на NestJS",
          "Рабочие процессы создания, обновления и завершения задач",
          "Организация задач по категориям (учеба, спорт, работа и др.)",
          "Безопасное управление аккаунтом и аутентификация",
          "Система восстановления пароля на основе OTP",
          "Игровая механика достижений за продуктивность",
          "Интерактивный дашборд с быстрой статистикой за неделю",
          "Детальное управление профилем и сводка прогресса",
          "Модуль статистики с отслеживанием за различные периоды",
          "Сортируемая система рейтингов на основе результативности",
          "Компонентная архитектура интерфейса для удобства поддержки",
          "Связь между фронтендом и бэкендом через REST API",
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
        name: "Wordplay (Соревновательная платформа словесных игр)",
        description:
          "Wordplay — это full-stack платформа для соревновательных словесных игр, созданная для объединения нескольких игр, основанных на словах, в единый и целостный пользовательский опыт. Платформа разработана с использованием Next.js и TypeScript и предоставляет игрокам структурированную среду, где они могут испытывать себя в разных играх, отслеживать свою эффективность и соревноваться в таблицах лидеров. В настоящее время платформа включает Wordle и Hangman, каждая из которых имеет несколько уровней сложности и тщательно подобранные наборы слов. Аутентификация реализована как через вход на основе JWT, так и через OAuth-провайдеров, включая Google и Apple, что обеспечивает удобный процесс начала работы. Динамическая система подсчёта очков вознаграждает игроков в зависимости от сложности и результата; очки сохраняются в ежедневных, еженедельных и общих таблицах лидеров. Dashboard предоставляет персонализированный опыт с данными статистики в реальном времени, историей игр и отслеживанием сессий, а архитектура спроектирована так, чтобы со временем масштабироваться за счёт добавления новых игр и функций.",
        features: [
          "Многоигровая платформа с Wordle и Hangman в едином dashboard",
          "Аутентификация на основе JWT вместе с интеграцией Google и Apple OAuth",
          "Три уровня сложности для каждой игры с тщательно подобранными наборами слов",
          "Динамическая система подсчёта очков с отслеживанием ежедневных, еженедельных и общих таблиц лидеров",
          "Персонализированный dashboard со статистикой в реальном времени и прогрессом сессии",
          "Проверка слов через Free Dictionary API для обеспечения использования допустимых слов",
          "Ежедневные лимиты игр с постоянным отслеживанием сессий",
          "Полностью адаптивный интерфейс, оптимизированный для мобильных устройств и desktop",
          "Плавные анимации, включая переворот плиток, shake-feedback и toast-уведомления",
          "Масштабируемая компонентная архитектура, разработанная для будущего расширения игр",
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
        name: "Mehmet Demir Portfolio (Личный сайт)",
        description:
          "Современный сайт-портфолио, созданный для представления профессиональной деятельности и технических навыков. Разработанный на Next.js и TypeScript, сайт служит центральным узлом, где посетители могут ознакомиться с моим опытом и проектами. Проект сфокусирован на производительности, SEO-оптимизации и удобстве использования на всех типах устройств.",
        features: [
          "Построено на Next.js и TypeScript для высокой производительности",
          "Чистый адаптивный интерфейс, оптимизированный под любые экраны",
          "Разделы для проектов, опыта работы и личной информации",
          "Витрина проектов с детальным описанием и стеком технологий",
          "Раздел контактов для прямой связи",
          "Интеграция загружаемого резюме",
          "SEO-friendly структура для лучшей видимости в поиске",
          "Компонентная архитектура для легкой поддержки",
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
  es: {
    pageTag: "Proyectos Personales",
    pageTitle: {
      main: "Mis",
      accent: "Proyectos",
    },
    pageDesc:
      "Una colección de proyectos full-stack que abarcan sistemas backend, interfaces frontend y aplicaciones desplegadas en la nube.",
    stats: {
      total: "Total de Proyectos Personales",
      live: "En Vivo",
      github: "EN GITHUB",
    },
    liveBadge: {
      live: "En Vivo",
      github: "En Github",
    },
    viewProject: "Ver Proyecto",
    projectList: [
      {
        name: "Dressify (Plataforma de E-Commerce Full-Stack)",
        description:
          "Una plataforma de comercio electrónico full-stack escalable enfocada en la moda, que permite a los usuarios explorar, filtrar e interactuar con productos organizados por marcas y categorías. El sistema cuenta con autenticación segura basada en JWT, verificación OTP vía SMS (Twilio) y correo electrónico (Brevo), y un panel de usuario personalizado que rastrea la actividad. Construido con una arquitectura de backend modular, admite enrutamiento basado en slugs, filtrado dinámico y paginación optimizada. La plataforma incluye un sólido flujo de recuperación de contraseña en varios pasos con validación OTP, interacciones en tiempo real para favoritos y gestión del carrito, y una interfaz de usuario responsiva. Desplegado en la infraestructura de AWS utilizando EC2, RDS, Amplify y Route 53 para alta disponibilidad y escalabilidad.",
        features: [
          "Autenticación JWT con hashing de contraseñas seguro mediante bcrypt",
          "Sistema de OTP dual: SMS a través de Twilio y correo electrónico a través de SMTP de Brevo",
          "Gestión avanzada de perfiles de usuario (correo, teléfono, seguimiento de actividad)",
          "Listado dinámico de productos con paginación, favoritos y sistema de carrito",
          "Estructura de categorías basada en marcas con enrutamiento de slugs amigable para SEO",
          "Panel de actividad de usuario personalizado con seguimiento de interacciones",
          "Flujo de recuperación de contraseña de varios pasos con verificación OTP y restablecimiento de token",
          "Arquitectura de API RESTful con diseño de backend modular y escalable",
          "Interfaz de usuario moderna y responsiva con experiencia de usuario optimizada",
          "Despliegue en AWS con EC2 (servidor), RDS (PostgreSQL), Amplify (frontend), Route 53 (DNS)",
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
        name: "Blogy (Proyecto Full-Stack con Sistema de Clasificación de Contenido por IA)",
        description:
          "Una aplicación full-stack escalable construida con ASP.NET Core y C#, diseñada utilizando los principios de arquitectura MVC y Onion Architecture. El sistema integra un microservicio de IA basado en Python para la clasificación de texto multietiqueta utilizando FastAPI. Cuenta con flujos de trabajo de autenticación seguros, restablecimiento de contraseña basado en SMTP, interfaz de usuario responsiva y comunicación fluida entre el backend y los servicios de IA a través de APIs RESTful.",
        features: [
          "Backend de ASP.NET Core con arquitectura MVC",
          "Arquitectura Onion para mantenibilidad y escalabilidad",
          "Microservicio de IA basado en Python utilizando FastAPI",
          "Clasificación de texto multietiqueta con modelo TF-IDF",
          "Validación de solicitudes basada en Pydantic y respuestas de API estructuradas",
          "Pipeline de preprocesamiento de texto (limpieza de URLs, normalización)",
          "Restablecimiento de contraseña seguro basado en SMTP con verificación de correo tokenizada",
          "Interfaz de usuario responsiva construida con HTML5 y CSS3",
          "Interacciones dinámicas de frontend utilizando JavaScript y jQuery",
          "Arquitectura de microservicios desacoplada para actualizaciones independientes del modelo de IA",
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
        name: "Tickio Mobile (App de Productividad y Seguimiento de Tareas)",
        description:
          "Una moderna aplicación móvil de productividad diseñada para ayudar a los usuarios a desarrollar disciplina, gestionar objetivos diarios y realizar un seguimiento del progreso a largo plazo. Tickio Mobile permite crear, editar, completar y organizar tareas en diferentes categorías como estudio, deporte, vida diaria, trabajo y metas personales. La aplicación incluye flujos de autenticación seguros, recuperación de contraseñas basada en OTP, interacciones impulsadas por logros y paneles centrados en el usuario que visualizan estadísticas de productividad. Construida con una arquitectura limpia orientada a dispositivos móviles, Tickio Mobile se centra en el diseño responsivo y flujos de usuario fluidos.",
        features: [
          "Autenticación segura y gestión de cuentas para usuarios móviles",
          "Creación, edición, finalización y seguimiento de estado de tareas",
          "Flujos de productividad categorizados para estudio, deporte, trabajo y rutinas diarias",
          "Sistema de logros activado por hitos de finalización de tareas",
          "Panel interactivo con tareas diarias, resumen de actividad de 7 días y estadísticas rápidas",
          "Página de perfil personal con resúmenes de tareas, logros e información de cuenta",
          "Página de estadísticas con información visual de productividad diaria, semanal, mensual y anual",
          "Sistema de clasificación con tablas de líderes basadas en tareas totales, finalizadas y rachas",
          "Flujo de recuperación de contraseña de varios pasos con verificación OTP",
          "Diseño de interfaz de usuario Mobile-first con componentes reutilizables",
          "Arquitectura escalable impulsada por API preparada para futuras expansiones",
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
        name: "Tickio Web (Plataforma de Productividad Full-Stack)",
        description:
          "Una plataforma de productividad full-stack diseñada para ayudar a los usuarios a gestionar tareas, generar consistencia y monitorear el progreso a largo plazo. La aplicación web fue desarrollada con Next.js, ofreciendo una experiencia rápida y moderna, mientras que el backend se construyó con NestJS para proporcionar una arquitectura de servidor escalable y modular. El sistema incluye módulos de dashboards, gestión de tareas, perfiles, clasificaciones y análisis detallados de productividad.",
        features: [
          "Arquitectura full-stack con frontend en Next.js y backend en NestJS",
          "Flujos de trabajo para creación, edición, actualización y finalización de tareas",
          "Organización de tareas por categorías (estudio, deporte, trabajo, ocio, etc.)",
          "Flujos de autenticación segura y gestión de cuentas",
          "Sistema de recuperación de contraseña basado en OTP",
          "Sistema de logros activado por hitos de productividad",
          "Panel interactivo con tareas diarias, resumen semanal y estadísticas rápidas",
          "Gestión detallada de perfiles con resúmenes de progreso del usuario",
          "Módulo de estadísticas con seguimiento de productividad por periodos",
          "Sistema de clasificación ordenable basado en desempeño y rachas",
          "Arquitectura de interfaz basada en componentes reutilizables para mantenibilidad",
          "Comunicación impulsada por API REST entre servicios de frontend y backend",
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
        name: "Wordplay (Plataforma competitiva de juegos de palabras)",
        description:
          "Wordplay es una plataforma full-stack competitiva de juegos de palabras, diseñada para reunir varios juegos basados en palabras en una experiencia única y unificada. Desarrollada con Next.js y TypeScript, la plataforma ofrece a los jugadores un entorno estructurado donde pueden desafiarse en diferentes juegos, seguir su rendimiento y competir en tablas de clasificación. Actualmente, la plataforma incluye Wordle y Hangman, cada uno con varios niveles de dificultad y conjuntos de palabras cuidadosamente seleccionados. La autenticación se gestiona tanto mediante inicio de sesión basado en JWT como a través de proveedores OAuth, incluidos Google y Apple, lo que garantiza una experiencia de incorporación fluida. Un sistema dinámico de puntuación recompensa a los jugadores en función de la dificultad y el rendimiento; las puntuaciones se guardan de forma persistente en tablas de clasificación diarias, semanales y de todos los tiempos. El dashboard ofrece una experiencia personalizada con estadísticas en tiempo real, historial de partidas y seguimiento de sesiones, mientras que la arquitectura está diseñada para escalar con juegos y funciones adicionales con el tiempo.",
        features: [
          "Plataforma multijuego con Wordle y Hangman bajo un dashboard unificado",
          "Autenticación basada en JWT junto con integración OAuth de Google y Apple",
          "Tres niveles de dificultad por juego con conjuntos de palabras cuidadosamente seleccionados",
          "Sistema dinámico de puntuación con seguimiento de tablas de clasificación diarias, semanales y de todos los tiempos",
          "Dashboard personalizado con estadísticas en tiempo real y progreso de sesión",
          "Validación de diccionario mediante Free Dictionary API para garantizar palabras válidas",
          "Límites diarios de juego con seguimiento persistente de sesiones",
          "Interfaz completamente responsive optimizada para móvil y escritorio",
          "Animaciones fluidas, incluyendo volteo de fichas, feedback de sacudida y notificaciones toast",
          "Arquitectura escalable basada en componentes, diseñada para futuras expansiones de juegos",
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
        name: "Portafolio Mehmet Demir (Sitio Web Personal)",
        description:
          "Un sitio web de portafolio personal moderno construido para presentar mi identidad profesional, trayectoria técnica y proyectos de desarrollo de software de manera limpia y estructurada. Desarrollado con Next.js y TypeScript, la plataforma sirve como un centro central donde los visitantes pueden explorar mi experiencia y habilidades. El sitio está diseñado con un fuerte enfoque en el rendimiento, la capacidad de respuesta y la experiencia del usuario.",
        features: [
          "Construido con Next.js y TypeScript para rendimiento y escalabilidad",
          "Interfaz de usuario limpia y responsiva optimizada para todos los dispositivos",
          "Secciones dedicadas para proyectos, experiencia y trayectoria personal",
          "Muestra de proyectos con descripciones detalladas y stacks tecnológicos",
          "Sección de contacto para comunicación directa",
          "Integración de currículum descargable",
          "Estructura amigable para SEO para mejor visibilidad",
          "Arquitectura basada en componentes para facilitar el mantenimiento",
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
  fr: {
    pageTag: "Projets Personnels",
    pageTitle: {
      main: "Mes",
      accent: "Projets",
    },
    pageDesc:
      "Une collection de projets full-stack couvrant les systèmes backend, les interfaces frontend et les applications déployées sur le cloud.",
    stats: {
      total: "Total des Projets",
      live: "En Ligne",
      github: "SUR GITHUB",
    },
    liveBadge: {
      live: "En Ligne",
      github: "Sur Github",
    },
    viewProject: "Voir le Projet",
    projectList: [
      {
        name: "Dressify (Plateforme E-Commerce Full-Stack)",
        description:
          "Une plateforme e-commerce full-stack évolutive dédiée à la mode, permettant aux utilisateurs d'explorer, filtrer et interagir avec des produits organisés par marques et catégories. Le système intègre une authentification sécurisée par JWT, une vérification OTP par SMS (Twilio) et e-mail (Brevo), ainsi qu'un tableau de bord utilisateur personnalisé pour le suivi d'activité. Construit avec une architecture backend modulaire, il supporte le routage basé sur les slugs, le filtrage dynamique et la pagination optimisée. La plateforme inclut un flux de récupération de mot de passe robuste avec validation OTP, des interactions en temps réel pour les favoris et la gestion du panier, et une interface réactive. Déployé sur l'infrastructure AWS via EC2, RDS, Amplify et Route 53 pour une haute disponibilité et scalabilité.",
        features: [
          "Authentification JWT avec hachage sécurisé des mots de passe (bcrypt)",
          "Système OTP double : SMS via Twilio et E-mail via Brevo SMTP",
          "Gestion avancée du profil utilisateur (e-mail, téléphone, suivi d'activité)",
          "Liste de produits dynamique avec pagination, favoris et système de panier",
          "Structure de catégories par marque avec routage par slug optimisé pour le SEO",
          "Tableau de bord personnalisé avec suivi de l'engagement utilisateur",
          "Récupération de mot de passe par étapes avec vérification OTP et réinitialisation de token",
          "Architecture API RESTful avec conception backend modulaire et évolutive",
          "Interface moderne et responsive avec expérience utilisateur optimisée",
          "Déploiement AWS avec EC2 (serveur), RDS (PostgreSQL), Amplify (frontend), Route 53 (DNS)",
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
        name: "Blogy (Projet Full-Stack avec Classification de Contenu par IA)",
        description:
          "Une application full-stack évolutive développée avec ASP.NET Core et C#, conçue selon les principes de l'architecture MVC et Onion. Le système intègre un microservice d'IA en Python pour la classification de texte multi-labels via FastAPI. Il propose des flux d'authentification sécurisés, la réinitialisation de mot de passe par SMTP, une interface réactive et une communication fluide entre le backend et les services d'IA via des API RESTful.",
        features: [
          "Backend ASP.NET Core avec architecture MVC",
          "Onion Architecture pour la maintenabilité et la scalabilité",
          "Microservice d'IA en Python utilisant FastAPI",
          "Classification de texte multi-labels avec modèle TF-IDF",
          "Validation des requêtes via Pydantic et réponses API structurées",
          "Pipeline de prétraitement de texte (nettoyage d'URL, normalisation)",
          "Réinitialisation de mot de passe sécurisée par SMTP avec vérification par e-mail tokenisée",
          "Interface responsive construite avec HTML5 et CSS3",
          "Interactions frontend dynamiques utilisant JavaScript et jQuery",
          "Architecture microservice découplée pour les mises à jour indépendantes du modèle d'IA",
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
        name: "Tickio Mobile (Application de Productivité et Suivi de Tâches)",
        description:
          "Une application mobile de productivité moderne conçue pour aider les utilisateurs à renforcer leur discipline, gérer leurs objectifs quotidiens et suivre leurs progrès à long terme. Tickio Mobile permet de créer, modifier et organiser des tâches par catégories (études, sport, travail, etc.). L'application inclut une authentification sécurisée, la récupération de mot de passe par OTP, un système de succès et des tableaux de bord visualisant les statistiques de productivité. Développée avec une architecture mobile-first, Tickio Mobile se concentre sur le design réactif et des flux utilisateurs fluides.",
        features: [
          "Authentification sécurisée et gestion de compte pour mobile",
          "Création, édition et suivi du statut des tâches",
          "Flux de productivité catégorisés (études, sport, travail, loisirs, routine)",
          "Système de succès déclenché par des jalons de complétion de tâches",
          "Tableau de bord interactif avec aperçu de l'activité sur 7 jours",
          "Page de profil personnel avec résumés des tâches et succès",
          "Page de statistiques avec analyses visuelles (jour, semaine, mois, an)",
          "Système de classement avec tableaux de leaders basés sur la performance",
          "Récupération de mot de passe sécurisée avec vérification OTP",
          "Design UI Mobile-first avec composants réutilisables",
          "Architecture API évolutive prête pour de futures extensions",
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
        name: "Tickio Web (Plateforme de Productivité Full-Stack)",
        description:
          "Une plateforme de productivité full-stack complète pour aider les utilisateurs à gérer leurs tâches et construire une régularité. Développée avec Next.js pour l'expérience frontend et NestJS pour une architecture backend modulaire et évolutive. La plateforme inclut des flux d'authentification, la récupération par OTP, des systèmes de classement et des pages de statistiques détaillées pour visualiser les performances dans le temps.",
        features: [
          "Architecture Full-stack avec frontend Next.js et backend NestJS",
          "Flux de travail complets pour la gestion des tâches",
          "Organisation par catégories (études, sport, travail, quotidien)",
          "Authentification sécurisée et gestion des comptes",
          "Système de récupération de mot de passe basé sur OTP",
          "Système de succès basé sur des jalons de productivité",
          "Tableau de bord interactif avec statistiques rapides",
          "Gestion détaillée du profil avec résumé des progrès",
          "Module de statistiques avec suivi sur plusieurs périodes",
          "Système de classement triable par performance et assiduité",
          "Architecture UI basée sur des composants réutilisables",
          "Communication fluide via API REST entre le frontend et le backend",
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
        name: "Wordplay (Plateforme compétitive de jeux de mots)",
        description:
          "Wordplay est une plateforme full-stack compétitive de jeux de mots, conçue pour réunir plusieurs jeux basés sur les mots dans une expérience unique et unifiée. Développée avec Next.js et TypeScript, la plateforme offre aux joueurs un environnement structuré dans lequel ils peuvent se challenger à travers différents jeux, suivre leurs performances et rivaliser dans les classements. La plateforme propose actuellement Wordle et Hangman, chacun avec plusieurs niveaux de difficulté et des listes de mots soigneusement sélectionnées. L’authentification est gérée à la fois via une connexion basée sur JWT et via des fournisseurs OAuth, notamment Google et Apple, afin d’assurer une expérience d’inscription fluide. Un système de score dynamique récompense les joueurs en fonction de la difficulté et de leurs performances ; les scores sont conservés de manière persistante dans les classements quotidiens, hebdomadaires et de tous les temps. Le dashboard offre une expérience personnalisée avec des statistiques en temps réel, un historique des parties et un suivi des sessions, tandis que l’architecture est conçue pour évoluer avec l’ajout de nouveaux jeux et fonctionnalités au fil du temps.",
        features: [
          "Plateforme multijeu avec Wordle et Hangman sous un dashboard unifié",
          "Authentification basée sur JWT avec intégration OAuth Google et Apple",
          "Trois niveaux de difficulté par jeu avec des listes de mots soigneusement sélectionnées",
          "Système de score dynamique avec suivi des classements quotidiens, hebdomadaires et de tous les temps",
          "Dashboard personnalisé avec statistiques en temps réel et progression de session",
          "Validation des mots via la Free Dictionary API afin de garantir l’utilisation de mots valides",
          "Limites de jeu quotidiennes avec suivi persistant des sessions",
          "Interface entièrement responsive, optimisée pour mobile et desktop",
          "Animations fluides incluant retournement de tuiles, feedback de secousse et notifications toast",
          "Architecture scalable basée sur des composants, conçue pour les futures extensions de jeux",
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
        name: "Mehmet Demir Portfolio (Site Personnel)",
        description:
          "Un site portfolio personnel moderne conçu pour présenter mon identité professionnelle, mon parcours technique et mes projets de développement de manière structurée. Développé avec Next.js et TypeScript, il sert de hub central pour explorer mon expérience et mes compétences. Le site met l'accent sur la performance, le SEO et l'accessibilité sur tous les appareils.",
        features: [
          "Développé avec Next.js et TypeScript pour la performance",
          "Interface épurée et responsive optimisée pour tous les écrans",
          "Sections dédiées aux projets, à l'expérience et au parcours",
          "Présentation de projets avec descriptions détaillées et stacks techniques",
          "Section de contact pour communication directe",
          "Intégration d'un CV téléchargeable",
          "Structure optimisée pour le SEO (référencement)",
          "Architecture basée sur des composants pour une maintenance facile",
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
  pl: {
    pageTag: "Projekty Osobiste",
    pageTitle: {
      main: "Moje",
      accent: "Projekty",
    },
    pageDesc:
      "Zbiór projektów full-stack obejmujących systemy backendowe, interfejsy frontendowe oraz aplikacje wdrożone w chmurze.",
    stats: {
      total: "Wszystkie Projekty",
      live: "Online",
      github: "NA GITHUBIE",
    },
    liveBadge: {
      live: "Online",
      github: "Na Githubie",
    },
    viewProject: "Zobacz Projekt",
    projectList: [
      {
        name: "Dressify (Platforma E-Commerce Full-Stack)",
        description:
          "Skalowalna platforma e-commerce typu full-stack skoncentrowana na modzie, umożliwiająca użytkownikom przeglądanie, filtrowanie i interakcję z produktami uporządkowanymi według marek i kategorii. System posiada bezpieczne uwierzytelnianie oparte na JWT, weryfikację OTP przez SMS (Twilio) i e-mail (Brevo) oraz spersonalizowany panel użytkownika śledzący aktywność. Zbudowany w oparciu o modułową architekturę backendową, obsługuje routing oparty na slugach, dynamiczne filtrowanie i zoptymalizowaną paginację. Platforma zawiera solidny wieloetapowy proces odzyskiwania hasła z walidacją OTP, interakcje w czasie rzeczywistym dla ulubionych i zarządzania koszykiem oraz responsywny interfejs użytkownika. Wdrożona na infrastrukturze AWS przy użyciu EC2, RDS, Amplify i Route 53 w celu zapewnienia wysokiej dostępności i skalowalności.",
        features: [
          "Uwierzytelnianie JWT z bezpiecznym haszowaniem haseł bcrypt",
          "Podwójny system OTP: SMS przez Twilio i e-mail przez Brevo SMTP",
          "Zaawansowane zarządzanie profilem użytkownika (e-mail, telefon, śledzenie aktywności)",
          "Dynamiczne listowanie produktów z paginacją, ulubionymi i systemem koszyka",
          "Struktura kategorii oparta na markach z routingiem slug przyjaznym dla SEO",
          "Spersonalizowany pulpit aktywności użytkownika z śledzeniem zaangażowania",
          "Wieloetapowy proces odzyskiwania hasła z weryfikacją OTP i resetowaniem tokena",
          "Architektura RESTful API z modułowym i skalowalnym projektem backendu",
          "Responsywny i nowoczesny interfejs użytkownika ze zoptymalizowanym UX",
          "Wdrożenie AWS z wykorzystaniem EC2 (serwer), RDS (PostgreSQL), Amplify (frontend), Route 53 (DNS)",
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
        name: "Blogy (Projekt Full-Stack z systemem klasyfikacji treści opartym na AI)",
        description:
          "Skalowalna aplikacja full-stack zbudowana przy użyciu ASP.NET Core i C#, zaprojektowana zgodnie z zasadami architektury MVC i Onion Architecture. System integruje mikroserwis AI oparty na języku Python do klasyfikacji tekstu wieloetykietowego przy użyciu FastAPI. Posiada bezpieczne przepływy pracy uwierzytelniania, resetowanie hasła oparte na SMTP, responsywny interfejs użytkownika oraz bezproblemową komunikację między backendem a usługami AI poprzez interfejsy RESTful API.",
        features: [
          "Backend ASP.NET Core z architekturą MVC",
          "Architektura Onion dla łatwości utrzymania i skalowalności",
          "Mikroserwis AI oparty na Pythonie przy użyciu FastAPI",
          "Klasyfikacja tekstu wieloetykietowego z modelem TF-IDF",
          "Walidacja żądań oparta na Pydantic i strukturalne odpowiedzi API",
          "Potok wstępnego przetwarzania tekstu (oczyszczanie adresów URL, normalizacja)",
          "Bezpieczne resetowanie hasła oparte na SMTP z tokenizowaną weryfikacją e-mail",
          "Responsywny interfejs użytkownika zbudowany przy użyciu HTML5 i CSS3",
          "Dynamiczne interakcje frontendowe przy użyciu JavaScript i jQuery",
          "Rozdzielona architektura mikroserwisów dla niezależnych aktualizacji modeli AI",
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
        name: "Tickio Mobile (Aplikacja do produktywności i śledzenia zadań)",
        description:
          "Nowoczesna mobilna aplikacja do produktywności zaprojektowana, aby pomóc użytkownikom budować dyscyplinę, zarządzać codziennymi celami i śledzić długoterminowe postępy poprzez intuicyjne zarządzanie zadaniami. Tickio Mobile umożliwia tworzenie, edytowanie i organizowanie zadań w różnych kategoriach, takich jak nauka, sport, życie codzienne, praca i cele osobiste. Aplikacja zawiera bezpieczne przepływy uwierzytelniania, odzyskiwanie hasła oparte na OTP, interakcje napędzane osiągnięciami oraz pulpity nawigacyjne wizualizujące statystyki produktywności. Zbudowana w czystej architekturze mobile-first, Tickio Mobile koncentruje się na responsywnym designie i płynnych przepływach użytkownika.",
        features: [
          "Bezpieczne uwierzytelnianie i zarządzanie kontem dla użytkowników mobilnych",
          "Tworzenie, edycja, kończenie i śledzenie statusu zadań",
          "Kategoryzowane przepływy produktywności dla nauki, sportu, pracy i rutyny",
          "System osiągnięć aktywowany przez kamienie milowe ukończenia zadań",
          "Interaktywny pulpit nawigacyjny z codziennymi zadaniami i 7-dniowym przeglądem aktywności",
          "Strona profilu osobistego z podsumowaniami zadań i osiągnięciami",
          "Strona statystyk z wizualnymi wglądami w produktywność (dzień, tydzień, miesiąc, rok)",
          "System rankingowy z tablicami liderów opartymi na wynikach",
          "Wieloetapowy proces odzyskiwania hasła z weryfikacją OTP",
          "Projekt UI mobile-first z komponentami wielokrotnego użytku",
          "Skalowalna architektura oparta na API przygotowana na przyszłą rozbudowę",
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
        name: "Tickio Web (Platforma produktywności Full-Stack)",
        description:
          "Kompleksowa platforma produktywności zbudowana, aby pomagać w zarządzaniu zadaniami i monitorowaniu postępów. Aplikacja webowa została opracowana w Next.js, zapewniając szybkie i nowoczesne doświadczenie użytkownika, podczas gdy backend zbudowano w NestJS, aby zapewnić skalowalną, modułową architekturę serwerową. Platforma zawiera systemy rankingowe, odzyskiwanie haseł przez OTP oraz szczegółowe statystyki wizualizujące wydajność użytkownika w czasie.",
        features: [
          "Architektura Full-stack z frontendem Next.js i backendem NestJS",
          "Przepływy pracy związane z tworzeniem, edycją i kończeniem zadań",
          "Organizacja zadań według kategorii (nauka, sport, praca, codzienne)",
          "Bezpieczne uwierzytelnianie i zarządzanie profilami",
          "System odzyskiwania hasła oparty na OTP",
          "System osiągnięć oparty na kamieniach milowych produktywności",
          "Interaktywny pulpit nawigacyjny z zadaniami dziennymi i statystykami",
          "Szczegółowe zarządzanie profilem z podsumowaniem postępów",
          "Moduł statystyk ze śledzeniem wydajności w różnych okresach",
          "System rankingowy oparty na liczbie zadań i passach (streaks)",
          "Architektura interfejsu oparta na komponentach wielokrotnego użytku",
          "Komunikacja oparta na REST API między usługami frontend i backend",
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
        name: "Wordplay (Konkurencyjna platforma gier słownych)",
        description:
          "Wordplay to full-stackowa, konkurencyjna platforma gier słownych, zaprojektowana w celu połączenia wielu gier opartych na słowach w jedno, spójne doświadczenie. Zbudowana przy użyciu Next.js i TypeScript, platforma oferuje graczom uporządkowane środowisko, w którym mogą podejmować wyzwania w różnych grach, śledzić swoje wyniki i rywalizować w rankingach. Platforma obecnie zawiera Wordle i Hangman, z których każda gra posiada kilka poziomów trudności oraz starannie dobrane pule słów. Uwierzytelnianie obsługiwane jest zarówno przez logowanie oparte na JWT, jak i dostawców OAuth, w tym Google i Apple, co zapewnia płynne rozpoczęcie korzystania z platformy. Dynamiczny system punktacji nagradza graczy na podstawie poziomu trudności i osiąganych wyników; punkty są trwale zapisywane w dziennych, tygodniowych oraz ogólnych rankingach wszech czasów. Dashboard zapewnia spersonalizowane doświadczenie dzięki statystykom w czasie rzeczywistym, historii gier i śledzeniu sesji, natomiast architektura została zaprojektowana tak, aby z czasem można ją było skalować o dodatkowe gry i funkcje.",
        features: [
          "Platforma wielogrowa z Wordle i Hangman w ramach jednego dashboardu",
          "Uwierzytelnianie oparte na JWT wraz z integracją OAuth Google i Apple",
          "Trzy poziomy trudności dla każdej gry ze starannie dobranymi pulami słów",
          "Dynamiczny system punktacji ze śledzeniem rankingów dziennych, tygodniowych i wszech czasów",
          "Spersonalizowany dashboard ze statystykami w czasie rzeczywistym i postępem sesji",
          "Walidacja słów przez Free Dictionary API w celu egzekwowania poprawnych słów",
          "Dzienne limity gier z trwałym śledzeniem sesji",
          "W pełni responsywny interfejs zoptymalizowany zarówno pod urządzenia mobilne, jak i desktop",
          "Płynne animacje, w tym odwracanie kafelków, efekt potrząśnięcia i powiadomienia toast",
          "Skalowalna architektura oparta na komponentach, zaprojektowana z myślą o przyszłej rozbudowie gier",
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
        name: "Portfolio Mehmet Demir (Strona Osobista)",
        description:
          "Nowoczesna witryna portfolio zbudowana w celu prezentacji tożsamości zawodowej, zaplecza technicznego i projektów programistycznych w przejrzysty i uporządkowany sposób. Opracowana przy użyciu Next.js i TypeScript, platforma służy jako centralny punkt, w którym odwiedzający mogą poznać moje doświadczenie i umiejętności. Strona została zaprojektowana z dużym naciskiem na wydajność, responsywność i SEO.",
        features: [
          "Zbudowane w Next.js i TypeScript dla wydajności i skalowalności",
          "Przejrzysty i responsywny interfejs zoptymalizowany pod kątem wszystkich urządzeń",
          "Dedykowane sekcje dla projektów, doświadczenia i ścieżki zawodowej",
          "Prezentacja projektów ze szczegółowymi opisami i stosem technologicznym",
          "Sekcja kontaktowa do bezpośredniej komunikacji",
          "Integracja z CV do pobrania",
          "Struktura przyjazna dla SEO w celu lepszej widoczności",
          "Architektura oparta na komponentach ułatwiająca utrzymanie",
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
  it: {
    pageTag: "Progetti Personali",
    pageTitle: {
      main: "I Miei",
      accent: "Progetti",
    },
    pageDesc:
      "Una collezione di progetti full-stack che spaziano da sistemi backend a interfacce frontend e applicazioni distribuite in cloud.",
    stats: {
      total: "Totale Progetti Personali",
      live: "Online",
      github: "SU GITHUB",
    },
    liveBadge: {
      live: "Online",
      github: "Su Github",
    },
    viewProject: "Visualizza Progetto",
    projectList: [
      {
        name: "Dressify (Piattaforma E-Commerce Full-Stack)",
        description:
          "Una piattaforma e-commerce full-stack scalabile focalizzata sulla moda, che consente agli utenti di esplorare, filtrare e interagire con prodotti organizzati per marchi e categorie. Il sistema include un'autenticazione sicura basata su JWT, verifica OTP tramite SMS (Twilio) ed email (Brevo) e una dashboard utente personalizzata per monitorare attività e coinvolgimento. Costruito con un'architettura backend modulare, supporta il routing basato su slug, filtri dinamici e paginazione ottimizzata. La piattaforma include un robusto flusso di recupero password in più passaggi con validazione OTP, interazioni in tempo reale per preferiti e gestione del carrello e un'interfaccia utente responsiva. Distribuito su infrastruttura AWS utilizzando EC2, RDS, Amplify e Route 53 per garantire alta disponibilità e scalabilità.",
        features: [
          "Autenticazione JWT con hashing sicuro delle password tramite bcrypt",
          "Sistema OTP duale: SMS via Twilio ed Email via Brevo SMTP",
          "Gestione avanzata del profilo utente (email, telefono, monitoraggio attività)",
          "Elenco prodotti dinamico con paginazione, preferiti e sistema di carrello",
          "Struttura delle categorie basata sui marchi con routing slug ottimizzato per la SEO",
          "Dashboard attività utente personalizzata con monitoraggio del coinvolgimento",
          "Flusso di recupero password in più passaggi con verifica OTP e ripristino token",
          "Architettura API RESTful con design backend modulare e scalabile",
          "Interfaccia utente moderna e responsiva con esperienza utente ottimizzata",
          "Distribuzione AWS con EC2 (server), RDS (PostgreSQL), Amplify (frontend), Route 53 (DNS)",
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
        name: "Blogy (Progetto Full-Stack con Sistema di Classificazione Contenuti tramite IA)",
        description:
          "Un'applicazione full-stack scalabile realizzata con ASP.NET Core e C#, progettata utilizzando i principi MVC e Onion Architecture. Il sistema integra un microservizio di intelligenza artificiale basato su Python per la classificazione di testi multi-etichetta utilizzando FastAPI. Presenta flussi di autenticazione sicuri, ripristino password tramite SMTP, interfaccia utente responsiva e comunicazione fluida tra backend e servizi IA attraverso API RESTful.",
        features: [
          "Backend ASP.NET Core con architettura MVC",
          "Onion Architecture per manutenibilità e scalabilità",
          "Microservizio IA basato su Python utilizzando FastAPI",
          "Classificazione testi multi-etichetta con modello TF-IDF",
          "Validazione delle richieste basata su Pydantic e risposte API strutturate",
          "Pipeline di pre-elaborazione del testo (pulizia URL, normalizzazione)",
          "Ripristino password sicuro via SMTP con verifica email tramite token",
          "Interfaccia utente responsiva realizzata con HTML5 e CSS3",
          "Interazioni frontend dinamiche tramite JavaScript e jQuery",
          "Architettura a microservizi disaccoppiata per aggiornamenti indipendenti del modello IA",
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
        name: "Tickio Mobile (App per Produttività e Monitoraggio Attività)",
        description:
          "Una moderna applicazione mobile per la produttività progettata per aiutare gli utenti a sviluppare disciplina, gestire gli obiettivi quotidiani e monitorare i progressi a lungo termine. Tickio Mobile consente di creare, modificare e organizzare attività in diverse categorie come studio, sport, vita quotidiana e lavoro. L'app include flussi di autenticazione sicuri, recupero password tramite OTP, interazioni basate su obiettivi raggiunti e dashboard visuali per le statistiche di produttività. Costruita con un'architettura mobile-first, l'app si concentra su design responsivo e flussi utente fluidi.",
        features: [
          "Autenticazione sicura e gestione account per utenti mobile",
          "Creazione, modifica, completamento e monitoraggio dello stato delle attività",
          "Flussi di produttività categorizzati per studio, sport, lavoro e routine quotidiana",
          "Sistema di obiettivi raggiunti attivato dal completamento delle attività",
          "Dashboard interattiva con attività giornaliere e panoramica degli ultimi 7 giorni",
          "Pagina profilo personale con riepiloghi delle attività e dei traguardi",
          "Pagina statistiche con approfondimenti visivi giornalieri, settimanali, mensili e annuali",
          "Sistema di ranking con classifiche basate su prestazioni e costanza",
          "Flusso di recupero password in più passaggi con verifica OTP",
          "Design UI mobile-first con componenti riutilizzabili",
          "Architettura scalabile basata su API predisposta per espansioni future",
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
        name: "Tickio Web (Piattaforma di Produttività Full-Stack)",
        description:
          "Una piattaforma di produttività full-stack creata per gestire attività, costruire costanza e monitorare i progressi. L'applicazione web è stata sviluppata con Next.js per un'esperienza moderna e veloce, mentre il backend è stato realizzato con NestJS per fornire un'architettura server scalabile e modulare. La piattaforma include sistemi di ranking, recupero password via OTP e statistiche dettagliate sulle performance utente nel tempo.",
        features: [
          "Architettura Full-stack con frontend Next.js e backend NestJS",
          "Flussi di lavoro per creazione, modifica e completamento delle attività",
          "Organizzazione delle attività per categorie (studio, sport, lavoro, quotidiano)",
          "Uso di flussi di autenticazione sicura e gestione account",
          "Sistema di recupero password basato su OTP",
          "Sistema di traguardi attivato da milestone di produttività",
          "Dashboard interattiva con attività giornaliere e statistiche rapide",
          "Gestione profilo dettagliata con riepiloghi dei progressi dell'utente",
          "Modulo statistiche con monitoraggio su periodi giornalieri, settimanali, mensili e annuali",
          "Sistema di ranking ordinabile basato su conteggio attività e costanza",
          "Architettura UI basata su componenti riutilizzabili per manutenibilità",
          "Comunicazione tramite API REST tra i servizi frontend e backend",
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
        name: "Wordplay (Piattaforma competitiva di giochi di parole)",
        description:
          "Wordplay è una piattaforma full-stack competitiva per giochi di parole, progettata per riunire più giochi basati sulle parole in un’unica esperienza unificata. Sviluppata con Next.js e TypeScript, la piattaforma offre ai giocatori un ambiente strutturato in cui possono mettersi alla prova con diversi giochi, monitorare le proprie prestazioni e competere nelle classifiche. Attualmente la piattaforma include Wordle e Hangman, ciascuno con più livelli di difficoltà e raccolte di parole accuratamente selezionate. L’autenticazione è gestita sia tramite login basato su JWT sia tramite provider OAuth, inclusi Google e Apple, garantendo un’esperienza di onboarding fluida. Un sistema di punteggio dinamico premia i giocatori in base alla difficoltà e alle prestazioni; i punteggi vengono salvati in modo persistente nelle classifiche giornaliere, settimanali e di tutti i tempi. Il dashboard offre un’esperienza personalizzata con statistiche in tempo reale, cronologia delle partite e monitoraggio delle sessioni, mentre l’architettura è progettata per scalare nel tempo con giochi e funzionalità aggiuntive.",
        features: [
          "Piattaforma multigioco con Wordle e Hangman sotto un dashboard unificato",
          "Autenticazione basata su JWT insieme all’integrazione OAuth di Google e Apple",
          "Tre livelli di difficoltà per ogni gioco con raccolte di parole accuratamente selezionate",
          "Sistema di punteggio dinamico con monitoraggio delle classifiche giornaliere, settimanali e di tutti i tempi",
          "Dashboard personalizzato con statistiche in tempo reale e avanzamento della sessione",
          "Validazione del dizionario tramite Free Dictionary API per garantire l’uso di parole valide",
          "Limiti giornalieri di gioco con monitoraggio persistente delle sessioni",
          "Interfaccia completamente responsive ottimizzata sia per mobile che per desktop",
          "Animazioni fluide, tra cui rotazione delle tessere, feedback di scuotimento e notifiche toast",
          "Architettura scalabile basata su componenti, progettata per future espansioni dei giochi",
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
        name: "Mehmet Demir Portfolio (Sito Web Personale)",
        description:
          "Un moderno sito web di portfolio personale realizzato per presentare la mia identità professionale, il mio background tecnico e i miei progetti in modo pulito e strutturato. Sviluppato utilizzando Next.js e TypeScript, la piattaforma funge da hub centrale per esplorare le mie esperienze e competenze. Progettato con focus su performance, reattività e SEO.",
        features: [
          "Costruito con Next.js e TypeScript per massime prestazioni",
          "Interfaccia pulita e responsiva ottimizzata per tutti i dispositivi",
          "Sezioni dedicate a progetti, esperienza e percorso professionale",
          "Vetrina dei progetti con descrizioni dettagliate e stack tecnologici",
          "Sezione contatti per comunicazione diretta",
          "Integrazione del curriculum scaricabile",
          "Struttura SEO-friendly per una migliore visibilità",
          "Architettura basata su componenti per facilitare la manutenzione",
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
