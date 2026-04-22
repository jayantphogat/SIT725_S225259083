const express = require('express');
const path = require('path');
const mongoose = require('mongoose');
const Habit = require('./models/Habit');
const app = express();
const PORT = 3000;
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
mongoose.connect('mongodb://127.0.0.1:27017/habitdb')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
app.get('/api/habits', async (req, res) => {
  try {
    const habits = await Habit.find();
    res.json({ statusCode: 200, data: habits, message: 'Success' });
  } catch (err) {
    res.status(500).json({ statusCode: 500, message: 'Error fetching data' });
  }
});
app.post('/api/habits', async (req, res) => {
  try {
    const habit = new Habit(req.body);
    await habit.save();
    res.json({ statusCode: 200, message: 'Habit added' });
  } catch (err) {
    res.status(500).json({ message: 'Error saving habit' });
  }
});
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});