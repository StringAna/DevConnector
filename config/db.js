const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// mongoose.connect(db) returns a promise. We use async await.
const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log('MongoDB connected...');
  } catch (err) {
    //if the connection is not made
    console.error(err.message);
    //exit process with failure
    process.exit(1);
  }
};
module.exports = connectDB;
