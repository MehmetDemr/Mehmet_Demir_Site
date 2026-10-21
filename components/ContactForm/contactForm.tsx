"use client";

import { useState, type FormEvent } from "react";
import styles from "./contactForm.module.css";
import { bodyTranslations } from "../../lib/translations";
import { useLanguage } from "@/context/language-context";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const { locale } = useLanguage();
  const t = bodyTranslations[locale].contact.form;

  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form));

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, locale }),
      });
      const json = await res.json().catch(() => ({}));

      if (!res.ok || !json.ok) {
        setStatus("error");
        setErrorMessage(
          json.error === "invalid"
            ? t.errorInvalid
            : json.error === "rate_limited"
              ? t.errorRateLimited
              : t.errorServer,
        );
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
      setErrorMessage(t.errorServer);
    }
  }

  const sending = status === "sending";

  return (
    <div className={styles.formBox}>
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>{t.title}</h3>
        <p className={styles.formDesc}>{t.description}</p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label className={styles.field}>
            <span className={styles.label}>{t.name}</span>
            <input
              className={styles.input}
              type="text"
              name="name"
              placeholder={t.namePlaceholder}
              autoComplete="name"
              minLength={2}
              maxLength={100}
              required
            />
          </label>

          <label className={styles.field}>
            <span className={styles.label}>{t.email}</span>
            <input
              className={styles.input}
              type="email"
              name="email"
              placeholder={t.emailPlaceholder}
              autoComplete="email"
              maxLength={254}
              required
            />
          </label>
        </div>

        <label className={styles.field}>
          <span className={styles.label}>{t.subject}</span>
          <input
            className={styles.input}
            type="text"
            name="subject"
            placeholder={t.subjectPlaceholder}
            maxLength={150}
          />
        </label>

        <label className={styles.field}>
          <span className={styles.label}>{t.message}</span>
          <textarea
            className={`${styles.input} ${styles.textarea}`}
            name="message"
            placeholder={t.messagePlaceholder}
            rows={6}
            minLength={10}
            maxLength={5000}
            required
          />
        </label>

        {/* Bot tuzağı: ekranda görünmez */}
        <input
          className={styles.honeypot}
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />

        <div className={styles.footer}>
          <p
            className={`${styles.status} ${
              status === "success" ? styles.statusSuccess : styles.statusError
            }`}
            role="status"
            aria-live="polite"
          >
            {status === "success" ? t.success : status === "error" ? errorMessage : ""}
          </p>

          <button className={styles.submit} type="submit" disabled={sending}>
            {sending ? t.sending : t.submit}
          </button>
        </div>
      </form>
    </div>
  );
}
