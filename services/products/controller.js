const Product = require("./model");

exports.postProduct = async (req, res) => {
  const { name, product_key } = req.body;
  const product = await Product.create({ name, product_key });
  res.json(product);
};

exports.getProducts = async (req, res) => {
  const products = await Product.findAll();
  res.json(products);
};

exports.deleteProduct = async (req, res) => {
  throw new Error("Not implemented");
};
