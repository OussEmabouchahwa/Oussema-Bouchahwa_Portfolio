import { CopyEmail } from "./CopyEmail/CopyEmail";
import { profile } from "@/content/profile";
import styles from "./Contact.module.css";

export function Contact() {
  const cvHref = profile.cvPath.startsWith("/") ? profile.cvPath : `/${profile.cvPath}`;

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>
        Let&apos;s build software, cut a film, or talk about an{" "}
        <em className={styles.italic}>alternance.</em>
      </h3>

      <CopyEmail email={profile.email} />

      <div className={styles.ctas}>
        <a
          href={profile.linkedin}
          className={styles.btn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>LinkedIn</span>
          <span aria-hidden="true">↗</span>
        </a>

        <a
          href={profile.github}
          className={styles.btn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>GitHub</span>
          <span aria-hidden="true">↗</span>
        </a>

        <a
          href={cvHref}
          className={styles.btn}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Download CV (PDF)</span>
          <span aria-hidden="true">↓</span>
        </a>
      </div>
    </div>
  );
}
