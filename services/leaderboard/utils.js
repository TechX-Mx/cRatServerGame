exports.validateLeaderBoardLeader = function (leaderBoard, leader) {
  if (leaderBoard.length < 10) {
    return true;
  }
  const { score } = leader;
  let leaderWithLessScore = leaderBoard.find((leader) => leader.score < score);

  if (!leaderWithLessScore) {
    return false;
  }
  if (score > leaderWithLessScore.score) {
    return true;
  }
};
