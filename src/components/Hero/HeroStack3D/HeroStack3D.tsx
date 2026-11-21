"use client";

import { useRef, useEffect } from "react";
import { MediaSlot } from "@/components/MediaSlot/MediaSlot";
import { VideoSlot } from "@/components/VideoSlot/VideoSlot";
import { profile } from "@/content/profile";
import styles from "./HeroStack3D.module.css";

export function HeroStack3D() {
  const stageRef = useRef<HTMLDivElement>(null);
  const rigRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stage = stageRef.current;
    const rig = rigRef.current;
    if (!stage || !rig) return;

    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!finePointer || reducedMotion) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = stage.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      rig.style.setProperty("--ry", `${(x * 24).toFixed(2)}deg`);
      rig.style.setProperty("--rx", `${(-y * 16).toFixed(2)}deg`);
    };

    const handlePointerLeave = () => {
      rig.style.setProperty("--ry", "0deg");
      rig.style.setProperty("--rx", "0deg");
    };

    stage.addEventListener("pointermove", handlePointerMove);
    stage.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      stage.removeEventListener("pointermove", handlePointerMove);
      stage.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <div ref={stageRef} className={styles.stage} aria-hidden="true">
      <div ref={rigRef} className={styles.rig}>
        <div className={`${styles.layer} ${styles.posterLayer}`}>
          <MediaSlot media={profile.hero.layers.poster} priority />
        </div>

        <div className={`${styles.layer} ${styles.reelLayer}`}>
          <VideoSlot media={profile.hero.layers.showreel} />
        </div>

        <div className={`${styles.layer} ${styles.shotLayer}`}>
          <MediaSlot media={profile.hero.layers.heroApp} priority />
        </div>

        <div className={`${styles.layer} ${styles.codeLayer}`}>
          <span className={styles.codeKeyword}>const</span> me = &#123; stack: &quot;MERN&quot;, craft: [&quot;code&quot;, &quot;film&quot;] &#125;;
        </div>
      </div>
    </div>
  );
}
