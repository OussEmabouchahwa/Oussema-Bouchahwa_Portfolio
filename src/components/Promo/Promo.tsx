import { VideoSlot } from "@/components/VideoSlot/VideoSlot";
import { MediaSlot } from "@/components/MediaSlot/MediaSlot";
import { campaignData } from "@/content/media";
import styles from "./Promo.module.css";

export function Promo() {
  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <h4 className={styles.title}>Route Insolite · Travel agency campaign</h4>
        <span className={styles.note}>
          Promo video + 2 client photos ({campaignData.locationNote})
        </span>
      </div>

      <div className={styles.campaignGrid}>
        <VideoSlot media={campaignData.promo} />
        {campaignData.photos.map((photo) => (
          <MediaSlot key={photo.file} media={photo} sizes="(max-width: 900px) 100vw, 30vw" />
        ))}
      </div>
    </div>
  );
}
