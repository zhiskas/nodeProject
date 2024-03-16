const express = require("express");
const router = express.Router();
const Products = require("../schema/Products");

router.get("/products", async (req, res) => {
  try {
    const products = await Products.find({});
    console.log("🚀 ~ file: route.js:9 ~ router.get ~ products:", products);

    return res.status(200).json(products);
  } catch (err) {
    console.error("Error getting products:", err);
    return res.status(500).send("Error getting products");
  }
});

router.post("/product", async (req, res) => {
  const { name, company, price } = req.body;

  try {
    const newProduct = new Products({
      name: name,
      company: company,
      price: price,
      colors: ["xoxoxo"],
      image: "/images/product-smartphone.png",
      isFeatured: false,
    });

    await newProduct.save();

    console.log("🚀 ~ file: route.js:9 ~ router.get ~ products:", newProduct);

    return res.status(201).send("Your product saved");
  } catch (err) {
    console.error("Error getting products:", err);
    return res.status(401).send("Error getting products");
  }
});



module.exports = router;
