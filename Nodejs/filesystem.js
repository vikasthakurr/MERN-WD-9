import fs from "fs";

//writing in file
//synchronous method

// fs.writeFileSync("abc.txt", "revise krke aana");

//async method of write
// fs.writeFile("abc.txt", "this is demo pdf", (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("file content added successfully");
//   }
// });

//appending of content

// fs.appendFileSync("abc.txt", "\nthis is demo pdf 2");

//reading from file.....
//Async method...
// let output = fs.readFileSync("abc.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });
// console.log(output);

//method...
// let data = fs.readFileSync("abc.txt", "utf-8");
// console.log(data);

// function clicker() {
//   console.log("clicked");
//   const date = Date.now();
//   fs.writeFileSync("log.txt", date.toString());
// }
// clicker();
// clicker();
// clicker();
// clicker();
// clicker();


// let data = fs.readFileSync("abc.txt", "utf-8");
// console.log(data);

// fs.readFile("abc.txt", "utf-8", (err, data) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });



//delete a file....
// fs.unlinkSync("log.txt");

//rename a file...
// fs.renameSync("abc.txt", "xyz.txt");