const express = require('express');
const router = express.Router();
const controller = require('../controllers/books.controller');

router.get('/books', controller.getAllBooks);
router.get('/books/:id', controller.getBookById);
router.get('/integrity-check42', controller.integrityCheck);

module.exports = router;