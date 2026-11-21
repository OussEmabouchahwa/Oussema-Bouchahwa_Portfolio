import { jobs, experienceNote } from "@/content/experience";
import styles from "./ExperienceTracks.module.css";

const trackColorClass = {
  tape: styles.trackTape,
  steel: styles.trackSteel,
  sage: styles.trackSage,
};

const clipColorClass = {
  tape: styles.clipTape,
  steel: styles.clipSteel,
  sage: styles.clipSage,
};

export function ExperienceTracks() {
  return (
    <div className={styles.container}>
      <div className={styles.tracks}>
        <div className={styles.trackRuler} aria-hidden="true">
          <div className={styles.rulerLabel}>TRACK / ROLE</div>
          <div className={styles.rulerScale}>
            <span>0m</span>
            <span>3m</span>
            <span>6m</span>
            <span>9m</span>
            <span>12m</span>
          </div>
        </div>

        {jobs.map((job) => {
          const widthPercent = (job.months / 12) * 100;
          return (
            <div key={job.company} className={styles.trackRow}>
              <div className={styles.meta}>
                <b className={`${styles.trackId} ${trackColorClass[job.color]}`}>
                  {job.track}
                </b>
                <strong className={styles.company}>{job.company}</strong>
                <span className={styles.subMeta}>
                  {job.role.split("&")[0].trim()} · {job.months} {job.months === 1 ? "mo" : "mos"}
                </span>
              </div>

              <div className={styles.lane}>
                <div
                  className={`${styles.clip} ${clipColorClass[job.color]}`}
                  style={{ width: `${widthPercent}%` }}
                >
                  <b className={styles.clipRole}>{job.role}</b>
                  <small className={styles.clipSummary}>{job.points[0]}</small>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.trackNote}>
        <span>{experienceNote}</span>
        <span>Scale: 0 to 12 months</span>
      </div>

      <div className={styles.jobPoints}>
        {jobs.map((job) => (
          <div key={job.company} className={styles.jobCard}>
            <div className={styles.jobCardHeader}>
              <strong className={styles.jobCardTitle}>{job.company}</strong>
              <span className={`${styles.trackId} ${trackColorClass[job.color]}`}>
                {job.track} · {job.months} {job.months === 1 ? "month" : "months"}
              </span>
            </div>
            <div className={styles.jobCardRole}>{job.role}</div>

            <ul className={styles.pointList}>
              {job.points.map((pt) => (
                <li key={pt} className={styles.pointItem}>
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
