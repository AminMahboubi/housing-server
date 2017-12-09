const mongoose = require('mongoose');

var houseSchema = new mongoose.Schema({
  _uid: {
    type: Number,
    unique: true //Unique Phone ID
  },
  name: String,
  surname: String,
  price: Number,
  inclusive: Boolean, // If bills are included in price
  bills: Number, // if inclusive then 0
  deposit: Number, // number of month
  address: String,
  campus: Number, // 0:Leonardo, 1:Bovisa, 2:None
  neighborhood: String,
  phone: String,
  preferredSex: Number, // 0:Girl, 1:Boy, 2:Both
  description: String,
  minimumStayRequired: Number, // If no minimum then 0
  english: Boolean, // Landlord speaks English then true
  houseType: Number, // 0:Bed, 1:Bedroom, 2:House
  bed: Number, // 0:Single, 1:Double, 2:King
  numberOfRooms: Number, // 0:Studio
  numberOfPeoples: Number, // 0:Studio
  pet: Boolean,
  floor: Number,
  lift: Boolean,
  area: Number,
  imageLinks: [String],
  availability: {
    type: Date,
    default: Date.now
  },
  insertDate: {
    type: Date,
    default: Date.now
  },
  updateDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('House', houseSchema);
