const User = require("./model");

exports.signin = async (req, res) => {
  try {
    const findUser = await User.findOne({ where: { email: req.body.email } });

    if (findUser) {
      return res.status(200).json({ auth: true, emaiL: req.body.email });
    }
    const user = await User.create(req.body);
    res.status(200).json(user);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (e) {
    res.send(e);
  }
};
