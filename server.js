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
      let PORT = 3000;
      server.listen(PORT, function () {
        console.log(
          `The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
        );
      });
    }
  }
);
