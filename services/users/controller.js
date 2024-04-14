const User = require("./model");

exports.signin = async (req, res) => {
  const findUser = await User.findOne({ where: { email: req.body.email } });

  if (findUser) {
    return res.status(200).json({ auth: true, emaiL: req.body.email });
  }
  const user = await User.create(req.body);
  res.status(200).json(user);
};

exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};
