const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// Habit data
const habits = [
   {
    title: "Study for 2 Hours",
    image: "images/habit1.jpg",
    link: "#",
    description: "Maintain a focused study routine every day to improve academic performance."
  },
  {
    title: "Gym Workout",
    image: "images/habit2.jpg",
    link: "#",
    description: "Do regular exercise to stay active, improve health, and reduce stress."
  },
  {
    title: "Coding Practice",
    image: "images/habit3.jpg",
    link: "#",
    description: "Practice coding daily to strengthen programming skills and problem-solving ability."
  }
];

// GET endpoint
app.get('/api/habits', (req, res) => {
  res.json({ statusCode: 200, data: habits, message: 'Success' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});