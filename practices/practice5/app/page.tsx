import styles from "./page.module.css";
import RequestTracker from "./ui/request-tracker";

export default function Home() {
  return (
    <main className={styles.main}>
      <RequestTracker />
    </main>
  );
}
