const Book = require('../models/book.model');

const getAllBooks = async () => {
  return await Book.find().lean();
};

const getBookById = async (id) => {
  return await Book.findOne({ id }).lean();
};

const createBook = async (bookData) => {
  const book = new Book(bookData);
  return await book.save();
};

const updateBook = async (id, updateData) => {
  const book = await Book.findOne({ id });

  if (!book) {
    return null;
  }

  Object.assign(book, updateData);
  return await book.save();
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook
};