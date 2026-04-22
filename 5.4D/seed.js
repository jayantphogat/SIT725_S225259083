const mongoose = require('mongoose');
const Book = require('./models/book.model');

mongoose.connect('mongodb://127.0.0.1:27017/booksDB')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log(err));

const books = [
  {
    id: "b101",
    title: "The Three-Body Problem",
    author: "Liu Cixin",
    year: 2008,
    genre: "Sci-Fi",
    summary: "Alien contact and a deep physics mystery that changes humanity's future.",
    price: mongoose.Types.Decimal128.fromString("29.99")
  },
  {
    id: "b102",
    title: "Jane Eyre",
    author: "Charlotte Bronte",
    year: 1847,
    genre: "Classic",
    summary: "A powerful coming-of-age story following Jane's struggles and independence.",
    price: mongoose.Types.Decimal128.fromString("22.00")
  },
  {
    id: "b103",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    year: 1813,
    genre: "Romance",
    summary: "A classic novel about love, family expectations, and social class.",
    price: mongoose.Types.Decimal128.fromString("22.00")
  },
  {
    id: "b104",
    title: "The English Patient",
    author: "Michael Ondaatje",
    year: 1992,
    genre: "Historical",
    summary: "A wartime story of memory, identity, love, and emotional loss.",
    price: mongoose.Types.Decimal128.fromString("25.39")
  },
  {
    id: "b105",
    title: "Small Gods",
    author: "Terry Pratchett",
    year: 1992,
    genre: "Fantasy",
    summary: "A witty fantasy novel that satirises religion, belief, and power.",
    price: mongoose.Types.Decimal128.fromString("31.99")
  }
];

const seed = async () => {
  await Book.deleteMany({});
  await Book.insertMany(books);
  console.log("Data seeded");
  mongoose.connection.close();
};

seed();