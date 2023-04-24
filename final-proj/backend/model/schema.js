const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  username: {
    type: String,
    required: false
  },
  password: {
    type: String,
    required: false
  },
  picture: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  number: {
    type: Number,
    required: false
  },
  position: {
    type: String,
    required: false
  },
  height: {
    type: String,
    required: false
  },
  age: {
    type: Number,
    required: false
  },
  college: {
    type: String,
    required: false
  }
});

module.exports = Player = mongoose.model('Player', playerSchema);
