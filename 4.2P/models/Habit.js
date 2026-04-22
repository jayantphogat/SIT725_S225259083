const mongoose = require('mongoose');
const habitSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String,
  description: String
});
module.exports = mongoose.model('Habit', habitSchema);