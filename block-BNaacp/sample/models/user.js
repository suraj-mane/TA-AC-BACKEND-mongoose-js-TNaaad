var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var user = new Schema({
  name:String,
  email:String,
  sports:String
},{timestamps:true});

var user = mongoose.model('user',user);

module.exports = user;
