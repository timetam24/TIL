import { ReactNode } from "react";
import { Product } from "../type";
import styles from "./table.module.css";

interface ProductTableProp {
  products: Product[];
}

interface ProductRowProp {
  product: Product;
}

export default function FilterableProductTable({ products }: ProductTableProp) {
  return (
    <div className={styles.filterableTable}>
      <SearchBar />
      <ProductTable products={products} />
    </div>
  );
}

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <input type="text" placeholder="Search..." />
      <input type="checkbox" id="checkStock" />
      <label htmlFor="checkStock">Only show products in stock</label>
    </div>
  );
}

function ProductTable({ products }: ProductTableProp) {
  const rows: ReactNode[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (product.category !== lastCategory) {
      rows.push(
        <ProductCategoryRow
          category={product.category as "Fruits" | "Vegetables"}
          key={product.category}
        />
      );
    }
    rows.push(<ProductRow product={product} key={product.name} />);
    lastCategory = product.category;
  });

  return (
    <table className={styles.productTable}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function ProductCategoryRow({
  category,
}: {
  category: "Fruits" | "Vegetables";
}) {
  return (
    <tr>
      <th colSpan={2}>{category}</th>
    </tr>
  );
}

function ProductRow({ product }: ProductRowProp) {
  const name = product.stocked ? (
    product.name
  ) : (
    <span style={{ color: "blue" }}>{product.name}</span>
  );

  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );
}
