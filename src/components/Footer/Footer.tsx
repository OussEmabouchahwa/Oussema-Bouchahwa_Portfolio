import { profile } from "@/content/profile";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`wrap ${styles.footWrap}`}>
        <span className={styles.copyright}>{profile.footer.copyright}</span>
        <span className={styles.edition}>{profile.footer.edition}</span>
      </div>
    </footer>
  );
}
