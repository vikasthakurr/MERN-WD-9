import http from "http";

const PORT = 3000;
const server = http.createServer((req, res) => {
  res.end("hii from server");
  //   console.log(req.url);
  //   console.log(req.method);
  //   console.log(req.headers);
  //   console.log(req.body);
  console.log(res);
});

server.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
