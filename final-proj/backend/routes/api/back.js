const express = require('express');
const app = express.Router();
var Player = require('../../model/schema.js');

const authentication = require('../../authentication.js');
const authRoutes = require('../../auth');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



app.post('/create-account', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user in MongoDB
    const user = new Player({
      username,
      password: hashedPassword,
    });
    await user.save();

    res.status(201).send('User created');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
});

app.post('/sign-in', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user in MongoDB
    const user = await Player.findOne({ username });
    if (!user) {
      return res.status(401).send('Invalid username or password');
    }

    // Compare password using bcrypt
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).send('Invalid username or password');
    }

    // Create and sign JWT token
    const token = jwt.sign({ userId: user._id }, 'secret-key');


    // Set token in cookie (optional)
    res.cookie('token', token, { httpOnly: true });

    // Send response with token and user information
    res.json({ token, user: { id: user._id, username: user.username } });
    // res.redirect(`/home?userId=${user._id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
});


const auth1 = async (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }
    const decoded = jwt.verify(token, 'secret-key');
    req.userId = decoded.userId;
    next();
  } catch (err) {
    res.status(401).json({ message: 'Token is not valid' });
  }
};

// displaying all players on user's roster
app.get('/home', async (req, res) => {
  try {
    // Get user ID from query parameter
    const userId = req.query.userId;

    // Find user in MongoDB
    const user = await Player.find();

    //res.render('home', { user });
    console.log(user);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error loading home page');
  }
});



/**
 * GET : player-roster
 * @returns: list of players from the database
 */
app.get('/player-roster', async (req, res) => {
  try {
    // Get user ID from query parameter
    const userId = req.query.userId;

    // Find user in MongoDB
    const roseter = await Player.find({'user': userId});
    res.json(roseter);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error getting list of players.  roster');
  }
});


app.post('/roster', auth1, async (req, res) => {
  try {
    const { name, number, college, height, age, picture, position } = req.body;
    const userId = req.userId; // use the authenticated userId from the req.userId property

    const newPlayer = new Player({
      name,
      number,
      college,
      height,
      age,
      picture: picture.trim(), // save the picture URL as a string and remove any whitespace
      position,
      user: userId, // associate the new player with the authenticated user
    });
    await newPlayer.save().then( (p) => { 
      res.status(201).json({ message: 'Player created successfully', player: newPlayer }); // send the new player object in the response
    });
    
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error creating player' });
  }
});




// deleting player from roster
app.delete('/:id', async (req, res) => {
  console.log("Handling delete request....");
  console.log(req);

  try {
    const id = req.params.id;

    const player = await Player.findById(id);
    console.log(player);
    if (!player) {
      // If the player was not found or does not belong to the user, return an error
      return res.status(404).json({ error: 'Player not found' });
    }
    
    // Delete the player from the database
    const result = await player.deleteOne();
    // await player.deleteOne();

    if (result.deletedCount === 0) {
      // If no rows were deleted, it means there was an error deleting the player
      return res.status(500).json({ error: 'Error deleting player' });
    }
    
    // Return a success message
    return res.json({ message: 'Player deleted successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong' });
  }
});



// making any edits to the player roster
const mongoose = require('mongoose');

app.put('/:id', async (req, res) => {
  // Player.findByIdAndUpdate(req.params.id, req.body)
  //   .then((Player) => res.json({msg: 'updated successfully'}))
  //   .catch((err) =>
  //     res.status(400).json({error: 'Unable to update database'})
  //     );
  console.log('PUT request received');
  const _id = req.params.id;
  console.log('PUT request received for player with _id:', _id);
  try {
    const player = await Player.findById(_id);
    console.log(`Found player with _id ${_id}:`, player);
    if (!player) {
      console.log(`Player with _id ${_id} not found`);
      return res.status(404).json({ error: 'Player not found' });
    }
    console.log(`Updating player with _id ${_id} with data:`, req.body);
    player.image = req.body.image || player.image;
    player.name = req.body.name || player.name;
    player.number = req.body.number || player.number;
    player.position = req.body.position || player.position;
    player.height = req.body.height || player.height;
    player.age = req.body.age || player.age;
    player.college = req.body.college || player.college;
    await player.save();
    res.status(200).json(player);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = app;
