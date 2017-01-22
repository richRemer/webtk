const express = require("express");

var app = express();

app.use(express.static("srv"));

app.listen(8901);
