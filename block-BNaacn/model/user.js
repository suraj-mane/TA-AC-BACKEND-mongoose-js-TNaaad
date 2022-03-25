var mongoose = require("mongoose");

var Scheam = mongoose.Schema;

var article = new Scheam({
  title:String,
  description:String,
  tags:[String],
  createdAt:{type:Date, default:new Date()},
  likes:{type:Number, default:0}
});

var user = new Scheam({
  name:String,
  email:{type:String, lowercase:true, default:0},
  age:Number,
  password:{type:String, minlength:5},
  createdAt:{type:Date, default:new Date()},
  favourites:[String]
}, {timestamps:true});


var address = new Scheam({
  village:String,
  city:{type:String,required:true},
  state:{type:String, required:true},
  pin:Number,
  user:user.Scheam.ObjectId
});

var user = mongoose.model('user', user);
model.exports = user;

var article = mongoose.model('article', article);
model.exports = article;

var address = mongoose.model('address', address);
model.exports = address;


