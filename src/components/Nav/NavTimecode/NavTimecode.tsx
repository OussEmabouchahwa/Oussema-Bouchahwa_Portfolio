"use client";

import { useEffect, useRef, useState } from "react";
import { secondsToTimecode } from "@/lib/timecode";
import styles from "./NavTimecode.module.css";

const TOTAL_SEQUENCE_SECONDS = 360; // 6 minutes total sequence

export function NavTimecode() {
  const [timecode, setTimecode] = useState("00:00:00:00");
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let ticking = false;

    const updateScrollProgress = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? Math.min(1, Math.max(0, scrollY / maxScroll)) : 0;

      setTimecode(secondsToTimecode(progress * TOTAL_SEQUENCE_SECONDS));

      if (progressRef.current) {
        progressRef.current.style.width = `${(progress * 100).toFixed(2)}%`;
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateScrollProgress);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateScrollProgress();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={styles.navtc} aria-label="Timeline position">
        <span className={styles.rec} aria-hidden="true" />
        <span className={styles.tcLabel}>TC</span>
        <span className={styles.tcDigits}>{timecode}</span>
      </div>
      <div className={styles.progressBar} aria-hidden="true">
        <span ref={progressRef} className={styles.progressIndicator} />
      </div>
    </>
  );
}
