const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const booksRoutes = require('./routes/books.routes');
const app = express();
const PORT = 3000;
mongoose.connect('mongodb://127.0.0.1:27017/booksDB')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api', booksRoutes);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});