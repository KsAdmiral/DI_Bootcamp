// Exercise 1 : HTTP  --------------------------------------------------------------------
// Instructions
// Create a new folder, name it - node-server
// Create a server file, name it - myserver.js
// In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/

// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html" });
//     res.write("<h1>Hello World!</h1>");
//     res.write("<h2>Hello World!</h2>");
//     res.write("<h3>Hello World!</h3>");
//     res.end();
//   })
//   .listen(3000, () => {
//     console.log("Server running on port 3000");
//   });

//   Exercise 2 : HTTP & JSON   --------------------------------------------------------------------
// Instructions
// Create a server file, name it - server.js
// In this file, use http to create a server. Send the below Javascript Object to the browser:
// const user = {
//   firstname: "John",
//   lastname: "Doe",
// };
// // Hint : use JSON.
// // 3. Your server should run on http://localhost:8080/

// const http = require("http");

// http
//   .createServer((req, res) => {
//     res.setHeader('Content-Type', 'application/json');
//     res.end(JSON.stringify(user));
//   })
//   .listen(8080, () => {
//     console.log("Server running on port 8080");
//   });

//   Exercise 3 : Express --------------------------------------------------------------------
// Instructions
// Create a server file, name it - serverExpress.js
// Use express to create a server. Return an HTML line of code (Use only HTML tags, no HTML files), for requests to the root URL (/).
// Remember to use the GET method for the server route.
// Your server should run on http://localhost:3000/

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
