"use strict";
exports.__esModule = true;
var express = require("express");
var app = express();
var port = 5500; // you can use any port number
app.use(express.json());
app.post('/segment', function (req, res) {
    console.log(new Date().toISOString(), "request");
    res.sendStatus(200);
});
app.listen(port, function () {
    console.log("Express JS server is running at http://localhost:".concat(port));
});
