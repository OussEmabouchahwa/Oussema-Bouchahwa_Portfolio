import { MediaSlot } from "@/components/MediaSlot/MediaSlot";
import type { Project } from "@/content/types";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={styles.card} aria-labelledby={`card-${project.id}`}>
      <MediaSlot media={project.media} className={styles.cardSlot} />

      <div className={styles.cardBody}>
        <div className={styles.meta}>
          <b className={styles.metaIndex}>{project.index}</b>
          <span>{project.meta.join(" · ")}</span>
        </div>

        <h3 id={`card-${project.id}`} className={styles.title}>
          {project.title}
        </h3>

        <p className={styles.text}>{project.text}</p>

        <div className={styles.cardFooter}>
          <ul className={styles.tags} aria-label="Technologies used">
            {project.tags.map((tag) => (
              <li key={tag} className={styles.tag}>
                {tag}
              </li>
            ))}
          </ul>

          {project.link && (
            project.link.isTodo ? (
              <span className={styles.todo}>TODO repo</span>
            ) : (
              <a
                href={project.link.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.link.label}
              </a>
            )
          )}
        </div>
      </div>
    </article>
  );
}
