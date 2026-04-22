const mongoose = require('mongoose');

const currentYear = new Date().getFullYear();

const allowedGenres = [
  'Science Fiction',
  'Classic',
  'Historical Fiction',
  'Fantasy'
];

const bookSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, 'Book id is required'],
    unique: true,
    trim: true
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    minlength: [2, 'Title must be at least 2 characters'],
    maxlength: [100, 'Title must be at most 100 characters']
  },
  author: {
    type: String,
    required: [true, 'Author is required'],
    trim: true,
    minlength: [2, 'Author must be at least 2 characters'],
    maxlength: [60, 'Author must be at most 60 characters']
  },
  year: {
    type: Number,
    required: [true, 'Year is required'],
    min: [1000, 'Year must be at least 1000'],
    max: [currentYear, 'Year cannot be in the future'],
    validate: {
      validator: Number.isInteger,
      message: 'Year must be an integer'
    }
  },
  genre: {
    type: String,
    required: [true, 'Genre is required'],
    enum: {
      values: allowedGenres,
      message: 'Genre is invalid'
    }
  },
  summary: {
    type: String,
    required: [true, 'Summary is required'],
    trim: true,
    minlength: [10, 'Summary must be at least 10 characters'],
    maxlength: [500, 'Summary must be at most 500 characters']
  },
  price: {
    type: mongoose.Schema.Types.Decimal128,
    required: [true, 'Price is required'],
    validate: {
      validator: function (value) {
        return parseFloat(value.toString()) > 0;
      },
      message: 'Price must be greater than 0'
    }
  }
}, {
  versionKey: false
});

module.exports = mongoose.model('Book', bookSchema);