import styles from "./page.module.css";
import TrafficLight from "./ui/traffic-light";

export default function Home() {
  return (
    <main className={styles.main}>
      <TrafficLight />
    </main>
  );
}
