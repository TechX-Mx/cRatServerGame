const Product = require("./model");

exports.postProduct = async (req, res) => {
  try {
    const { name, product_key } = req.body;
    const product = await Product.create({ name, product_key });
    res.json(product);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.deleteProduct = async (req, res) => {
  throw new Error("Not implemented");
};
