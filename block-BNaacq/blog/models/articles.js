var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var userSchema = new Schema({
  title:String,
  description:String,
  tages:String,
  likes:Number,
  author:module.user.id,
  comments:String
},{timestamps:true});

var article = mongoose.model('article', userSchema);

module.exports = article;