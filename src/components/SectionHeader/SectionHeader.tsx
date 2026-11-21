import styles from "./SectionHeader.module.css";

type SectionHeaderProps = {
  timecode: string;
  title: string;
  italic: string;
  note?: string;
  headingId?: string;
};

export function SectionHeader({
  timecode,
  title,
  italic,
  note,
  headingId,
}: SectionHeaderProps) {
  return (
    <header className={styles.secHead}>
      <div>
        <span className={styles.tc}>{timecode}</span>
        <h2 id={headingId} className={styles.heading}>
          {title} <em className={styles.italic}>{italic}</em>
        </h2>
      </div>
      {note && <div className={styles.note}>{note}</div>}
    </header>
  );
}
