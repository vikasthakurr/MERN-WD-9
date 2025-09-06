import express from "express";
import mongoose from "mongoose";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
//connection with database...
mongoose
  .connect(
    "mongodb+srv://vikaskumar20012001:Vikas123@hyper-market.vzinuvr.mongodb.net/"
  )
  .then(() => {
    console.log("Connected to database");
  })
  .catch((error) => {
    console.error("Error connecting to your database:", error);
  });

//schema writing
const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
});

//model
const User = mongoose.model("User", userSchema);

//post route

//create operation....
// app.post("/signup", async (req, res) => {
//   const user = new User({
//     username: req.body.username,
//     password: req.body.password,
//     email: req.body.email,
//   });
//   await user.save();
//   res.send("User signed up successfully");
// });

//post route with hashed password
app.post("/signup", async (req, res) => {
  const hashedPassword = await bcrypt.hash(req.body.password, 10);
  const user = new User({
    username: req.body.username,
    password: hashedPassword,
    email: req.body.email,
  });
  await user.save();
  res.send("User signed up successfully");
});


//read operation....
app.get("/users", async (req, res) => {
  const users = await User.find();
  res.json(users);
});

//update operation

app.put("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(user);
});
app.patch("/users/:id", async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.json(user);
});

//delete operation
app.delete("/users/:id", async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.send("User deleted successfully");
});

//server listening
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
