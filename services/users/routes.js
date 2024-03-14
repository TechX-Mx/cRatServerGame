const { Router } = require("express");
const { signing } = require("./controller.js");
const userRoutes = Router();
userRoutes.post("/signing", signing); //signing route
module.exports = userRoutes;
