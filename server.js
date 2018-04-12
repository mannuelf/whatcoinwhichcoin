"use strict";

let http = require("http");
let express = require("express");

const app = express();

app.use(express.static("./public"));

app.get("/", (request, response) => {
  response.end("Hello World");
  console.log("In Handler");
});

const server = new http.Server(app);
const port = 8090;

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
