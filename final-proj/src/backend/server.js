const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 4000;
const mongoose = require('./db.js'); // import the Mongoose object from db.js
const Player = require('./schema.js');

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({extended: false}));

mongoose.set('strictQuery', false);

mongoose.connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
});

app.post('/create-account', async (req, res) => {
  try {
    const newPlayer = new Player({
      username: req.body.username,
      password: req.body.password,
      image: req.body.image,
      name: req.body.name,
      number: req.body.number,
      position: req.body.position,
      height: req.body.height,
      age: req.body.age,
      school: req.body.school,
    });
    await newPlayer.save();
    res.redirect('/sign-in');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/sign-in', async (req, res) => {
  try {
    const player = await Player.findOne({
      username: req.body.username,
      password: req.body.password
    });
    if (player) {
      res.redirect('/home');
    } else {
      res.status(401).json({ message: 'Incorrect username or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});






app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
