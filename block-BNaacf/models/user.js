var mongoose = require("mongoose");

var Scheam = mongoose.Scheam;

var userscheam = new Scheam({
  name:String,
  email:String,
  address: {
    village:String,
    city:String,
    state:String,
    pin: Number,
    user: Scheam.type.ObjectId
  },
  marks:[Number],
  favorites:[String]
});