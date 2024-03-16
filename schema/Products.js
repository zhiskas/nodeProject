const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  
  name: {
    type: String,
    // required: true,
  },
  company: {
    type: String,
    // ref: "Company",
    // required: true,
  },
  price: {
    type: Number,
    // required: true,
  },
  colors: {
    type: [String],
    // required: true,
  },
  image: {
    type: String,
    // required: true,
  },
  // category: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "Category",
  //   // required: true,
  // },
  isFeatured: {
    type: Boolean,
    // required: false,
  },
});

module.exports = mongoose.model("Products", productSchema);
