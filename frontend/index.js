const http = require("http");
const fs = require("fs");

const HOST = "localhost";
const PORT = 80;

http
  .createServer((request, result) => {
    fs.readFile("./index.html", (err, data) => {
      result.writeHead(200, {
        "Content-Type": "text/html",
        "Content-Length": data.length
      });
      result.write(data);
      result.end();
    });
  })
  .listen(PORT, HOST, () => {
    console.log(`listening on ${HOST}:${PORT}`);
  });
