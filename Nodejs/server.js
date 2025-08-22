// import http from "http";

// const PORT = 3000;
// const server = http.createServer((req, res) => {
//   res.writeHead(409, { "Content-Type": "text/plain" });
//   res.end("hii from server");
//   //   console.log(req.url);
//   //   console.log(req.method);
//   //   console.log(req.headers);
//   //   console.log(req.body);
//   console.log(res);
// });

// server.listen(PORT, () => {
//   console.log(`server is running on port ${PORT}`);
// });

//static files hosting

import http from "http";

const PORT = 3000;

const server = http.createServer((req, res) => {
  if (req.url == "/") {
    res.end("Welcome to the homepage");
  } else if (req.url === "/about") {
    res.end("Welcome to the about page");
  } else if (req.url === "/contact") {
    res.end("Welcome to the contact page");
  } else {
    res.end("404 Not Found");
  }
});
server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
