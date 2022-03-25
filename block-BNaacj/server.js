var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/user", (err) => {
  console.log(err? err: "connected to database");
});

var app = express();

app.listen(3000, () => {
  console.log("server is run on port 3k");
})