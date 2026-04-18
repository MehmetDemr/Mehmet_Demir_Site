"use client";

import { useEffect, useRef } from "react";
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
import { bodyTranslations } from "../lib/translations";
import { useLanguage } from "../context/language-context";

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
  const { locale, isLoading } = useLanguage();
  const t = bodyTranslations[locale as keyof typeof bodyTranslations];

  useEffect(() => {
    if (!isLoading && window.location.hash) {
      const id = window.location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [isLoading]);

  if (isLoading) {
    return (
      <>
        
        <main className={styles.main}>
          <div className={styles.loaderWrap}>
            <div className={styles.loader} />
          </div>
        </main>
      
      </>
    );
  }

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
                  {t.hero.tag}
                </p>
                <h1 className={`${styles.heroName} fade-up-1`}>
                  {t.hero.heading.split("\n").map((line, i) => (
                    <span key={i}>
                      {i === 0 ? (
                        line
                      ) : (
                        <span className={styles.heroNameAccent}>{line}</span>
                      )}
                      {i === 0 && <br />}
                    </span>
                  ))}
                </h1>

                <p className={`${styles.heroRole} fade-up-2`}>{t.hero.role}</p>

                <p className={`${styles.heroDesc} fade-up-3`}>
                  {t.hero.description.split(/(\{[^}]+\})/).map((part, i) => {
                    const match = part.match(/^\{(.+)\}$/);
                    if (match)
                      return (
                        <span key={i} className={styles.hl}>
                          {match[1]}
                        </span>
                      );
                    return part;
                  })}
                </p>

                <div className={`${styles.heroBtns} fade-up-4`}>
                  <a href="#experience" className={styles.btnPrimary}>
                    {t.hero.btnExplore}
                  </a>

                  <a
                    href="https://mail.google.com/mail/?view=cm&to=demirmehmet226648@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.btnSecondary}
                  >
                    {t.hero.btnContact}
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
                <span className={styles.statNum}>{t.stats.experience.num}</span>
                <span className={styles.statLabel}>
                  {t.stats.experience.label}
                </span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNum}>
                  {t.stats.technologies.num}
                </span>
                <span className={styles.statLabel}>
                  {t.stats.technologies.label}
                </span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.statItem}>
                <span className={styles.statNum}>{t.stats.projects.num}</span>
                <span className={styles.statLabel}>
                  {t.stats.projects.label}
                </span>
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
                &nbsp;{t.skills.tag}
              </span>
              <h2 className={styles.sectionTitle}>{t.skills.title}</h2>
              <p className={styles.sectionDesc}>{t.skills.description}</p>
            </div>

            <div className={styles.skillsGrid}>
              {Object.entries(t.skills.categories).map(
                ([category, items], index) => (
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
                ),
              )}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className={styles.section}>
          <div className={styles.container}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionTag}>
                <Monitor size={24} color="#d6b36a" strokeWidth={1.5} />
                &nbsp;{t.experience.tag}
              </span>
              <h2 className={styles.sectionTitle}>{t.experience.title}</h2>
              <p className={styles.sectionDesc}>{t.experience.description}</p>
            </div>

            <div className={styles.timeline}>
              {t.experience.items.map((exp, i) => (
                <div key={i} className={styles.tlItem}>
                  <div className={styles.tlLine}>
                    <div
                      className={`${styles.tlDot} ${exp.current ? styles.tlDotActive : ""}`}
                    />
                    {i < t.experience.items.length - 1 && (
                      <div className={styles.tlConnector} />
                    )}
                  </div>

                  <div className={styles.tlContent}>
                    <div className={styles.tlTop}>
                      <h3 className={styles.tlCompany}>{exp.company}</h3>
                      {exp.current && (
                        <span className={styles.currentBadge}>
                          {t.experience.activeBadge}
                        </span>
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
                &nbsp;{t.education.tag}
              </span>
              <h2 className={styles.sectionTitle}>{t.education.title}</h2>
            </div>

            <div className={styles.eduGrid}>
              {t.education.items.map((edu, i) => (
                <div key={i} className={styles.eduCard}>
                  <span className={styles.eduIcon}>
                    <House size={24} color="#d6b36a" strokeWidth={1.5} />
                  </span>
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
                &nbsp;{t.about.tag}
              </span>
              <h2 className={styles.sectionTitle}>{t.about.title}</h2>
              <p className={styles.sectionDesc}>{t.about.subtitle}</p>
            </div>

            <div className={styles.aboutBox}>
              {t.about.items.map((item, i) => (
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
                &nbsp;{t.contact.tag}
              </span>
              <h2 className={styles.sectionTitle}>{t.contact.title}</h2>
              <p className={styles.sectionDesc}>{t.contact.description}</p>
            </div>

            <div className={styles.contactBox}>
              <div className={styles.contactLinks}>
                <a
                  href={`https://mail.google.com/mail/?view=cm&to=${t.contact.email}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.contactLink}
                >
                  <span className={styles.contactLinkIcon}>✉</span>
                  {t.contact.email}
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
                  {t.contact.linkedin}
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
                  {t.contact.github}
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
