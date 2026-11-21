import { VideoSlot } from "@/components/VideoSlot/VideoSlot";
import { showreelData } from "@/content/media";
import styles from "./Showreel.module.css";

export function Showreel() {
  return (
    <div className={styles.reelGrid}>
      <VideoSlot media={showreelData.media} />

      <div className={styles.reelSide}>
        <span className={styles.highlightTag}>HIGHLIGHT</span>
        <h3 className={styles.sideTitle}>{showreelData.sideTitle}</h3>
        <p className={styles.sideText}>{showreelData.text}</p>

        <div className={styles.roles}>
          {showreelData.roles.map((r) => (
            <div key={r.craft} className={styles.roleRow}>
              <span className={styles.roleCraft}>{r.craft}</span>
              <b className={styles.roleTool}>{r.tool}</b>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
