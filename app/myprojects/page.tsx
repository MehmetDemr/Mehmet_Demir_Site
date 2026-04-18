"use client";

import styles from "./myprojects.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { useLanguage } from "../../context/language-context";
import { ExternalLink } from "@deemlol/next-icons";
import { projectsTranslations } from "../../lib/translations";

export default function MyProjects() {
  const { locale, isLoading } = useLanguage();
  const t = projectsTranslations[locale as keyof typeof projectsTranslations];

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

  const projectList = t.projectList;
  const liveCount = projectList.filter((p) => p.live).length;

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroGrid} aria-hidden="true" />

        <div className={styles.container}>
          {/* Page Header */}
          <div className={styles.pageHeader}>
            <p className={styles.pageTag}>
              <span className={styles.dot} />
              {t.pageTag}
            </p>
            <h1 className={styles.pageTitle}>
              {t.pageTitle.main}{" "}
              <span className={styles.accent}>{t.pageTitle.accent}</span>
            </h1>
            <p className={styles.pageDesc}>{t.pageDesc}</p>

            <div className={styles.statsRow}>
              <div className={styles.stat}>
                <span className={styles.statNum}>{projectList.length}</span>
                <span className={styles.statLabel}>{t.stats.total}</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>{liveCount}</span>
                <span className={styles.statLabel}>{t.stats.live}</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statNum}>
                  {projectList.length - liveCount}
                </span>
                <span className={styles.statLabel}>{t.stats.github}</span>
              </div>
            </div>
          </div>

          {/* Projects Grid */}
          <div className={styles.grid}>
            {projectList.map((project, i) => (
              <div key={i} className={styles.card}>
                <div className={styles.cardTop}>
                  <div className={styles.cardMeta}>
                    <span
                      className={`${styles.liveBadge} ${project.live ? styles.liveBadgeActive : styles.liveBadgeInactive}`}
                    >
                      <span className={styles.liveDot} />
                      {project.live ? t.liveBadge.live : t.liveBadge.github}
                    </span>
                    <span className={styles.cardIndex}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <h2 className={styles.cardTitle}>{project.name}</h2>
                  <p className={styles.cardDesc}>{project.description}</p>
                </div>

                <div className={styles.cardBody}>
                  <ul className={styles.featureList}>
                    {project.features.map((f, fi) => (
                      <li key={fi} className={styles.featureItem}>
                        <span className={styles.featureDot} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.cardFooter}>
                  <div className={styles.tagRow}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.liveLink}
                    >
                      <ExternalLink size={14} strokeWidth={1.5} />
                      {t.viewProject}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
