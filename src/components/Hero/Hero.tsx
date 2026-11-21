import { profile } from "@/content/profile";
import { HeroStack3D } from "./HeroStack3D/HeroStack3D";
import { SequenceBar } from "./SequenceBar/SequenceBar";
import { Stats } from "./Stats/Stats";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={`wrap ${styles.hero}`} aria-label="Introduction">
      <div className={styles.heroGrid}>
        <div>
          <div className={styles.kicker}>
            <span>
              <span className={styles.kickerBadge} aria-hidden="true">
                ●{" "}
              </span>
              {profile.hero.kickerBadge}
            </span>
            <span aria-hidden="true">·</span>
            <span>{profile.hero.kickerLocation}</span>
          </div>

          <h1 className={styles.h1}>
            {profile.hero.h1Main}{" "}
            <em className={styles.h1Italic}>{profile.hero.h1Italic}</em>
          </h1>

          <p className={styles.lede}>{profile.hero.lede}</p>

          <div className={styles.ctas}>
            <a href="#work" className={`${styles.btn} ${styles.btnTape}`}>
              <span>{profile.hero.workCta}</span>
              <svg
                className={styles.btnIcon}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </a>

            <a href="#media" className={styles.btn}>
              <span>{profile.hero.mediaCta}</span>
              <svg
                className={styles.btnIcon}
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            </a>
          </div>
        </div>

        <HeroStack3D />
      </div>

      <SequenceBar />
      <Stats />
    </section>
  );
}
