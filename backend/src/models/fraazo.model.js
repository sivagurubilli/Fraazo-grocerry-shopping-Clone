const mongoose = require("mongoose");


// product schema for creating model for creating the product model in database in MongoDB
const ProductSchema = mongoose.Schema({
  id: Number,
  imgUrl:String,
  name: String,
  packSize: String,
  price: Number,
  strikePrice: Number,
  soldOut: String,
  notifyme: String,
  category: String,
  subCatagory: String,
  tooltipText: String,
  benefits: String,
  description: String,
  info: String,
  tag:String
});


const PorductModel = mongoose.model("product", ProductSchema);

module.exports = PorductModel;

