let obj1 = {
  name: "vikas",
  age: 25,
};

function print(city, country) {
  console.log(
    `Name: ${this.name}, Age: ${this.age}, City: ${city}, Country: ${country}`
  );
}

let obj2 = {
  name: "vijay",
  age: 20,
};

//print using call

// print.call(obj1, "Delhi", "India");
// print.call(obj2, "Mumbai", "India");

//print using apply
// print.apply(obj1, ["Delhi", "India"]);
// print.apply(obj2, ["Mumbai", "India"]);

//print using bind
let value1 = print.bind(obj1, "Delhi", "India");
value1();
let value2 = print.bind(obj2, "Mumbai", "India");
value2();
