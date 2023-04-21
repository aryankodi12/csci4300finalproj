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
  school: {
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Player', playerSchema);
