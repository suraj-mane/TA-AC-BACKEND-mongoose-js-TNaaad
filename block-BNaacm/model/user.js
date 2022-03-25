var mongoose = require("mongoose");

var Scheam = mongoose.Scheam;

var userScheam = new Scheam({
  name:String,
  age:Number,
  email: Number
})

var user = mongoose.model('user', userScheam);

module.exports = user;