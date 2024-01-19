import React, { useState, useEffect } from "react";
import { fetchProducts } from "../data/firestore";
import { formatPrice } from "../util/formatPrice";
import CartButton from "./CartButton";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedData = await fetchProducts();
        setProducts(fetchedData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <ul className="bg-slate-200 p-5 border-4 rounded text-center grid grid-cols-2 gap-5 w-full md:max-w-4xl">
      {products.map((product) => (
        <li key={product.id} className="flex flex-col gap-2">
          <div>
            <img src={product.img} alt={product.name} />
          </div>
          <div className="flex justify-center items-center gap-2 text-lg px-1">
            <span>{product.name}</span>
            <span className="mr-auto">{formatPrice(product.price)}</span>
            <span>
              <CartButton width="w-5" />
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ProductList;
