const http = require("http");

const HOST = "localhost";
const PORT = 8080;

http
  .createServer((request, result) => {
    result.setHeader(
      "Access-Control-Allow-Origin",
      request.headers.origin || "*"
    );
    result.setHeader("Access-Control-Request-Method", "*");
    result.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    result.setHeader("Access-Control-Allow-Headers", "*");

    result.writeHead(200, { "Content-Type": "text/html" });
    result.write("Hello World");

    result.end();
  })
  .listen(PORT, HOST, () => {
    console.log(`listening on ${HOST}:${PORT}`);
  });
