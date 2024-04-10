const Purchase = require("./model");

exports.createPurchase = async (req, res) => {
  const purchase = await Purchase.create(req.body);
  res.json(purchase);
};

exports.getUserPurchases = async (req, res) => {
  const { userId } = req.params;
  const purchases = await Purchase.findAll({ userId });
  res.json(purchases);
};

exports.deletePurchase = async (req, res) => {
  throw new Error("Not implemented");
};

exports.updatePurchase = async (req, res) => {
  throw new Error("Not implemented");
};

exports.getPurchase = async (req, res) => {
  throw new Error("Not implemented");
};
