const { Router } = require("express");
const { signin, getUsers, removeAccount } = require("./controller.js");
const userRoutes = Router();
userRoutes.post("/signin", signin); //signing route
userRoutes.delete("/:id", removeAccount); //delete user route
userRoutes.get("/", getUsers); //get all users route
module.exports = userRoutes;
