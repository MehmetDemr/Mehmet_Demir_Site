import styles from "./page.module.css";
import Header from "../components/Header/header";
import Footer from "../components/Footer/footer";

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
    icon: "01",
  },
  {
    school: "Fatma Saygın Anadolu High School",
    period: "2017 — 2021",
    icon: "02",
  },
];

export default function Home() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/*  Hero Section  */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.heroGrid} aria-hidden="true" />

          <div className={styles.container}>
            <div className={styles.heroInner}>
              <p className={`${styles.heroTag} fade-up`}>
                <span className={styles.dot} />
                Open to opportunities
              </p>

              <h1 className={`${styles.heroName} fade-up-1`}>
                Building modern
                <br />
                <span className={styles.heroNameAccent}>digital products</span>
              </h1>

              <p className={`${styles.heroRole} fade-up-2`}>
                Mehmet Demir • Full-Stack Developer
              </p>

              <p className={`${styles.heroDesc} fade-up-3`}>
                I design and build scalable web applications with a strong focus
                on backend architecture, clean frontend systems, and
                maintainable developer workflows across{" "}
                <span className={styles.hl}>.NET</span>,{" "}
                <span className={styles.hl}>Node.js</span>, and{" "}
                <span className={styles.hl}>React</span>.
              </p>

              <div className={`${styles.heroBtns} fade-up-4`}>
                <a href="#experience" className={styles.btnPrimary}>
                  Explore Experience
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

        {/*  Skills Section  */}
        <section id="skills" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>01 / Expertise</span>
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
                        style={{
                          "--badge-color": skill.color,
                        }}
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

        {/*  Experience Section  */}
        <section id="experience" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>02 / Career</span>
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

        {/*  Education Section  */}
        <section id="education" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>03 / Education</span>
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

        {/*  Contact Section  */}
        <section id="contact" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>04 / Contact</span>
              <h2 className={styles.sectionTitle}>Let’s Connect</h2>
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
                  <span className={styles.contactLinkIcon}>in</span>
                  LinkedIn
                </a>

                <a
                  href="https://github.com/MehmetDemr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  <span className={styles.contactLinkIcon}>gh</span>
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
