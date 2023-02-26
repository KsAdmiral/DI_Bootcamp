let main = require("./main.js");
const b = 5;

console.log(main.largeNumber + b);

let http = require("http");

// const server = http
//   .createServer(function (req, res) {
//     console.log("I'm listening");
//     res.setHeader("Content-Type", "text/html");
//     res.writeHead(200);
//     res.end(
//       `<h1>Hi there at the frontend</h1> My Module is ${main.largeNumber}`
//     );
//   })
//   .listen(3000);

const server2 = http
  .createServer((req, res) => {
    console.log("I'm listening");
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    res.end(`The date and time are ${main.getDate()}`);
  })
  .listen(8080);
