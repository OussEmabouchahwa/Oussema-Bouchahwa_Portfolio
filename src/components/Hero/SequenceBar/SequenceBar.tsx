"use client";

import { useEffect, useRef } from "react";
import { sections } from "@/content/sections";
import styles from "./SequenceBar.module.css";

const clipColorClass: Record<string, string> = {
  work: styles.clipTape,
  media: styles.clipSteel,
  experience: styles.clipSage,
  stack: styles.clipGray,
  about: styles.clipDim,
  contact: styles.clipDim,
};

const rulerTicks = [
  "00:01:00",
  "00:02:00",
  "00:03:00",
  "00:04:00",
  "00:05:00",
  "00:06:00",
];

export function SequenceBar() {
  const clipsContainerRef = useRef<HTMLDivElement>(null);
  const playheadRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clipsContainer = clipsContainerRef.current;
    const playhead = playheadRef.current;
    if (!clipsContainer || !playhead) return;

    const clipElements = Array.from(clipsContainer.querySelectorAll<HTMLAnchorElement>("a[data-sec]"));

    const sizeClips = () => {
      clipElements.forEach((clip) => {
        const secId = clip.getAttribute("data-sec");
        if (!secId) return;
        const secEl = document.getElementById(secId);
        if (secEl) {
          const flexRatio = Math.max(0.6, secEl.offsetHeight / 1000).toFixed(2);
          clip.style.flex = `${flexRatio} 1 0`;
        }
      });
    };

    let ticking = false;

    const updatePlayhead = () => {
      const parentRect = clipsContainer.getBoundingClientRect();
      const mid = window.scrollY + window.innerHeight * 0.4;
      let targetX = 0;

      for (const clip of clipElements) {
        const secId = clip.getAttribute("data-sec");
        if (!secId) continue;
        const secEl = document.getElementById(secId);
        if (!secEl) continue;

        const top = secEl.offsetTop;
        const height = secEl.offsetHeight;
        const clipRect = clip.getBoundingClientRect();

        if (mid >= top && mid < top + height) {
          targetX = (clipRect.left - parentRect.left) + clipRect.width * ((mid - top) / height);
          break;
        }
        if (mid >= top + height) {
          targetX = clipRect.right - parentRect.left;
        }
      }

      playhead.style.left = `${Math.max(0, targetX - 1)}px`;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updatePlayhead);
      }
    };

    const onResize = () => {
      sizeClips();
      onScroll();
    };

    sizeClips();
    updatePlayhead();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <nav className={styles.sequence} aria-label="Sequence timeline table of contents">
      <div className={styles.seqHead}>
        <span>SEQUENCE 01 · 25 FPS</span>
        <span>TABLE OF CONTENTS</span>
      </div>

      <div className={styles.seqScroll}>
        <div className={styles.seqInner}>
          <div className={styles.ruler} aria-hidden="true">
            {rulerTicks.map((tick) => (
              <span key={tick} className={styles.rulerMark}>
                {tick}
              </span>
            ))}
          </div>

          <div ref={clipsContainerRef} className={styles.clips}>
            <div ref={playheadRef} className={styles.playhead} aria-hidden="true" />
            {sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                data-sec={sec.id}
                className={`${styles.clip} ${clipColorClass[sec.id] || styles.clipDim}`}
                aria-label={`${sec.title} ${sec.italic} (${sec.timecode})`}
              >
                <span>{sec.timecode}</span>
                <b className={styles.clipTitle}>
                  {sec.title} {sec.italic}
                </b>
                <small className={styles.clipSubtitle}>{sec.note || sec.track || "Clip"}</small>
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
