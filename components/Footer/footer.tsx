import styles from "./footer.module.css";
import { footerTranslations } from "../../lib/translations";
import { useLanguage } from "@/context/language-context";

export default function Footer() {
  const { locale } = useLanguage();
  const t = footerTranslations[locale];

  return (
    <footer className={styles.footer}>
      <div className={styles.glow} aria-hidden="true" />

      <div className={styles.bottom}>
        <p className={styles.copy}>© Mehmet Demir. {t.rights}</p>
      </div>
    </footer>
  );
}
