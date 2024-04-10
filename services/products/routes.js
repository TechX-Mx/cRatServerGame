const { Router } = require("express");
const { getProducts } = require("./controller.js");
const productRoutes = Router();
productRoutes.post("/", getProducts);
module.exports = productRoutes;
