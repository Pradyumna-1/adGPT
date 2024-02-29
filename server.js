const express = require("express");
const morgan = require("morgan");

const cors = require("cors");

const bodyParser = require("body-parser");
// const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config();

// mongo connection
connectDB();
// rest object

const app = express();
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log(`Server running on Port ${PORT}`);
});
