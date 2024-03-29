const leaderBoardModel = require("./model.js");
const { validateLeaderBoardLeader } = require("./utils.js");

exports.addLeader = async function (req, res) {
  console.log(req.body);
  const { username, score } = req.body;
  try {
    if (!username) return res.status(400).send("Name is required");
    if (!score) return res.status(400).send("Score is required");
    let leaderBoard = await leaderBoardModel.findLeaderBoard();
    if (!validateLeaderBoardLeader(leaderBoard, { score })) {
      throw new Error("This score is not enough to be in the leaderboard");
    }
    //order leader by score
    leaderBoard.sort((a, b) => b.score - a.score);
    if (leaderBoard.length >= 50) {
      leaderBoard.pop();
    }
    let foundLeader = leaderBoard.some(
      (leader) => leader.username === username
    );
    if (foundLeader) {
      leaderBoard = leaderBoard.map((leader) => {
        if (leader.username === username) {
          leader.score = score;
        }
        return leader;
      });
    } else {
      leaderBoard.push({ username, score });
    }
    await leaderBoardModel.updateLeaderBoard(leaderBoard);
    return res.status(201).send(leaderBoard);
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    }
  }
};

exports.getLeaderBoard = async function (req, res) {
  try {
    const leaderBoard = await leaderBoardModel.findLeaderBoard();
    return res.status(200).send(leaderBoard);
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    }
  }
};
