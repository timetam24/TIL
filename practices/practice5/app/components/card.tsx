import styles from "./card.module.css";

export default function Card({ children }: { children: React.ReactElement }) {
  return <section className={styles.card}>{children}</section>;
}
