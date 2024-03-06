const express = require("express");
const {
  registerController,
  loginController,
  logoutController,
} = require("../controllers/authController");

// router object

const router = express.Router();

// routes
// register
router.post("/register", registerController);

// login
router.post("/login", loginController);

// logout
router.post("/logout", logoutController);

module.exports = router;
