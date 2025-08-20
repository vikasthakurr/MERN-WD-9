import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./reducer/TodoSlice";
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
    <div className="flex justify-center items-center mt-10">
      <input
        value={inputText}
        type="text"
        placeholder="add todo"
        onChange={(e) => setInputText(e.target.value)}
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      ></input>
      <button
        onClick={handleclick}
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
