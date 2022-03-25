var mongoose = require("mongoose");

var Scheam = mongoose.Schema;

var user = new Scheam({
  name:String,
  email:{type:String, lowercase:true, default:0},
  age:Number,
  password:{type:String, minlength:5},
  createdAt:{type:Date, default:new Date()},
  favourites:[String]
}, {timestamps:true});

var user = mongoose.model('user', user);
model.exports = user;






