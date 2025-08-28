import express from "express";
import fs from "fs";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to the homepage");
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send("Login successful");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// app.get("/products", (req, res) => {
//   fs.readFile("./assest/document.html", (err, data) => {
//     if (err) {
//       res.status(500).send("Error reading file");
//     } else {
//       res.set("Content-Type", "text/html");
//       res.send(data);
//     }
//   });
// });
