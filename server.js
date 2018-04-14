"use strict";

let http = require("http");
let express = require("express");

const app = express();

app.use(express.static("./dist"));

app.get("/", (request, response) => {
});

const server = new http.Server(app);
const port = 8088;

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
