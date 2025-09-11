import React from "react";
import Card from "./Card";
import products from "../data-api/product";
import { useSearch } from "../context/SearchContext.jsx";

const Home = () => {
  const { search } = useSearch();
  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="flex justify-around flex-wrap gap-6">
      {filteredProducts.map((product) => (
        <Card key={product.id} productObj={product} />
      ))}
    </div>
  );
};

export default Home;
