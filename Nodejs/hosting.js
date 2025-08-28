import express from "express";
import fs from "fs";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   console.log("middleware 1 called");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("middleware 2 called");
//   next();
// });

app.use((req, res, next) => {
  let username = "akash";
  let password = "12345";
  if (username == req.body.username && password == req.body.password) {
    next();
  } else {
    res.status(401).send("Unauthorized");
  }
});
app.get("/", (req, res) => {
  res.end("hello from home page");
});
//Client side rendering....
app.get("/data", (req, res) => {
  fs.readFile("./data.json", "utf-8", (err, data) => {
    if (err) {
      res.send("Error reading data");
    } else {
      res.end(data);
    }
  });
});
//server side rendering or manual hosting of pages

app.get("/products", (req, res) => {
  fs.readFile("./document.html", (err, data) => {
    if (err) {
      res.status(404).send("Error 404 Page not Found");
    } else {
      res.set("Content-Type", "text/html");
      res.end(data);
    }
  });
});
//post route

app.post("/signup", (req, res) => {
  res.end(req.body.username, req.body.password);
  fs.readFile("./document.html", (err, data) => {
    if (err) {
      res.status(404).send("Error 404 Page not Found");
    } else {
      res.set("Content-Type", "text/html");
      res.end(data);
    }
  });
});

app.post("/login", (req, res) => {
  console.log(req.body);
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
