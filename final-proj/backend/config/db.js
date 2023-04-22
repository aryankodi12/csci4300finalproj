// const mongoose = require('mongoose');
// const express = require('express');
// const app = express();
// const cors = require('cors');
// const port = process.env.PORT || 3000;
// const Player = require('../schema.js');

// app.use(cors({ origin: true, credentials: true}));

// app.use(express.json({extended: false}));

// const conn_str = 'mongodb+srv://aryankodi5:GOFoqtvhsXGdrVBD@cluster0.ddhcwf4.mongodb.net/?retryWrites=true&w=majority';

// mongoose.set('strictQuery', false);

// mongoose.connect(conn_str, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true
// })
// .then (() => {
//     app.listen(port)
//     console.log("MongoDb Connection Suceeded.....")
// })
// .catch(err => {
//     console.log('Error in DB Connection ${err}');
// });

// app.post('/create-account', async (req, res) => {
//     try {
//       const newPlayer = new Player({
//         username: req.body.username,
//         password: req.body.password,
//         image: req.body.image,
//         name: req.body.name,
//         number: req.body.number,
//         position: req.body.position,
//         height: req.body.height,
//         age: req.body.age,
//         school: req.body.school,
//       });
//       await newPlayer.save();
//       res.status(201).json(newPlayer);
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ message: 'Server error' });
//     }
// });

// module.exports = mongoose;

const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://aryankodi5:GOFoqtvhsXGdrVBD@cluster0.ddhcwf4.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected!');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;



