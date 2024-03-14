import styles from "./page.module.css";
import ShoppingCart from "./ui/shopping-cart";
export default function Home() {
  return (
    <main className={styles.main}>
      <ShoppingCart />
    </main>
  );
}
