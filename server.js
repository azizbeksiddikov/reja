const http = require("http");
const mongodb = require("mongodb");

let db;
let connectionString =
  "mongodb+srv://andrew:w1LsjusXGnSlLcB0@cluster0.e1hfr.mongodb.net/Reja";

mongodb.connect(
  connectionString,
  {
    useNewUrlParser: true,
    UseUnifiedTopology: true,
  },
  (err, client) => {
    if (err) console.log(`ERROR on connection MongoDB`);
    else {
      console.log(`SUCCEED on connection MongoDB`);
      module.exports = client;

      const app = require("./app");
      const server = http.createServer(app);
      let PORT = 1902;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
// Remote connect:
// ssh root@147.79.67.47 -p 22
// user: root
// password: Damir202020*
// port: 22

// npm i pm2 -g
// pm2 ls

// pm2 start server.js --name="JOHN_REJA"

// pm2 stop id
// pm2 delete id

// pm2 logs
// pm2 log id

// http://147.79.67.47:4000/
