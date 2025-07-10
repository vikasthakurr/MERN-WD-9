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

let person = {
  fname: "vikas",
  lname: "thakur",
  age: 24,
};

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



(function sayHi() {
  console.log("hello");
})();

sayHi();

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
