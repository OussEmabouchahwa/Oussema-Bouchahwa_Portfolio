"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { ringRadius } from "@/lib/ring";
import styles from "./PosterRing.module.css";

const TOTAL_POSTERS = 8;
const STEP_ANGLE = 360 / TOTAL_POSTERS;

type PosterRingProps = {
  children: ReactNode;
};

export function PosterRing({ children }: PosterRingProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const ringRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const stateRef = useRef({
    angle: 0,
    target: null as number | null,
    paused: false,
    inView: true,
    pauseTimeout: null as NodeJS.Timeout | null,
    reducedMotion: false,
  });

  const go = (direction: number) => {
    const s = stateRef.current;
    const base = Math.round(s.angle / STEP_ANGLE) * STEP_ANGLE;
    s.target = base - direction * STEP_ANGLE;
    s.paused = true;

    if (s.pauseTimeout) clearTimeout(s.pauseTimeout);
    s.pauseTimeout = setTimeout(() => {
      stateRef.current.paused = false;
    }, 5000);
  };

  useEffect(() => {
    const ring = ringRef.current;
    const stage = stageRef.current;
    if (!ring || !stage) return;

    const s = stateRef.current;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    s.reducedMotion = reducedMotion;

    const items = Array.from(ring.children) as HTMLElement[];

    const layout = () => {
      const width = ring.offsetWidth || 200;
      const radius = ringRadius(width, TOTAL_POSTERS);
      ring.style.setProperty("--r", `${radius}px`);

      items.forEach((item, i) => {
        item.style.transform = `rotateY(${i * STEP_ANGLE}deg) translateZ(${radius}px)`;
      });
    };

    let animId: number;

    const renderFrame = () => {
      const s = stateRef.current;

      if (s.target !== null) {
        const diff = s.target - s.angle;
        s.angle += diff * 0.14;
        if (Math.abs(diff) < 0.05) {
          s.angle = s.target;
          s.target = null;
        }
      } else if (!s.reducedMotion && !s.paused && s.inView) {
        s.angle -= 0.08;
      }

      ring.style.setProperty("--a", `${s.angle.toFixed(3)}deg`);

      const activeIdx = ((Math.round(-s.angle / STEP_ANGLE) % TOTAL_POSTERS) + TOTAL_POSTERS) % TOTAL_POSTERS;
      setCurrentIndex(activeIdx);

      animId = requestAnimationFrame(renderFrame);
    };

    layout();
    animId = requestAnimationFrame(renderFrame);

    const onEnter = () => {
      stateRef.current.paused = true;
    };
    const onLeave = () => {
      stateRef.current.paused = false;
    };

    stage.addEventListener("pointerenter", onEnter);
    stage.addEventListener("pointerleave", onLeave);

    let observer: IntersectionObserver | null = null;
    if ("IntersectionObserver" in window) {
      observer = new IntersectionObserver(([entry]) => {
        stateRef.current.inView = entry.isIntersecting;
      });
      observer.observe(stage);
    }

    const onResize = () => {
      layout();
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      stage.removeEventListener("pointerenter", onEnter);
      stage.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("resize", onResize);
      if (observer) observer.disconnect();
      if (s.pauseTimeout) clearTimeout(s.pauseTimeout);
    };
  }, []);

  const formattedCounter = `${String(currentIndex + 1).padStart(2, "0")} / ${String(TOTAL_POSTERS).padStart(2, "0")}`;

  return (
    <div className={styles.container}>
      <div className={styles.headerRow}>
        <div>
          <h4 className={styles.title}>Poster collection · 3D cylinder</h4>
          <p className={styles.subtitle}>8 posters · drag or use arrows · auto-turns when idle</p>
        </div>

        <div className={styles.controls}>
          <span id="posterCount" className={styles.counter} aria-live="polite">
            {formattedCounter}
          </span>
          <div className={styles.buttonGroup}>
            <button
              id="prev"
              type="button"
              className={styles.ringBtn}
              onClick={() => go(-1)}
              aria-label="Previous poster"
            >
              ←
            </button>
            <button
              id="next"
              type="button"
              className={styles.ringBtn}
              onClick={() => go(1)}
              aria-label="Next poster"
            >
              →
            </button>
          </div>
        </div>
      </div>

      <div ref={stageRef} id="ringStage" className={styles.ringStage}>
        <div ref={ringRef} id="ring" className={styles.ring}>
          {children}
        </div>
      </div>
    </div>
  );
}
