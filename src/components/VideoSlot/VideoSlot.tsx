import { assetExists } from "@/lib/assets";
import type { Media } from "@/content/types";
import styles from "./VideoSlot.module.css";

type VideoSlotProps = {
  media: Media;
  className?: string;
};

export function VideoSlot({ media, className = "" }: VideoSlotProps) {
  const isFilled = assetExists(media.file);
  const src = media.file.startsWith("/") ? media.file : `/${media.file}`;
  const posterSrc = media.poster
    ? media.poster.startsWith("/")
      ? media.poster
      : `/${media.poster}`
    : undefined;

  return (
    <div
      className={`${styles.slot} ${isFilled ? styles.filled : ""} ${className}`}
      style={{ aspectRatio: media.ratio }}
    >
      {isFilled ? (
        <video
          src={src}
          poster={posterSrc}
          controls
          muted
          playsInline
          preload="none"
          className={styles.video}
          aria-label={media.alt || media.hint}
        />
      ) : (
        <>
          {media.label && (
            <div className={styles.chip} aria-hidden="true">
              <span className={styles.rec} />
              <span>{media.label}</span>
            </div>
          )}
          <div className={styles.placeholder} role="img" aria-label={media.hint}>
            <div className={styles.play} aria-hidden="true">
              <svg className={styles.playIcon} viewBox="0 0 24 24" fill="currentColor">
                <polygon points="6 3 20 12 6 21 6 3" />
              </svg>
            </div>
            <span className={styles.hint}>{media.hint}</span>
            <span className={styles.filePath}>{media.file}</span>
          </div>
          <div className={styles.scrub} aria-hidden="true">
            <span>00:00</span>
            <i className={styles.scrubBar} />
            <span>01:30</span>
          </div>
        </>
      )}
    </div>
  );
}
