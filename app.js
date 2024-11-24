console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const fs = require("fs");
const livereload = require("livereload");
const res = require("express/lib/response");
const connectLivereload = require("connect-livereload");

// MongoDB Connect
const db = require("./server").db();

// 1: Kirish (Middleware and Static File Serving)
app.use(express.static("public")); // serves static files (like CSS or images) from the public folder, making them accessible to the client.
app.use(express.json()); // enables JSON payloads in incoming requests to be automatically parsed and available as JavaScript objects.
app.use(express.urlencoded({ extended: true })); // allows parsing of URL-encoded data, typically from HTML forms.

// 2: Session Code
// 3: Views Code
app.set("views", "views"); // specifies the folder (views) where Express will look for template files.
app.set("view engine", "ejs"); // configures Express to use the EJS templating engine, which lets you render dynamic HTML files with embedded JavaScript.

// 4: Routing Code:
app.post("/create-item", (req, res) => {
  // console.log(req);
  // res.json({ test: "Success" });
});

app.get("/", function (req, res) {
  res.render("reja");
});

module.exports = app;

// let user;
// fs.readFile("database/user.json", "utf-8", (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });
// app.get("/author", (req, res) => {
//   res.render("author", { user: user });
// });
