const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

// Registration route
router.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Hash password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user in MongoDB
    const user = new User({
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

// Login route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user in MongoDB
    const user = await User.findOne({ username });
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
    res.cookie('token', token, { httpOnly: true });
    res.send('Login successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
});

module.exports = router;
