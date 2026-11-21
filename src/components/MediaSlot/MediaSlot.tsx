import Image from "next/image";
import { assetExists } from "@/lib/assets";
import type { Media } from "@/content/types";
import styles from "./MediaSlot.module.css";

type MediaSlotProps = {
  media: Media;
  className?: string;
  priority?: boolean;
  sizes?: string;
};

export function MediaSlot({
  media,
  className = "",
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
}: MediaSlotProps) {
  const isFilled = assetExists(media.file);
  const src = media.file.startsWith("/") ? media.file : `/${media.file}`;

  return (
    <div
      className={`${styles.slot} ${isFilled ? styles.filled : ""} ${className}`}
      style={{ aspectRatio: media.ratio }}
    >
      {isFilled ? (
        <Image
          src={src}
          alt={media.alt || media.hint}
          fill
          priority={priority}
          sizes={sizes}
          className={styles.image}
        />
      ) : (
        <div className={styles.placeholder} role="img" aria-label={media.hint}>
          <svg
            className={styles.icon}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect width="18" height="18" x="3" y="3" rx="2" ry="2" />
            <circle cx="9" cy="9" r="2" />
            <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
          </svg>
          <span className={styles.hint}>{media.hint}</span>
          <span className={styles.filePath}>{media.file}</span>
        </div>
      )}
    </div>
  );
}
