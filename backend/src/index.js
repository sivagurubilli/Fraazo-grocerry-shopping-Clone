require("dotenv").config();
const express = require("express");
const {
  register,
  login,
  generateToken,
} = require("./controllers/auth.controller");
const User = require("./models/user.model");
const { body, validationResult } = require("express-validator");
var cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");


app.use(cors());
app.use(express.json())

const fraazoController = require("./controllers/fraazo.controller");



const userController = require("./controllers/user.controller");
const Defaultdata = require("../default");

app.use("/fraazo", fraazoController);
app.use("/user", userController);


app.post(
  "/register",
  body("firstName")
    .trim()
    .not()
    .isEmpty()
    .bail()
    .withMessage("First Name cannot be empty")
    
    .isLength({ min: 3 })
    .withMessage("First Name must be at least 4 characters"),
  body("email")
    .isEmail()
    .custom(async (value, { req }) => {
      const user = await User.findOne({ email: req.body.email });

      if (user) {
        throw new Error("Email is already taken");
      }
      return true;
    }),
  body("password")
    .not()
    .isEmpty()
    .withMessage("Password is required")
    
  ,
  body("phone").custom((value) => {
    if (value && value.length != 10) {
      throw new Error("phone number should have 10 digits");
    }
    return true;
  }),
  register
);

app.post(
  "/login",
  body("email")
    .isEmail()
    .custom(async (value) => {
      const user = await User.findOne({ email: value });

      if (!user) {
        throw new Error("Email is not registered");
      }
      return true;
    }),
  body("password").not().isEmpty().withMessage("Password is required"),
  login
);




Defaultdata()
module.exports = app;
