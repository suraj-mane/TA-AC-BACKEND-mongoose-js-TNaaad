var mongoose = require("mongoose");

var Scheam = mongoose.Schema;
var address = new Scheam({
  village:String,
  city:{type:String,required:true},
  state:{type:String, required:true},
  pin:Number,
  user:user.Scheam.ObjectId
});

var address = mongoose.model('address', address);
model.exports = address;