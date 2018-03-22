const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ratingSchema = new Schema({
  username: { type: String, required: true },
  rating: { type: Number, required: true }
});

var Rating = mongoose.model('Rating', ratingSchema);

module.exports = Rating;
