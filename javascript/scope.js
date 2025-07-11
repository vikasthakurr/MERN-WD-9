//global scope
// let a = 10;

// function print() {
//   console.log(a);
// }
// print();
// console.log(a);

//function scope

// function print() {
//   const a = 10;
//   console.log(a);
// }
// print();
// console.log(a);

//block scope
// {
//   let a = 10;
//   const b = 20;
//   var c = 60;
// }
// console.log(a);
// console.log(b);

// console.log(c);

// function outer() {
//   function inner1() {
//     console.log(a);
//   }
//   function inner2() {
//     let a = 10;
//     console.log(a);
//   }
//   inner1();
//   inner2();
// }
// outer();

//lexical env
let a = 30;
function outer() {
  function inner() {
    function inner2() {
      console.log(a);
    }
    inner2();
  }
  inner();
}
outer();
