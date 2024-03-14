exports.validateLeaderBoardLeader = function (leaderBoard, leader) {
  const { score } = leader;
  let leaderWithLessScore = leaderBoard.find((leader) => leader.score < score);

  if (score > leaderWithLessScore.score) {
    return true;
  }
};
