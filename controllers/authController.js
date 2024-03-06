const userModel = require("../models/userModel");
const errorResponse = require("../utils/errorResponse");

// JWT Tokem
exports.sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken(res);

  res.statu(statusCode).json({
    success: true,
    token,
  });
};

exports.registerController = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;

    // existing user
    const existingEmail = await userModel.findOne({ email });
    if (existingEmail) {
      return next(new errorResponse("Email is already register", 500));
    }
    const user = await userModel.create({ username, email, pass });
    sendToken(user, 201, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// LOGIN

exports.loginController = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    // validation
    if (!email || !password) {
      return next(new errorResponse("Please provide email or password"));
    }
    const user = await userModel.findOne({ email });
    if (!user) {
      return next(new errorResponse("Invalid credential ", 401));
    }
    const isMatch = await userModel.mathcPassword(password);
    if (!isMatch) {
      return next(new errorHandler("Invalid username or passowrd", 401));
    }
    // res
    sendToken(user, 200, res);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

// LOGOUT

exports.logoutController = async = (req, res) => {
  res.clearCookie("refreshToken");
  return res.status(200).json({
    success: true,
    message: "Logout Successfully ",
  });
};
