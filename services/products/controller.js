const Product = require("./model");

exports.postProduct = async (req, res) => {
  throw new Error("Not implemented");
};

exports.getProducts = async (req, res) => {
  const products = await Product.findProducts();
  res.json(products);
};

exports.deleteProduct = async (req, res) => {
  throw new Error("Not implemented");
};
