import styles from "./footer.module.css";
import { footerTranslations } from "../../lib/translations";
import { useLanguage } from "@/context/language-context";
import Link from "next/link";

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
  "Cloud & Tools": [
    "AWS",
    "Git",
    "Hostinger",
    "Vercel",
    "Railway",
    "Google Tag Manager",
    "Google Cloud (OAuth)",
    "Apple Sign In (OAuth)",
  ],
};

export default function Footer() {
  const { locale } = useLanguage();
  const t = footerTranslations[locale];

  const translatedGroups = {
    [t.backend]: skillGroups.Backend,
    [t.frontend]: skillGroups.Frontend,
    [t.database]: skillGroups.Database,
    [t.cloud]: skillGroups["Cloud & Tools"],
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.inner}>
        <div className={styles.top}>
          <p className={styles.eyebrow}>{t.role}</p>
          <h3 className={styles.name}>Mehmet Demir</h3>
        </div>

        <div className={styles.grid}>
          <div className={styles.column}>
            <a href="/#contact" className={styles.headingLink}>
              {t.contact}
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
                {t.email}
              </a>
            </div>
          </div>

          <div className={styles.column}>
            <a href="/#skills" className={styles.headingLink}>
              {t.skills}
            </a>

            <div className={styles.skillGroups}>
              {Object.entries(translatedGroups).map(([group, items]) => (
                <div key={group} className={styles.skillGroup}>
                  <h4 className={styles.skillTitle}>{group}</h4>
                  <p className={styles.skillItems}>{items.join(" · ")}</p>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.column}>
            <a href="/#education" className={styles.headingLink}>
              {t.education}
            </a>
          </div>

          <div className={styles.column}>
            <a href="/#experience" className={styles.headingLink}>
              {t.experience}
            </a>
          </div>

          <div className={styles.column}>
            <a href="/#about" className={styles.headingLink}>
              {t.about}
            </a>
          </div>

          <div className={styles.column}>
            <a href="/myprojects" className={styles.headingLink}>
              {t.myprojects}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
