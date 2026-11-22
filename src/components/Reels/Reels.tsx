import { VideoSlot } from "@/components/VideoSlot/VideoSlot";
import { reels } from "@/content/media";
import styles from "./Reels.module.css";

export function Reels() {
  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <h4 className={styles.title}>Short-form · 9:16 vertical</h4>
        <span className={styles.count}>{reels.length} reels</span>
      </div>

      <div className={styles.reelsGrid}>
        {reels.map((reel) => (
          <div key={reel.id} className={styles.reelCard}>
            <VideoSlot media={reel.media} className={styles.reelSlot} />
            <div className={styles.reelMeta}>
              <span className={reel.isTodo ? styles.todo : undefined}>{reel.title}</span>
              <span>{reel.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
