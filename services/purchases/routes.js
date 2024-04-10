const { Router } = require("express");
const { createPurchase, getUserPurchases } = require("./controller.js");
const purchaseRoutes = Router();
purchaseRoutes.post("/", createPurchase);
purchaseRoutes.get("/:userId", getUserPurchases);
module.exports = purchaseRoutes;
