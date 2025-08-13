import React from "react";
import { useContext } from "react";
import { postman } from "./App";

const Child = () => {
  const data = useContext(postman);
  return (
    <div>
      <h1>{data.name}</h1>
      <h1>{data.age}</h1>
      <h1>{data.city}</h1>
    </div>
  );
};

export default Child;
