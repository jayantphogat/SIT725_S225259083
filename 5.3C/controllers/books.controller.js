const bookService = require('../services/books.service');

const getAllBooks = async (req, res) => {
  try {
    const books = await bookService.getAllBooks();
    res.json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await bookService.getBookById(req.params.id);

    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }

    res.json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const integrityCheck = (req, res) => {
  res.status(204).send();
};

module.exports = {
  getAllBooks,
  getBookById,
  integrityCheck
};