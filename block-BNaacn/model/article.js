var mongoose = require("mongoose");

var Scheam = mongoose.Schema;

var article = new Scheam({
  title:String,
  description:String,
  tags:[String],
  createdAt:{type:Date, default:new Date()},
  likes:{type:Number, default:0}
});

var article = mongoose.model('article', article);
model.exports = article;