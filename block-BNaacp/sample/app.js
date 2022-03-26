var express = require("express");
var mongoose = require("mongoose");
var user = require("./models/user");

mongoose.connect("mongodb://localhost/user", (err) => {
  console.log(err? err: "conneted to database");
})

var app = express();
app.use(express.json());

app.post("/users", (req,res,next) => {
  user.create(req.body, (err, userData) => {
    next(err);
    res.json(userData)
  })
})

app.get("/users", (req,res,next) => {
  user.findOne({"name": "suraj"}, (err, userData) => {
    next(err);
    res.send(userData);
  })
})
app.put("/users/:id", (req,res,next) => {
  var id = req.params.id;
  user.findByIdAndUpdate(id, req.body, {new:true}, (err, userData) => { 
    console.log(err);
    res.json(userData);
  })
})
app.delete("/users/:id", (req,res,next) => {
  var id = req.params.id;
  user.findByIdAndDelete(id,(err, userData) => { 
    console.log(err);
    res.json(`${userData.name} user is delete`);
  })
})

app.use((err,req,res) => {
})
app.listen(3000, () => {
  console.log("server is run on port 3k");
})