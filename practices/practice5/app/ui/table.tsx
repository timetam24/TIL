"use client";

import { ReactElement, ReactNode } from "react";
import { Product } from "../type";
import styles from "./table.module.css";
import { useState } from "react";
interface FilterableProductTableProp {
  products: Product[];
}
interface ProductTableProp extends FilterableProductTableProp {
  filterText: string;
  inStockOnly: boolean;
}

interface SearchBarProp {
  onFilterTextChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onInStockOnlyChange: () => void;
}

interface ProductRowProp {
  product: Product;
}

export default function FilterableProductTable({
  products,
}: FilterableProductTableProp) {
  const [filterText, setFilterText] = useState("");
  const [inStockOnly, setInStockOnly] = useState(false);

  const onFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterText(e.target.value);
  };

  const onInStockOnlyChange = () => {
    setInStockOnly((prev) => !prev);
  };

  return (
    <div className={styles.filterableTable}>
      <SearchBar
        onFilterTextChange={onFilterTextChange}
        onInStockOnlyChange={onInStockOnlyChange}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

function SearchBar({ onFilterTextChange, onInStockOnlyChange }: SearchBarProp) {
  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        placeholder="Search..."
        onChange={onFilterTextChange}
      />
      <input type="checkbox" id="checkStock" onChange={onInStockOnlyChange} />
      <label htmlFor="checkStock">Only show products in stock</label>
    </div>
  );
}

function ProductTable({ products, filterText, inStockOnly }: ProductTableProp) {
  const rows: ReactElement[] = [];
  let lastCategory: string | null = null;

  products.forEach((product) => {
    if (product.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    if (inStockOnly && !product.stocked) {
      return;
    }
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
