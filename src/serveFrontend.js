const http = require("http");
const fs = require("fs");

const HOST = "localhost";
const PORT = 80;

http
  .createServer((request, response) => {
    switch (request.url) {
      case "/dynamic-content.html":
        serveFile(response, "./src/dynamic-content/index.html");
        return;
      case "/timed-content.html":
        serveFile(response, "./src/timed-content/index.html");
        return;
      case "/some-changing-content.html":
        serveFile(response, "./src/some-changing-content/index.html");
        return;
      case "/redirect-me":
        response.writeHead(302, {
          Location: "/dynamic-content.html"
        });
        response.end();
        return;
      default:
        response.statusCode = 404;
        response.end();
    }
  })
  .listen(PORT, HOST, () => {
    console.log(`listening on ${HOST}:${PORT}`);
  });

const serveFile = (response, path) => {
  fs.readFile(path, (err, data) => {
    response.writeHead(200, {
      "Content-Type": "text/html",
      "Content-Length": data.length
    });
    response.write(data);
    response.end();
  });
};
