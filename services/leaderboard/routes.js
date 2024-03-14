const { Router } = require("express");
const { getLeaderBoard, addLeader } = require("./controller.js");

const leaderboardRoutes = Router();

leaderboardRoutes.get("/", getLeaderBoard);
leaderboardRoutes.post("/", addLeader);

module.exports = leaderboardRoutes;
