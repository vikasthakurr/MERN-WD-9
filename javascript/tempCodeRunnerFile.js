function outer() {
  let value = 10;
  function inner() {
    console.log(value);
  }
  return inner;
}
let result1 = outer();
result1();
