const express = require('express');
const app = express.Router();


const { Player } = require('../../model/schema.js');


// create account and then stored to db
app.post('/create-account', async (req, res) => {
  try {
    const newPlayer = new Player({
      username: req.body.username,
      password: req.body.password,
      // image: req.body.image,
      // name: req.body.name,
      // number: req.body.number,
      // position: req.body.position,
      // height: req.body.height,
      // age: req.body.age,
      // school: req.body.school,
    });
    await newPlayer.save();
    res.redirect('/sign-in');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


// sign-in to account
app.post('/sign-in', async (req, res) => {
  try {
    const player = await Player.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (player) {
      res.status(200).json(player); // Return player data with 200 status code
    } else {
      res.status(401).json({ message: 'Incorrect username or password' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error123' });
  }
});


// displaying all players on user's roster
app.get('/home', async (req, res) => {
  try {
    const players = await Player.find();
    res.json(players);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});

// adding new player to roster
app.post('/api/roster', async (req, res) => {
  try {
    const { username, password } = req.body;
    const player = await Player.findOne({ username, password });
    if (!player) {
      res.status(401).json({ message: 'Invalid credentials' });
      return;
    }
    const newPlayer = new Player({
      image: req.body.image,
      name: req.body.name,
      number: req.body.number,
      position: req.body.position,
      height: req.body.height,
      age: req.body.age,
      school: req.body.school,
    });
    player.roster.push(newPlayer);
    await player.save();
    res.status(201).json({ message: 'Player created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
});


// deleting player from roster
// deleting player from roster
app.delete('/api/players/:id', async (req, res) => {
  try {
    const id = req.params.id;
    // Delete the player with the given id from the database
    const result = await Player.deleteOne({ _id: id });
    if (result.deletedCount === 0) {
      // If no rows were deleted, it means there was no player with that id
      return res.status(404).json({ error: 'Player not found' });
    }
    // Return a success message
    return res.json({ message: 'Player deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});


// making any edits to the player roster
app.put('/api/players/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const player = await Player.findById(id);
    if (!player) {
      return res.status(404).json({ error: 'Player not found' });
    }
    player.image = req.body.image || player.image;
    player.name = req.body.name || player.name;
    player.number = req.body.number || player.number;
    player.position = req.body.position || player.position;
    player.height = req.body.height || player.height;
    player.age = req.body.age || player.age;
    player.school = req.body.school || player.school;
    await player.save();
    return res.json({ message: 'Player updated successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});

app.get('/sign-in', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'sign-in.js'));
});





module.exports = app;
