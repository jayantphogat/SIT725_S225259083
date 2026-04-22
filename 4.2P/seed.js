const mongoose = require('mongoose');
const Habit = require('./models/Habit');
mongoose.connect('mongodb://127.0.0.1:27017/habitdb')
  .then(async () => {

    await Habit.deleteMany({});

    await Habit.insertMany([
      {
        title: "Study for 2 Hours",
        image: "images/habit1.jpg",
        link: "#",
        description: "Maintain a focused study routine every day."
      },
      {
        title: "Gym Workout",
        image: "images/habit2.jpg",
        link: "#",
        description: "Stay fit and active with daily exercise."
      },
      {
        title: "Coding Practice",
        image: "images/habit3.jpg",
        link: "#",
        description: "Improve programming skills daily."
      }
    ]);
    console.log("Data inserted");
    mongoose.connection.close();
  });