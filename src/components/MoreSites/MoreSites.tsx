import { MediaSlot } from "@/components/MediaSlot/MediaSlot";
import { shippedSites } from "@/content/projects";
import styles from "./MoreSites.module.css";

export function MoreSites() {
  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <h3 className={styles.title}>More sites I&apos;ve shipped</h3>
        <span className={styles.note}>4 client sites · screenshots pending</span>
      </div>

      <div className={styles.sitesGrid}>
        {shippedSites.map((site) => (
          <div key={site.id} className={styles.siteCard}>
            <MediaSlot media={site.media} className={styles.siteSlot} />
            <div className={styles.siteMeta}>
              <span className={styles.todo}>{site.name}</span>
              <span className={styles.todo}>{site.domain}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
