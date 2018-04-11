"use strict"

let http = require("http"),
    express = require("express");

const app = express();
const server = new http.Server(app);
const port = 8090;

server.listen(port, () => {
    console.log(`Server started on port ${port}`);
});

