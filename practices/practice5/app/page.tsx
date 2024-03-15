import styles from "./page.module.css";
import Form from "./ui/declarative-form";

export default function Home() {
  return (
    <main className={styles.main}>
      <Form />
    </main>
  );
}
