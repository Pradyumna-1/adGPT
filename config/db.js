const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONOGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true // Add this option to avoid deprecation warning
    });
    // console.log(`Connected to MongoDB ${mongoose.connection.host}`);
    console.log(`Connected to MongoDB `);
  } catch (error) {
    console.log(`MongoDB Database Error ${error}`);
  }
};

module.exports = connectDB;
