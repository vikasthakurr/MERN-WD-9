// function sayHi(name, callback) {
//   console.log("Hi, " + name);
//   callback();
// }

// function greet() {
//   console.log("Good morning");
// }

// sayHi("vikas", greet);

function makeSandwich(bread, cb) {
  setTimeout(() => {
    console.log("Making " + bread + " sandwich");
    cb();
  }, 2000);
}

function applySauce(sauce, cb) {
  setTimeout(() => {
    console.log("Applying " + sauce + " sauce");
    cb();
  }, 3000);
}

function stuffing(stuff, cb) {
  setTimeout(() => {
    console.log("Adding " + stuff + " stuffing");
    cb();
  }, 4000);
}

function grilled(temp, cb) {
  setTimeout(() => {
    console.log("Grilling at " + temp + " temperature");
    cb();
  }, 5000);
}
function serving(plate, cb) {
  setTimeout(() => {
    console.log("Serving on " + plate);
    cb();
  }, 6000);
}

makeSandwich("brown bread", () => {
  applySauce("mayo", () => {
    stuffing("potato", () => {
      grilled("high", () => {
        serving("plate", () => {
          console.log("Sandwich is ready");
        });
      });
    });
  });
});
