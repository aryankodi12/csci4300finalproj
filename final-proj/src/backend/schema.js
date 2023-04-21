const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  position: {
    type: String,
    required: true
  },
  height: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  school: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Player', playerSchema);
