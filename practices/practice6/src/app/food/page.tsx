"use client";

import { useState } from "react";
import SearchBar from "@/components/search-bar";
import { foods, FoodList, Food } from "@/containers/food/food-list";

export default function FoodPage() {
  const [query, setQuery] = useState("");
  const results = filterItems(foods, query);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  };

  return (
    <div className="font-inter min-h-screen flex flex-col p-6 gap-6">
      <SearchBar
        value={query}
        onChange={handleChange}
        className="text-xl font-semibold"
      />
      <hr />
      <FoodList items={results} />
    </div>
  );
}

function filterItems(items: Food[], query: string) {
  query = query.toLowerCase();
  return items.filter((item) =>
    item.name.split(" ").some((word) => word.toLowerCase().startsWith(query))
  );
}
