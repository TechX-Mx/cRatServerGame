const User = require("./model");
const { createRandomUsername } = require("./utils");

exports.signin = async (req, res) => {
  try {
    const findUser = await User.findOne({
      where: {
        $or: [{ email: req.body.email }, { appleId: req.body.appleId }],
      },
    });

    if (findUser) {
      if (!findUser.username) {
        const username = createRandomUsername();
        await User.update({ username }, { where: { email: req.body.email } });
        return res.status(200).json({ auth: true, ...findUser, username });
      }
      return res.status(200).json({ auth: true, ...findUser.dataValues });
    }
    const username = createRandomUsername();
    const user = await User.create({ ...req.body, username });
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
