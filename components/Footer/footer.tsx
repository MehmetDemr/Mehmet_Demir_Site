import styles from "./footer.module.css";

const skillGroups = {
  Backend: [
    "C#",
    "ASP.NET",
    "Node.js",
    "Express.js",
    "NestJS",
    "Java",
    "REST API",
  ],
  Frontend: [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "HTML5",
    "CSS3",
    "jQuery",
    "Tailwind CSS",
    "Bootstrap",
  ],
  Database: ["PostgreSQL", "MySQL", "SQL Server", "MongoDB"],
  "Cloud & Tools": ["AWS", "Git", "Hostinger", "Vercel"],
};

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.top}>
          <p className={styles.eyebrow}>Full-Stack Developer</p>
          <h3 className={styles.name}>Mehmet Demir</h3>
        </div>

        <div className={styles.grid}>
          <div className={styles.column}>
            <a href="#contact" className={styles.headingLink}>
              Contact
            </a>

            <div className={styles.linkList}>
              <a
                href="https://github.com/MehmetDemr"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.inlineLink}
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/mehmet-demir-"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.inlineLink}
              >
                LinkedIn
              </a>
              <a
                href="mailto:demirmehmet226648@gmail.com"
                className={styles.inlineLink}
              >
                Email
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <a href="#skills" className={styles.headingLink}>
              Skills
            </a>

            <div className={styles.skillGroups}>
              {Object.entries(skillGroups).map(([group, items]) => (
                <div key={group} className={styles.skillGroup}>
                  <h4 className={styles.skillTitle}>{group}</h4>
                  <p className={styles.skillItems}>{items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <a href="#education" className={styles.headingLink}>
              Education
            </a>
          </div>

          <div className={styles.column}>
            <a href="#experience" className={styles.headingLink}>
              Experience
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
