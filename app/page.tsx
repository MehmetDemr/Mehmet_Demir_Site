"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./page.module.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";
import {
  PhoneCall,
  Book,
  Monitor,
  Award,
  House,
  GitHub,
  LinkedIn,
  User,
  ArrowDownRight,
} from "@deemlol/next-icons";

const skills = {
  Backend: [
    { name: "C#", color: "#239120" },
    { name: "ASP.NET", color: "#512BD4" },
    { name: "Node.js", color: "#339933" },
    { name: "Express.js", color: "#8b949e" },
    { name: "NestJS", color: "#E0234E" },
    { name: "Java", color: "#007396" },
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
    { name: "Vercel", color: "#8b949e" },
  ],
};

const experience = [
  {
    company: "Level End Yazılım A.Ş",
    role: "Full-Stack Developer",
    type: "Full Time",
    period: "Feb 2026 — Present",
    current: true,
  },
  {
    company: "Level End Yazılım A.Ş",
    role: "Full-Stack Developer",
    type: "Part Time",
    period: "Aug 2025 — Feb 2026",
    current: false,
  },
  {
    company: "Level End Yazılım A.Ş",
    role: "Full-Stack Developer",
    type: "Intern",
    period: "Jun 2025 — Jul 2025",
    current: false,
  },
  {
    company: "Ottopus A.Ş",
    role: "Full-Stack Developer",
    type: "Intern",
    period: "Jul 2024 — Jun 2025",
    current: false,
  },
];

const education = [
  {
    school: "İzmir Bakırçay University",
    period: "2022 — 2026",
    icon: <House size={24} color="#d6b36a" strokeWidth={1.5} />,
  },
  {
    school: "Fatma Saygın Anadolu High School",
    period: "2017 — 2021",
    icon: <House size={24} color="#d6b36a" strokeWidth={1.5} />,
  },
];

const about = [
  {
    title: "Who is Full-Stack Developer Mehmet Demir?",
    content: `I am Full-Stack Developer Mehmet Demir with a degree in Computer Engineering from Bakırçay University.My expertise includes modern web technologies, mobile application development, and SQL-based database design.Over the past 3+ years, I have successfully developed and delivered multiple projects, working both individually and within dynamic teams.I am passionate about building high-performance, scalable, and user-centric solutions, and I continuously strive to expand my knowledge in emerging technologies.`,
  },
  {
    title: "Front-End Development Expertise",
    content:
      "I specialize in front-end development using HTML, CSS, JavaScript, React, and Next.js, crafting scalable, high-performance, and visually engaging user interfaces that deliver a seamless user experience.",
  },
  {
    title: "Back-End Development Expertise",
    content:
      "I develop back-end systems using Node.js, Express.js, NestJS, and C#/.NET, designing scalable architectures and high-performance APIs with a strong emphasis on maintainability, security, and clean code practices.",
  },
  {
    title: "Mobile Development Expertise",
    content:
      "In mobile application development, I mainly work with React Native, leveraging its close alignment with React to develop applications faster and more efficiently while maintaining a consistent development experience.",
  },
  {
    title: "DevOps & Cloud Expertise",
    content: `I focus on using modern platforms to build, deploy, and manage real-world applications efficiently. I have hands-on experience with AWS services such as EC2, RDS, Amplify, and Route 53, enabling me to develop scalable cloud-based systems.

I also use platforms like Vercel and Hostinger for fast and reliable deployments. Additionally, I rely on Git-based workflows to safely update live applications, ensuring stability, continuous delivery, and minimal downtime.`,
  },
];

function MonitorAnimation() {
  const typedRef = useRef<HTMLSpanElement>(null);
  const closeParenRef = useRef<HTMLSpanElement>(null);
  const outputRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const txt = '"Hello world!"';
    let running = true;

    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

    async function loop() {
      while (running) {
        if (typedRef.current) typedRef.current.textContent = "";
        if (closeParenRef.current) closeParenRef.current.textContent = "";
        if (outputRef.current) outputRef.current.style.display = "none";

        await sleep(700);

        for (let i = 0; i < txt.length; i++) {
          if (!running) return;
          if (typedRef.current) typedRef.current.textContent += txt[i];
          await sleep(70);
        }

        if (closeParenRef.current) closeParenRef.current.textContent = ")";
        await sleep(500);
        if (outputRef.current) outputRef.current.style.display = "block";
        await sleep(1600);

        if (outputRef.current) outputRef.current.style.display = "none";
        if (closeParenRef.current) closeParenRef.current.textContent = "";

        let l = txt.length;
        while (l > 0) {
          if (!running) return;
          if (typedRef.current)
            typedRef.current.textContent = txt.substring(0, l - 1);
          l--;
          await sleep(45);
        }

        await sleep(600);
      }
    }

    loop();
    return () => {
      running = false;
    };
  }, []);

  return (
    <div className={styles.monitorWrap}>
      <div className={styles.monitorOuter}>
        <div className={styles.screen}>
          <div className={styles.menubar}>
            <div className={`${styles.mbDot} ${styles.mb1}`} />
            <div className={`${styles.mbDot} ${styles.mb2}`} />
            <div className={`${styles.mbDot} ${styles.mb3}`} />
          </div>

          <div className={styles.codeArea}>
            <div className={styles.codeLine}>
              <span className={styles.lineNum}>1</span>
              <span className={styles.kw}>const</span>
              <span className={styles.plain}> greet </span>
              <span className={styles.op}>=</span>
              <span className={styles.plain}> () </span>
              <span className={styles.op}>=&gt;</span>
              <span className={styles.plain}> {"{"}</span>
            </div>

            <div className={styles.codeLine}>
              <span className={styles.lineNum}>2</span>
              <span className={styles.plain}>&nbsp;&nbsp;</span>
              <span className={styles.fn}>console</span>
              <span className={styles.plain}>.</span>
              <span className={styles.fn}>log</span>
              <span className={styles.plain}>(</span>
              <span className={styles.str} ref={typedRef} />
              <span className={styles.cursor} />
              <span className={styles.plain} ref={closeParenRef} />
            </div>

            <div className={styles.codeLine}>
              <span className={styles.lineNum}>3</span>
              <span className={styles.plain}>{"}"}</span>
            </div>

            <div className={styles.outputLine} ref={outputRef}>
              <span className={styles.outputPrompt}>&gt; </span>
              Hello world!
            </div>
          </div>
        </div>
      </div>

      <div className={styles.standNeck} />
      <div className={styles.standBase} />
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroGrid} aria-hidden="true" />

          <div className={styles.container}>
            <div className={styles.heroLayout}>
              {/* Left — text content */}
              <div className={styles.heroInner}>
                <p className={`${styles.heroTag} fade-up`}>
                  <span className={styles.dot} />
                  Full-Stack Developer
                </p>

                <h1 className={`${styles.heroName} fade-up-1`}>
                  Developing modern
                  <br />
                  <span className={styles.heroNameAccent}>
                    full-stack architecture
                  </span>
                </h1>

                <p className={`${styles.heroRole} fade-up-2`}>
                  Full-Stack Developer • Mehmet Demir
                </p>

                <p className={`${styles.heroDesc} fade-up-3`}>
                  I build scalable and high-performance web applications using{" "}
                  <span className={styles.hl}>Node.js</span>,{" "}
                  <span className={styles.hl}>Express.js</span>,{" "}
                  <span className={styles.hl}>C#/.NET</span>,{" "}
                  <span className={styles.hl}>React</span>, and{" "}
                  <span className={styles.hl}>Next.js</span> focusing on robust
                  backend architecture, clean frontend systems, and efficient,
                  maintainable development workflows.
                </p>

                <div className={`${styles.heroBtns} fade-up-4`}>
                  <a href="#experience" className={styles.btnPrimary}>
                    Explore My Experience
                  </a>
                  <a
                    href="https://mail.google.com/mail/?view=cm&to=demirmehmet226648@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnSecondary}
                  >
                    Contact Me
                  </a>
                </div>
              </div>

              {/* Right — monitor */}
              <div className={`${styles.heroMonitor} fade-up-2`}>
                <MonitorAnimation />
              </div>
            </div>

            {/* Stats Bar */}
            <div className={`${styles.heroStats} fade-up-5`}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>2+</span>
                <span className={styles.statLabel}>Years of Experience</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNum}>20+</span>
                <span className={styles.statLabel}>Technologies</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNum}>20+</span>
                <span className={styles.statLabel}>Projects</span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>
                <Award size={24} color="#d6b36a" strokeWidth={1.5} />
                &nbsp;Expertise
              </span>
              <h2 className={styles.sectionTitle}>Core Technologies</h2>
              <p className={styles.sectionDesc}>
                A balanced stack across backend engineering, frontend
                development, database systems, and cloud tooling.
              </p>
            </div>

            <div className={styles.skillsGrid}>
              {Object.entries(skills).map(([category, items], index) => (
                <div key={category} className={styles.skillCard}>
                  <div className={styles.skillCardTop}>
                    <span className={styles.skillIndex}>0{index + 1}</span>
                    <h3 className={styles.skillCategory}>{category}</h3>
                  </div>
                  <div className={styles.badgeWrap}>
                    {items.map((skill) => (
                      <span
                        key={skill.name}
                        className={styles.badge}
                        style={
                          {
                            "--badge-color": skill.color,
                          } as React.CSSProperties
                        }
                      >
                        <span className={styles.badgeDot} />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>
                <Monitor size={24} color="#d6b36a" strokeWidth={1.5} />
                &nbsp;Career
              </span>
              <h2 className={styles.sectionTitle}>Professional Experience</h2>
              <p className={styles.sectionDesc}>
                Hands-on experience across internships, part-time, and full-time
                full-stack development roles.
              </p>
            </div>

            <div className={styles.timeline}>
              {experience.map((exp, i) => (
                <div key={i} className={styles.tlItem}>
                  <div className={styles.tlLine}>
                    <div
                      className={`${styles.tlDot} ${exp.current ? styles.tlDotActive : ""}`}
                    />
                    {i < experience.length - 1 && (
                      <div className={styles.tlConnector} />
                    )}
                  </div>

                  <div className={styles.tlContent}>
                    <div className={styles.tlTop}>
                      <h3 className={styles.tlCompany}>{exp.company}</h3>
                      {exp.current && (
                        <span className={styles.currentBadge}>Active Role</span>
                      )}
                    </div>
                    <p className={styles.tlRole}>{exp.role}</p>
                    <div className={styles.tlMeta}>
                      <span className={styles.tlType}>{exp.type}</span>
                      <span className={styles.tlPeriod}>{exp.period}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>
                <Book size={24} color="#d6b36a" strokeWidth={1.5} />
                &nbsp;Education
              </span>
              <h2 className={styles.sectionTitle}>Academic Background</h2>
            </div>

            <div className={styles.eduGrid}>
              {education.map((edu, i) => (
                <div key={i} className={styles.eduCard}>
                  <span className={styles.eduIcon}>{edu.icon}</span>
                  <div>
                    <h3 className={styles.eduSchool}>{edu.school}</h3>
                    <p className={styles.eduPeriod}>{edu.period}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>
                <User size={24} color="#d6b36a" strokeWidth={1.5} />
                &nbsp;About
              </span>
              <h2 className={styles.sectionTitle}>About Me</h2>
              <p className={styles.sectionDesc}>
                A little more about who I am, what I do, and where I'm headed.
              </p>
            </div>

            <div className={styles.aboutBox}>
              {about.map((item, i) => (
                <div key={i} className={styles.aboutRow}>
                  <div className={styles.aboutRowLeft}>
                    <ArrowDownRight
                      size={24}
                      color="#d6b36a"
                      strokeWidth={1.5}
                    />
                    <h1 className={styles.aboutRowTitle}>{item.title}</h1>
                  </div>
                  <p className={styles.aboutRowContent}>{item.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>
                <PhoneCall size={26} color="#d6b36a" strokeWidth={1} />
                &nbsp;Contact
              </span>
              <h2 className={styles.sectionTitle}>Let's Contact</h2>
              <p className={styles.sectionDesc}>
                Available for collaborations, full-time opportunities, and
                meaningful product work.
              </p>
            </div>

            <div className={styles.contactBox}>
              <div className={styles.contactLinks}>
                <a
                  href="https://mail.google.com/mail/?view=cm&to=demirmehmet226648@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  <span className={styles.contactLinkIcon}>✉</span>
                  demirmehmet226648@gmail.com
                </a>
                <a
                  href="https://linkedin.com/in/mehmet-demir-"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  <span className={styles.contactLinkIcon}>
                    <LinkedIn size={24} color="#d6b36a" strokeWidth={1.5} />
                  </span>
                  LinkedIn
                </a>
                <a
                  href="https://github.com/MehmetDemr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  <span className={styles.contactLinkIcon}>
                    <GitHub size={24} color="#d6b36a" strokeWidth={1.5} />
                  </span>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
