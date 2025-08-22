import express from "express";
import fs from "fs";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.end("Hello World from home page");
});

app.get("/", (req, res) => {
  res.end("Hello World from home page");
});
app.get("/product", (req, res) => {
  fs.readFile("./file.html", "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading product.html:", err);
      res.status(500).send("Internal Server Error");
      return;
    }
    res.setHeader("Content-Type", "application/html");
    res.end(data);
  });
});

app.get("/contact", (req, res) => {
  res.end("Hello World from contact page");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
