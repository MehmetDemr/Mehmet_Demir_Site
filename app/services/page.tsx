"use client";

import styles from "./services.module.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/footer";
import { useLanguage } from "../../context/language-context";
import { ExternalLink } from "@deemlol/next-icons";
import { servicesTranslations } from "../../lib/translations";

export default function Services() {
  const { locale, isLoading } = useLanguage();
  const t = servicesTranslations[locale as keyof typeof servicesTranslations];

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

  const serviceList = t.serviceList;
  const liveCount = serviceList.filter((s) => s.live).length;

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
                <span className={styles.statNum}>{serviceList.length}</span>
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
                  {serviceList.length - liveCount}
                </span>
                <span className={styles.statLabel}>{t.stats.inProgress}</span>
              </div>
            </div>
          </div>

          {/* Services Grid */}
          <div className={styles.grid}>
            {serviceList.map((service, i) => {
              const url: string = service.linkUrl;

              return (
                <div key={i} className={styles.card}>
                  <div className={styles.cardTop}>
                    <div className={styles.cardMeta}>
                      <span
                        className={`${styles.liveBadge} ${service.live ? styles.liveBadgeActive : styles.liveBadgeProgress}`}
                      >
                        <span className={styles.liveDot} />
                        {service.live
                          ? t.statusBadge.live
                          : t.statusBadge.inProgress}
                      </span>
                      <span className={styles.cardIndex}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h2 className={styles.cardTitle}>{service.name}</h2>
                    <p className={styles.cardDesc}>{service.description}</p>
                  </div>

                  <div className={styles.cardBody}>
                    {"featureGroups" in service &&
                      service.featureGroups.map((group, gi) => (
                        <div key={gi} className={styles.featureGroup}>
                          <h3 className={styles.featureGroupTitle}>
                            {group.title}
                          </h3>
                          <ul className={styles.featureList}>
                            {group.items.map((f, fi) => (
                              <li key={fi} className={styles.featureItem}>
                                <span className={styles.featureDot} />
                                {f}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    {"note" in service && (
                      <p className={styles.cardNote}>{service.note}</p>
                    )}
                    {service.features.length > 0 && (
                      <ul className={styles.featureList}>
                        {service.features.map((f, fi) => (
                          <li key={fi} className={styles.featureItem}>
                            <span className={styles.featureDot} />
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className={styles.cardFooter}>
                    

                    {"links" in service ? (
                      (service.links as readonly { label: string; url: string }[]).map((link, li) =>
                        link.url ? (
                          <a
                            key={li}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.liveLink}
                          >
                            <ExternalLink size={14} strokeWidth={1.5} />
                            {link.label}
                          </a>
                        ) : (
                          <span
                            key={li}
                            className={`${styles.liveLink} ${styles.liveLinkDisabled}`}
                            aria-disabled="true"
                          >
                            {link.label}
                          </span>
                        ),
                      )
                    ) : url ? (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.liveLink}
                      >
                        <ExternalLink size={14} strokeWidth={1.5} />
                        {t.viewService}
                      </a>
                    ) : (
                      <span
                        className={`${styles.liveLink} ${styles.liveLinkDisabled}`}
                        aria-disabled="true"
                      >
                        {t.comingSoon}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
