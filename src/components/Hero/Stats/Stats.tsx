import { profile } from "@/content/profile";
import styles from "./Stats.module.css";

export function Stats() {
  return (
    <div className={styles.stats}>
      {profile.stats.map((item) => (
        <div key={item.label} className={styles.stat}>
          <strong className={styles.value}>{item.value}</strong>
          <span className={styles.label}>{item.label}</span>
        </div>
      ))}
    </div>
  );
}
