const { Router } = require("express");
const userRoutes = require("./services/users/routes.js");
const leaderboardRoutes = require("./services/leaderboard/routes.js");
const productRoutes = require("./services/products/routes.js");
const purchaseRoutes = require("./services/purchases/routes.js");
const logRouter = require("./services/logs/routes.js");

const router = Router();

router.use("/users", userRoutes); //users routes
router.use("/leaderboard", leaderboardRoutes); //leaderboard routes
router.use("/products", productRoutes); //products routes
router.use("/purchases", purchaseRoutes); //purchases routes
router.use("/logs", logRouter);

module.exports = router;
