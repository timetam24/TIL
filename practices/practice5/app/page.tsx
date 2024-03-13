import FilterableProductTable from "./ui/table";
import styles from "./page.module.css";
import { PRODUCTS } from "./data";

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterableProductTable products={PRODUCTS} />
    </main>
  );
}
