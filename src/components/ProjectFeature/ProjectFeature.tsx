import { MediaSlot } from "@/components/MediaSlot/MediaSlot";
import type { Project } from "@/content/types";
import styles from "./ProjectFeature.module.css";

type ProjectFeatureProps = {
  project: Project;
};

export function ProjectFeature({ project }: ProjectFeatureProps) {
  return (
    <article className={styles.feature} aria-labelledby={`feature-${project.id}`}>
      <div className={styles.screenWrap}>
        <div className={styles.screen}>
          {project.screenBar && (
            <div className={styles.screenBar}>
              <span>{project.screenBar.file}</span>
              <span className={styles.pass}>● {project.screenBar.status}</span>
            </div>
          )}
          <MediaSlot media={project.media} />
        </div>
      </div>

      <div>
        <div className={styles.meta}>
          <b className={styles.metaIndex}>{project.index} · Feature</b>
          <span>{project.meta.join(" · ")}</span>
        </div>

        <h3 id={`feature-${project.id}`} className={styles.title}>
          {project.title}
        </h3>

        <p className={styles.text}>{project.text}</p>

        {project.facts && (
          <ul className={styles.facts}>
            {project.facts.map((fact) => (
              <li key={fact.label} className={styles.factItem}>
                <strong className={styles.factValue}>{fact.value}</strong>
                <span className={styles.factLabel}>{fact.label}</span>
              </li>
            ))}
          </ul>
        )}

        <div className={styles.footerRow}>
          <ul className={styles.tags} aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>

          {project.link && (
            <a
              href={project.link.href}
              className={styles.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.link.label}
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
