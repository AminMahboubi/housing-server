const mongoose = require("mongoose");

var houseSchema = new mongoose.Schema({
  _uid: String,
  name: String,
  surname: String,
  price: Number,
  inclusive: Boolean, // If bills are included in price
  bills: Number, // if inclusive then 0
  deposit: Number, // number of month
  address: String,
  lat: Number,
  lng: Number,
  campus: String, // 0:Leonardo, 1:Bovisa, 2:None
  email: String,
  phone: String,
  preferredSex: String, // 0:Girl, 1:Boy, 2:Both
  description: String,
  minimumStayRequired: Number, // If no minimum then 0
  english: Boolean, // Landlord speaks English then true
  houseType: String, // 0:Bed, 1:Bedroom, 2:House
  bed: String, // 0:Single, 1:Double, 2:King
  numberOfRooms: Number, // 0:Studio
  numberOfPeoples: Number, // 0:Studio
  pet: Boolean,
  floor: Number,
  lift: Boolean,
  area: Number,
  // imageLinks: [String],
  availability: Date,
  insertDate: Date,
  updateDate: Date
});

module.exports = mongoose.model("House", houseSchema);
