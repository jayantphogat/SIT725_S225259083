const bookService = require('../services/books.service');

const allowedFields = ['id', 'title', 'author', 'year', 'genre', 'summary', 'price'];

const hasUnknownFields = (obj) => {
  return Object.keys(obj).some(key => !allowedFields.includes(key));
};

const formatBook = (book) => {
  if (!book) return null;

  return {
    ...book,
    price: book.price ? book.price.toString() : null
  };
};

const formatValidationErrors = (err) => {
  if (err.name === 'ValidationError') {
    return Object.values(err.errors).map(error => error.message);
  }
  return [err.message];
};

const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json(books.map(formatBook));
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch books' });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(formatBook(book));
  } catch (err) {
    res.status(500).json({ message: 'Failed to fetch book' });
  }
};

const createBook = async (req, res) => {
  try {
    if (hasUnknownFields(req.body)) {
      return res.status(400).json({ message: 'Unknown fields are not allowed' });
    }

    const createdBook = await bookService.createBook(req.body);
    res.status(201).json(formatBook(createdBook.toObject()));
  } catch (err) {
    if (err.code === 11000) {
      return res.status(409).json({ message: 'Duplicate book id' });
    }

    if (err.name === 'ValidationError' || err.name === 'CastError') {
      return res.status(400).json({
        message: 'Validation failed',
        errors: formatValidationErrors(err)
      });
    }

    res.status(500).json({ message: 'Failed to create book' });
  }
};

const updateBook = async (req, res) => {
  try {
    if (hasUnknownFields(req.body)) {
      return res.status(400).json({ message: 'Unknown fields are not allowed' });
    }

    if ('id' in req.body) {
      return res.status(400).json({ message: 'Book id is immutable and cannot be changed' });
    }

    const updatedBook = await bookService.updateBook(req.params.id, req.body);

    if (!updatedBook) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.status(200).json(formatBook(updatedBook.toObject()));
  } catch (err) {
    if (err.name === 'ValidationError' || err.name === 'CastError') {
      return res.status(400).json({
        message: 'Validation failed',
        errors: formatValidationErrors(err)
      });
    }

    res.status(500).json({ message: 'Failed to update book' });
  }
};

const integrityCheck = (req, res) => {
  res.status(204).send();
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  integrityCheck
};