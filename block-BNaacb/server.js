var express = require("express");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/user", (err) => {
  console.log(err ? err: "connect to database");
})
var app = express();

app.listen(3000, () => {
  console.log("server is run on 3k");
})