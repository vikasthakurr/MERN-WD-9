import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./reducers/todoSlice.js";

const AddTodo = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  const handleclick = (e) => {
    e.preventDefault();
    if (inputText == "") return;
    dispatch(addTodo({ text: inputText }));
    setInputText("");
  };
  return (
    <div>
      <input
        value={inputText}
        type="text"
        placeholder="add todo"
        onChange={(e) => setInputText(e.target.value)}
      ></input>
      <button onClick={handleclick}>Add</button>
    </div>
  );
};

export default AddTodo;
