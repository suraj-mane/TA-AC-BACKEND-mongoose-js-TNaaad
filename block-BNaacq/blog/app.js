var express = require("express");
var mongoose = require("mongoose");
var user = reuire("./models/user");
var comment = reuire("./models/comments");
var article = reuire("./models/article");

mongoose.connect("mongodb://localhost/users", (err) =>{
  console.log(err? err: "connect to database");
});

var app = express();

app.listen(3000, () => {
  console.log("server is run on port 3k");
});