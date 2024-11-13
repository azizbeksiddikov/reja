console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1: Kirish Code (Middleware and Static File Serving)
app.use(express.static("public")); // serves static files (like CSS or images) from the public folder, making them accessible to the client.
app.use(express.json()); // enables JSON payloads in incoming requests to be automatically parsed and available as JavaScript objects.
app.use(express.urlencoded({ extended: true })); // allows parsing of URL-encoded data, typically from HTML forms.

// 2: Session Code
// 3: Views Code
app.set("views", "views"); // specifies the folder (views) where Express will look for template files.
app.set("view engine", "ejs"); // configures Express to use the EJS templating engine, which lets you render dynamic HTML files with embedded JavaScript.

// 4: Routing Code: get AND post
// Get: to get info from db. 3 qism: url, HTTP request header, request body
// Post: brings data into db
// app.get("/hello", function (req, res) {
//   res.end(`<h1 style="background: blue">HELLO WORLD by Andrew</h1>
//     <h2>Project Plan:</h2>`);
// }); // In safari doesn't work
// app.get("/gifts", function (req, res) {
//   res.end(`<h1 style="background: red"> Siz sovgalar sahifasidasiz</h1>`);
// });
app.post("/create-item", (req, res) => {
  console.log(req);
  res.json({ test: "Success" });
});

app.get("/", function (req, res) {
  res.render("harid");
});

// Server Setup
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});

/*
Routing is the process of defining how an application responds to client requests at specific endpoints (or URLs).

ExpressJS is a popular web application framework for Node.js, used to simplify building web servers and APIs 
by providing utilities and middleware for routing, handling requests, serving static files, and managing templates.

Ports are 16-bit numbers ranging from 0 to 65535, so they aren't limited to four digits.
Ports 0-1023 are considered well-known ports and are reserved for specific system services (like HTTP on port 80 and HTTPS on 443).
Ports 1024-49151 are registered ports, often used by third-party services.
Ports 49152-65535 are dynamic or private ports, often used for temporary connections or custom services.

Web Frameworks: Nest, Express (Python: Django)
Front-End: traditional (ejs) bssr-Backend Server Side Rendering AND single page application (React)
Git: local and github; develop and master branches

Bootstrap + Tailwind

Event Loop
NodeJS - libuv 
Single Thread and Multi Thread
JS functions by execution

// git reset --hard
*/
