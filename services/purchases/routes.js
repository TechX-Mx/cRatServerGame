const { Router } = require("express");
const { createPurchase, getUserPurchases } = require("./controller.js");
const purchaseRoutes = Router();
purchaseRoutes.post("/", createPurchase);
purchaseRoutes.get("/:email", getUserPurchases);
module.exports = purchaseRoutes;
