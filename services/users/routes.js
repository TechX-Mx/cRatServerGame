const { Router } = require("express");
const { signin, getUsers } = require("./controller.js");
const userRoutes = Router();
userRoutes.post("/signin", signin); //signing route
userRoutes.get("/", getUsers); //get all users route
module.exports = userRoutes;
