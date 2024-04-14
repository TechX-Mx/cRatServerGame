const { Router } = require("express");
const { getProducts, postProduct } = require("./controller.js");
const productRoutes = Router();
productRoutes.get("/", getProducts);
productRoutes.post("/", postProduct);
module.exports = productRoutes;
