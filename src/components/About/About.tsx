import { MediaSlot } from "@/components/MediaSlot/MediaSlot";
import { profile } from "@/content/profile";
import styles from "./About.module.css";

export function About() {
  const { about } = profile;

  return (
    <div className={styles.aboutGrid}>
      <div>
        <p className={styles.lead}>
          I&apos;m <strong className={styles.leadHighlight}>Oussema</strong>, a software engineering student at IPSAS in Sfax. I write code that has to work in real companies: booking systems, internal tools, mobile apps and the automations that tie them together.
        </p>

        <p className={styles.bodyText}>
          I also edit video and design visuals, so I care about how a product looks and feels as much as how it runs. Right now I&apos;m going deep on <strong className={styles.bodyStrong}>AI agents and automation</strong>, and I&apos;m looking for a team where I can build tools people use every day.
        </p>

        <div className={styles.bioBlocks}>
          <div className={styles.bioBlock}>
            <span className={styles.bioBlockLabel}>EDUCATION</span>
            {about.education.map((edu) => (
              <p key={edu.degree} className={styles.bioBlockText} style={{ marginTop: "4px" }}>
                <strong className={styles.bioBlockStrong}>{edu.degree}</strong> · {edu.institution} · {edu.detail}
              </p>
            ))}
          </div>

          <div className={styles.bioBlock}>
            <span className={styles.bioBlockLabel}>LANGUAGES</span>
            <p className={styles.bioBlockText}>
              {about.languages.map((l) => `${l.name} (${l.level})`).join(" · ")}
            </p>
          </div>

          <div className={styles.bioBlock}>
            <span className={styles.bioBlockLabel}>CERTIFICATES · DATACAMP</span>
            <ul className={styles.certList}>
              {about.certificates.map((cert) => (
                <li key={cert.file} className={styles.certItem}>
                  <a
                    href={`/${cert.file}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.certLink}
                  >
                    {cert.name}
                  </a>
                  <span className={styles.certDate}>{cert.date}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className={styles.portraitWrapper}>
        <MediaSlot media={about.portrait} sizes="(max-width: 860px) 100vw, 380px" />
      </div>
    </div>
  );
}
