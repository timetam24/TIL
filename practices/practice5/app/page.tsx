import styles from "./page.module.css";
import RecipeList from "./ui/recipe-list";

export default function Home() {
  return (
    <main className={styles.main}>
      <RecipeList />
    </main>
  );
}
