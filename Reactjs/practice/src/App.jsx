import React from "react";
import { createContext } from "react";
import Child from "./Child";

// eslint-disable-next-line react-refresh/only-export-components
export const postman = createContext();
const App = () => {
  const data = {
    name: "vikas",
    age: 20,
    city: "delhi",
  };
  return (
    <div>
      <postman.Provider value={data}>
        <Child />
      </postman.Provider>
    </div>
  );
};

export default App;
