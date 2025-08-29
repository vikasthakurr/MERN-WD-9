import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";

const PORT = 3000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const upload = multer({ dest: "uploads/" });
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      path.basename(file.originalname, path.extname(file.originalname)) +
        path.extname(file.originalname)
    );
  },
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post(
  "/upload",
  multer({ storage: storage }).single("avatar"),
  (req, res) => {
    res.send("File uploaded successfully");
  }
);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
