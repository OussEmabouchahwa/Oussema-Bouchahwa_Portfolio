import { stackCategories } from "@/content/stack";
import styles from "./StackList.module.css";

export function StackList() {
  return (
    <div className={styles.stackRows}>
      {stackCategories.map((cat) => (
        <div key={cat.group} className={styles.row}>
          <div className={styles.rowHeader}>
            <b className={styles.groupTitle}>{cat.group}</b>
            <span className={styles.subTitle}>{cat.sub}</span>
          </div>

          <ul className={styles.tags} aria-label={`${cat.group} technologies`}>
            {cat.items.map((item) => (
              <li key={item} className={styles.tag}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
