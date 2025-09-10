import React from "react";
import Card from "./Card";
import products from "../data-api/product";

const Home = () => {
  return (
    <div className="flex justify-around flex-wrap gap-6">
      {products.map((product) => (
        <Card key={product.id} productObj={product} />
      ))}
    </div>
  );
};

export default Home;
