const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../backend/model/schema');
const authentication = require('../backend/authentication');
const router = express.Router();


// Registration route
router.post('/create-account', async (req, res) => {
  console.log("create-account.....", req);
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
router.post('/sign-in', async (req, res) => {
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

    res.json({token, user: {id: user._id, username: user.username}});

    res.cookie('token', token, { httpOnly: true });
    res.send('Login successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error logging in');
  }
});

//CHECKING WHETHER OR NOT THE TOKEN IS VALID
router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, "passwordKey");
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({error: err.message});
  }
})

//TO GET USER CREDENTIALS (authentication)
router.get("/", authentication, async (req, res) => {
  const user = await User.findById(req.user);
  res.json({
    username: user.username,
    id: user._id,
  });
});


module.exports = router;
