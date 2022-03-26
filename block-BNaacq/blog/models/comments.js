var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var commentSchema = new Schema ({
  content:String,
  author:model.user.Id,
  article:String
}, {timestamps: true});

var comment = mongoose.model('comment', userSchema);

module.exports = user;