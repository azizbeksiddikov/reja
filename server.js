console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");
const fs = require("fs");
const livereload = require("livereload");
const connectLivereload = require("connect-livereload");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// mongodb://azbeksid:<IFsZqRzDfrS6NrPY>@<hostname>/?ssl=true&replicaSet=atlas-nio27a-shard-0&authSource=admin&retryWrites=true&w=majority&appName=Cluster0

// 1: Kirish 4 (Middleware and Static File Serving)
app.use(express.static("public")); // serves static files (like CSS or images) from the public folder, making them accessible to the client.
app.use(express.json()); // enables JSON payloads in incoming requests to be automatically parsed and available as JavaScript objects.
app.use(express.urlencoded({ extended: true })); // allows parsing of URL-encoded data, typically from HTML forms.

// 2: Session Code
// 3: Views Code
app.set("views", "views"); // specifies the folder (views) where Express will look for template files.
app.set("view engine", "ejs"); // configures Express to use the EJS templating engine, which lets you render dynamic HTML files with embedded JavaScript.

// 4: Routing Code:
app.post("/create-item", (req, res) => {
  console.log(req);
  res.json({ test: "Success" });
});

app.get("/", function (req, res) {
  res.render("reja");
});

app.get("/author", (req, res) => {
  res.render("author", { user: user });
});

// Server Setup
const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(
    `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
  );
});

/*
Routing is the process of defining how an application responds to client requests at specific endpoints (or URLs).

ExpressJS is a popular web application framework for Node.js, used to simplify building web servers and APIs 
by providing utilities and middleware for routing, handling requests, serving static files, and managing templates.

Ports are 16-bit numbers ranging from 0 to 65535, so they aren't limited to four digits.
Ports 0-1023 are considered well-known ports and are reserved for specific system services (like HTTP on port 80 and HTTPS on 443).
Ports 1024-49151 are registered ports, often used by third-party services.
Ports 49152-65535 are dynamic or private ports, often used for temporary connections or custom services.

Git: local and github; develop and master branches
*/
