const Purchase = require("./model");

exports.createPurchase = async (req, res) => {
  try {
    const purchase = await Purchase.create(req.body);
    res.json(purchase);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getUserPurchases = async (req, res) => {
  try {
    const { email } = req.params;
    const purchases = await Purchase.findAll({ email });
    res.json(purchases);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
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
