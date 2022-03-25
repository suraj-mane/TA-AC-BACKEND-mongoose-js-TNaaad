var mongoose = require("mongoose");

var Scheam = mongoose.Scheam;

var articlesScheam = new Scheam({
  title:String,
  description:String
});

var article = mongoose.model('article', articlesScheam);

module.exports = article;