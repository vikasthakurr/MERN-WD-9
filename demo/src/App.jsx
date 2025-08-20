import React from "react";
import AddTodo from "./AddTodo";
import ViewTodo from "./ViewTodo";
import General from "./General";

const App = () => {
  return (
    <div>
      <AddTodo />
      <ViewTodo />
      <General />
    </div>
  );
};

export default App;
