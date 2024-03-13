import styles from "./page.module.css";
import Gallery from "./ui/gallery";

export default function Home() {
  return (
    <main className={styles.main}>
      <Gallery />
    </main>
  );
}
