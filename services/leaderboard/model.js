const { writeJsonFile, readJsonFileAsObject } = require("../../libs/data.js");
const path = require("path");
const leaderBoardModel = {
  async findLeaderBoard() {
    let filePath = path.join(__dirname, "./../../.data", "leaderboard");
    return readJsonFileAsObject(filePath, "leaderboard.json");
  },
  async updateLeaderBoard(leaderboard) {
    console.log({ leaderboard });
    let filePath = path.join(__dirname, "./../../.data", "leaderboard");
    await writeJsonFile(filePath, "leaderboard.json", leaderboard);
    return leaderboard;
  },
};
module.exports = leaderBoardModel;
