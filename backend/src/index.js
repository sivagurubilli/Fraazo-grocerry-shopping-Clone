require("dotenv").config();
const express = require("express");
const {
  register,
  login,
  generateToken,
} = require("./controllers/auth.controller");
var cors = require("cors");
const app = express();



app.use(cors());
app.use(express.json())


const productController = require("./controllers/product.controller");
const userController = require("./controllers/user.controller");
const Defaultdata = require("../default");

//based on route it calls the function 
app.use("/fraazo", productController);
app.use("/user", userController);
app.post("/register",register);
app.post("/login",login);

// default data is to push all initial items data into data base
Defaultdata()
module.exports = app;
