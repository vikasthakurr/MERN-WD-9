//premitive data types...

// // 1. number
// let age =30;

// console.log(typeof age);
// let age2= 50.6;
// console.log(typeof age2)
// 2. string

// let name = "vikas1";
// console.log(typeof name);

// 3. boolean
// let isLoggedIn = false;
// console.log(typeof isLoggedIn);
// 4.undefined
// 5.null
// let a = null;
// console.log(typeof a);
// 6.symbol
// 7.bigInt
//non-premitive data types...or reference type
//1.object

// let person = {
//   fname: "vikas",
//   lname: "thakur",
//   age: 24,
// };

// console.log(person.lname);
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));

// let person2 = new Object();
// person2.fname = "pulkit";
// person2.age = 24;
// // console.log(Object.keys(person2));
// // console.log(Object.values(person2));
// console.table(Object.entries(person2));

// console.log(person2.age)
//2.array

// const arr = [1, 3, 3, 4, 54, 5, 5];
// console.log(arr);

// const arr2 = new Array(1, 2, 3, 4);
// console.log(arr2);

//
//3.function

// sayHi();

// function sayHi() {
// //
// return "hello";
// }

//anonymous function....

// sayHi();

// var sayHi = function () {
//   console.log("hello");
// };
// console.log(sum(2, 4));

// let sum = (a, b) => a + b;



// (function sayHi() {
//   console.log("hello");
// })();

// sayHi();

// let name = "vikas";
// let name2 = name;
// name2 = "akash";
// console.log(name2)
// console.log(name);

// let data = {
//   name: "pulkit",
//   age: 24,
// };

// let data2 = data;
// data2.name = "aman";
// console.log(data);
// console.log(data2);



// 🔹 Primitive Data Types
// Primitive data types are the most basic data types in JavaScript. They are immutable and stored by value, meaning that when assigned to a variable, a copy of the value is stored.

// 1. Number
// Represents both integers and floating-point numbers.
// Example: 30, 50.6

// 2. String
// Represents a sequence of characters enclosed in quotes (single, double, or backticks).
// Example: "vikas", 'hello', `template`

// 3. Boolean
// Represents logical values: true or false.
// Used in conditional statements and logical operations.

// 4. Undefined
// A variable that has been declared but has not yet been assigned a value is undefined.

// 5. Null
// Represents the intentional absence of any value or object.
// Although it represents "nothing", the type of null is object due to a long-standing bug in JavaScript.

// 6. Symbol
// Introduced in ES6. Represents a unique and immutable value used as object property keys to avoid name collisions.

// 7. BigInt
// A special numeric type that allows you to work with integers beyond the safe range for Number.

// 🔹 Non-Primitive (Reference) Data Types
// These are complex types stored by reference, meaning variables store a reference to the actual data in memory.

// 1. Object
// An unordered collection of key-value pairs.
// Keys are strings (or Symbols), and values can be of any data type, including functions and other objects.

// 2. Array
// A special type of object used to store ordered lists.
// Each element is accessed using its index starting from 0.

// 3. Function
// A block of reusable code that performs a task or calculates a value.
// In JavaScript, functions are first-class objects, meaning they can be assigned to variables, passed as arguments, and returned from other functions.

// 🔁 Value vs Reference
// Primitive types are passed by value: when assigned or passed, a copy is made.

// Reference types are passed by reference: when assigned or passed, a reference to the same object is used.

