const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to MongoDB ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`MongoDB Database Error ${error}`);
  }
};

module.exports = connectDB;
