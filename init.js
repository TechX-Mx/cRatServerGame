//create a folder .data

const fs = require("fs");
const path = require("path");
function createDataFolder() {
  const dataFolderPath = path.join(__dirname, ".data");
  if (!fs.existsSync(dataFolderPath)) {
    fs.mkdirSync(dataFolderPath);
  }
}
//create folder in .data
function createFolderInData(folderName) {
  const folderPath = path.join(__dirname, ".data", folderName);
  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath);
  }
}
//create users folder in .data
function createUsersFolder() {
  createFolderInData("users");
}
//create leaderboard folder in .data
function createLeaderboardFolder() {
  createFolderInData("leaderboard");
}

//create folders
function createFolders() {
  createDataFolder();
  createUsersFolder();
  createLeaderboardFolder();
}

//create files
//create file in leaderboard folder
function createLeaderboardFileInLeaderboardFolder() {
  const filePath = path.join(
    __dirname,
    ".data",
    "leaderboard",
    "leaderboard.json"
  );
  if (!fs.existsSync(filePath)) {
    fs.writeFileSync(filePath, "[]");
  }
}

function init() {
  createFolders();
  createLeaderboardFileInLeaderboardFolder();
}

module.exports = init;
