import express from "express";
import nodemailer from "nodemailer";

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: "vikaskumar20012001@gmail.com",
    pass: "your app password",
  },
});

const mailOptions = {
  from: "vikaskumar20012001@gmail.com",
  to: "corknet69@gmail.com",
  subject: "Test Email",
  text: "Hello, this is a test email sent using Nodemailer!",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log(error);
  }
  console.log("Email sent: " + info.response);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
