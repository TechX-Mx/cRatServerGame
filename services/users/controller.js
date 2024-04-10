const User = require("./model");

exports.signing = async (req, res) => {
  const findUser = User.findOne({ email: req.body.email });
  if (findUser) {
    return res
      .status(200)
      .json({ auth: true, emaiL: req.body.email, username: findUser.username });
  }
  const user = User.create(req.body);
  res
    .status(200)
    .json({ auth: true, email: req.body.email, username: user.username });
};
