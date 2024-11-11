console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1: Kirish Code
app.use(express.static("public")); // only public folder is visible (css, images)
app.use(express.json()); // json to object
app.use(express.urlencoded({ extended: true })); // html =>

// 2: Session Code
// 3: Views Code
app.set("views", "views");
app.set("view engine", "ejs");

// 4: Routing Code
app.get("/hello", function (req, res) {
  res.end(`<h1 style="background: blue">HELLO WORLD by Andrew</h1>
    <h2>Project Plan:</h2>`);
}); // In safari doesn't work
app.get("/gifts", function (req, res) {
  res.end(`<h1 style="background: red"> Siz sovgalar sahifasidasiz</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});

/*
Web Frameworks: Nest, Express (Python: Django)
Front-End: traditional (ejs) bssr-Backend Server Side Rendering AND single page application (React)
Git: local and github; develop and master branches
CRUD operations 
train.js
*/
