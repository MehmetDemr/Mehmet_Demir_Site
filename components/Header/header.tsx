"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./header.module.css";
import { Globe } from "@deemlol/next-icons";
import { useLanguage } from "../../context/language-context";
import { navTranslations, languages } from "@/lib/translations";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  const { locale, setLocale } = useLanguage();
  const t = navTranslations[locale];

  const navLinks = [
    { label: t.skills, href: "/#skills" },
    { label: t.experience, href: "/#experience" },
    { label: t.education, href: "/#education" },
    { label: t.projects, href: "/myprojects" },
    { label: t.about, href: "/#about" },
    { label: t.contact, href: "/#contact" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.inner}>
        <a href="/" className={styles.logo} onClick={() => setMenuOpen(false)}>
          Mehmet Demir
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.navLink}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}

          <div className={styles.langWrapper} ref={langRef}>
            <button
              type="button"
              className={styles.langBtn}
              onClick={() => setLangOpen((prev) => !prev)}
              aria-label="Change language"
              aria-expanded={langOpen}
            >
              <Globe size={18} />
            </button>

            {langOpen && (
              <div className={styles.langMenu}>
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    type="button"
                    className={`${styles.langItem} ${
                      locale === lang.code ? styles.langItemActive : ""
                    }`}
                    onClick={() => {
                      setLocale(lang.code);
                      setLangOpen(false);
                      setMenuOpen(false);
                    }}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="mailto:demirmehmet226648@gmail.com"
            className={styles.ctaBtn}
            onClick={() => setMenuOpen(false)}
          >
            {t.resume}
          </a>
        </nav>

        <button
          type="button"
          className={`${styles.burger} ${menuOpen ? styles.burgerActive : ""}`}
          onClick={() => {
            setMenuOpen((prev) => !prev);
            setLangOpen(false);
          }}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </div>
    </header>
  );
}
