import { profile } from "@/content/profile";
import { sections } from "@/content/sections";
import { NavTimecode } from "./NavTimecode/NavTimecode";
import styles from "./Nav.module.css";

export function Nav() {
  return (
    <header className={styles.header} id="top">
      <div className={`wrap ${styles.navWrap}`}>
        <a href="#top" className={styles.brand}>
          <span className={styles.mark} aria-hidden="true">
            {profile.monogram}
          </span>
          <span className={styles.brandName}>{profile.name}</span>
        </a>

        <nav aria-label="Primary navigation">
          <ul className={styles.links}>
            {sections.map((section) => {
              const label = section.id.charAt(0).toUpperCase() + section.id.slice(1);
              return (
                <li key={section.id}>
                  <a href={`#${section.id}`} className={styles.link}>
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <NavTimecode />
      </div>
    </header>
  );
}
