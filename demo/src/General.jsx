import React from "react";
import { useSelector } from "react-redux";

const General = () => {
  const todos = useSelector((state) => state.todos);
  console.log("i am in general");
  console.log(todos);
  return <div>General</div>;
};

export default General;
