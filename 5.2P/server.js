const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'public')));
const bookRoutes = require('./routes/books.routes');
app.use('/api/books', bookRoutes);
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});