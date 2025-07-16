// let arr1 = [1, 2, 3, 4, 5];

// let arr2 = arr1;
// arr2.push(6);
// console.log(arr2);
// console.log(arr1);

// let person = {
//   fname: "vikas",
//   lname: "thakur",
//   age: 24,
// };

// let person2 = person;
// person2.age = 35;
// console.log(person2);
// console.log(person);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// // let res = arr1.concat(arr2);
// let res = [...arr1, ...arr2];
// console.log(res);

//objet case 1 shallow copy
// let person = {
//   fname: "vikas",
//   lname: "thakur",
//   age: 24,
//   address: {
//     city: "delhi",
//     state: "delhi",
//     country: "india",
//   },
// };

// let person2 = { ...person };
// person2.age = 35;
// person2.address.city = "agra";
// console.log(person);
// console.log(person2);

// const arr1 = [1, 2, 3, 4, 5, [6, 7, 8, 9]];

// const arr2 = [...arr1];
// arr2[5].push(10);
// console.log(arr1);
// console.log(arr2);

let person = {
  fname: "vikas",
  lname: "thakur",
  age: 24,
  address: {
    city: "delhi",
    state: "delhi",
    country: {
      name: "india",
      code: "IN",
    },
  },
};
//method one to achieve deep copy
// let person2 = structuredClone(person);

// //method two to achieve  deep copy

// // let person2 = JSON.parse(JSON.stringify(person));
// person2.age = 35;
// person2.address.city = "agra";
// person2.address.country.code = "USA";
// console.log(person);
// console.log(person2);

// const arr1 = [1, 2, 3, 4, 5, [6, 7, 8, 9]];

//shallow copy...
// const arr2 = [...arr1];
// arr2[5].push(10);

//deep copy using structuredClone

// let arr2 = structuredClone(arr1);
// arr2.push(6);
// arr2[5].push(10);

//deep copy using JSON.parse(JSON.stringify());

// let arr2 = JSON.parse(JSON.stringify(arr1));
// arr2.push(6);
// arr2[5].push(10);
// console.log(arr1);
// console.log(arr2);

// const arr = ["apple", "banana", "mango", "orange", "grapes"];

// let [first, second, third, ...rest] = arr;

// console.log(first);
// console.log(second);
// console.log(third);
// console.log(rest);

// const data = {
//   name: "vikas",
//   age: 24,
//   address: {
//     city: "delhi",
//     state: "delhi",
//     country: "india",
//   },
// };
// let { name, age, ...rest } = data;

function sum(...args) {
  // console.log(args);
  let sum = 0;
  for (let i = 1; i < args.length; i++) {
    sum = sum + args[i];
  }
  console.log(sum);
  // let res = a + b;
  // console.log(res);
}
sum(1, 3, 4, 5, 6, 7, 8, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19);
