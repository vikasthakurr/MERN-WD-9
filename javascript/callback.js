function sayHi(name, callback) {
  console.log("Hi, " + name);
  callback();
}

function greet() {
  console.log("Good morning");
}

sayHi("vikas", greet);


function makeSandwich(bread, cb) {
  console.log("Making a sandwich with " + bread);
  cb();
}

function applySauce(sauce, cb) {
  console.log("Applying " + sauce);
  cb();
}

function stuffing(stuff, cb) {
  console.log("Stuffing with " + stuff);
  cb();
}

function grilled(temp, cb) {
  console.log("Grilled at " + temp);
  cb();
}
function serving(plate, cb) {
  console.log("Serving on " + plate);
  cb();
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
