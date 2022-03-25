var mongoose = require("mongoose");

var Scheam = mongoose.Scheam;

var userScheam = new Scheam({
  name:{type:String, trim:true,},
  password:{type:Number, minimum:5, maximim:15},
  createdAt:{type:Date, default:Date.current}
});