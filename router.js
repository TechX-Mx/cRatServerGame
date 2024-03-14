const { Router } = require("express");
const userRoutes = require("./services/users/routes.js");
const leaderboardRoutes = require("./services/leaderboard/routes.js");

const router = Router();

router.use("/users", userRoutes); //users routes
router.use("/leaderboard", leaderboardRoutes); //leaderboard routes

module.exports = router;
