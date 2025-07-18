//hof...
//A higher-order function is a function that does one of the following:
// Takes another function as an argument.
// Returns another function as its result.
// Higher-order functions help make your code more reusable and modular by allowing you to work with functions like any other value.

//write a function to calculate 10% of a number....

// let amount = [200, 400, 500, 600, 700, 800];

// function calculateTenPercent(amount) {
//   let res = [];
//   for (let i = 0; i < amount.length; i++) {
//     res.push(amount[i] * 0.1);
//   }
//   return res;
// }

// function calculateTwentyPercent(amount) {
//   let res = [];
//   for (let i = 0; i < amount.length; i++) {
//     res.push(amount[i] * 0.2);
//   }
//   return res;
// }
// function calculateThirtyPercent(amount) {
//   let res = [];
//   for (let i = 0; i < amount.length; i++) {
//     res.push(amount[i] * 0.3);
//   }
//   return res;
// }
// console.log(calculateThirtyPercent(amount));
let amount = [200, 400, 500, 600, 700, 800];
let arr1 = [300, 500, 600, 900];

function calculateTenPercent(amount) {
  return amount * 0.1;
}
function calculateTwentyPercent(amount) {
  return amount * 0.2;
}
function calculateThirtyPercent(amount) {
  return amount * 0.3;
}

Array.prototype.calculate = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i]));
  }
  return res;
};

// console.log(amount.calculate(calculateTwentyPercent));
// console.log(amount.calculate(calculateTenPercent));

// console.log(calculate(amount, calculateTenPercent));
// console.log(calculate(amount, calculateTwentyPercent));
// console.log(calculate(amount, calculateThirtyPercent));

// let arr2 = [1, 2, 3, 4, 5, 6];
//map....

// arr2.map((ele) => {
//   console.log(ele * 4);
// });

//filter...

// arr2.filter((Element) => {
//   if (Element % 2 == 0) {
//     console.log(Element);
//   }
// });

//reduce....

// let result = arr2.reduce((acc, Element) => {
//   return acc + Element;
// });
// console.log(result);

// let arr2 = [1, 2, 3, 4, 5, 6];

// let result = arr2
//   .map((ele) => {
//     return ele * 2;
//   })
//   .filter((ele) => {
//     if (ele % 2 == 0) {
//       return ele;
//     }
//   })
//   .reduce((acc, ele) => {
//     return acc + ele;
//   });

// console.log(result);

// setTimeout(() => {
//   console.log("me 2 second bad chala");
// }, 5000);

let pransahnt = [200, 400, 500, 600, 700, 800];

function calculateTenPercent(amount) {
  return amount * 0.1;
}
function calculateTwentyPercent(amount) {
  return amount * 0.2;
}
function calculateThirtyPercent(amount) {
  return amount * 0.3;
}

Array.prototype.calculate = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    res.push(cb(this[i]));
  }
  return res;
};

console.log(pransahnt.calculate(calculateTenPercent));
