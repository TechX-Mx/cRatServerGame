const { Router } = require("express");
const userRoutes = require("./services/users/routes.js");

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.use("/users", userRoutes); //users routes

module.exports = router;
