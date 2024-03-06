const express = require("express");
const morgan = require("morgan");

const cors = require("cors");

const bodyParser = require("body-parser");
// const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
// routes path

const authRoutes = require('./routes/authRoutes');
const errorHandler = require("./middlewares/errorMiddleware");

dotenv.config();

// mongo connection
connectDB();
// rest object

const app = express();
// middleware

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(errorHandler)
const PORT = process.env.PORT || 3000;

// API routes

app.use('/api/v1/auth',authRoutes)


app.listen(3000, () => {
  console.log(`Server running on Port ${PORT}`);
});
