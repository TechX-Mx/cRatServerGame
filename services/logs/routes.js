const { Router } = require("express");
const { getLogs, postLog } = require("./controller.js");
const logRouter = Router();
logRouter.get("/", getLogs);
logRouter.post("/", postLog);
module.exports = logRouter;
