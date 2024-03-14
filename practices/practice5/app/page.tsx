import styles from "./page.module.css";
import TaskApp from "./ui/task-app";

export default function Home() {
  return (
    <main className={styles.main}>
      <TaskApp />
    </main>
  );
}
