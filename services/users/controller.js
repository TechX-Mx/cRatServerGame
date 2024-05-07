const { Op } = require("sequelize");
const User = require("./model");
const { createRandomUsername } = require("./utils");

exports.signin = async (req, res) => {
  try {
    const email =
      req.body.email != "null" && req.body.email != null && req.body.email != ""
        ? req.body.email
        : "false";
    const appleId =
      req.body.appleId != "null" &&
      req.body.appleId != null &&
      req.body.appleId != ""
        ? req.body.appleId
        : "false";
    const findUser = await User.findOne({
      where: {
        [Op.or]: [
          { email: email ?? "false" }, // Buscar por email
          { appleId: appleId ?? "false" }, // Buscar por appleId
        ],
      },
    });
    if (findUser) {
      if (!findUser.username) {
        const username = createRandomUsername();
        await User.update(
          { username },
          {
            where: {
              [Op.or]: [
                { email: req.body.email ?? "null" }, // Buscar por email
                { appleId: req.body.appleId ?? "null" }, // Buscar por appleId
              ],
            },
          }
        );
        return res
          .status(200)
          .json({ auth: true, ...findUser.dataValues, username });
      }
      return res.status(200).json({ auth: true, ...findUser.dataValues });
    }
    const username = createRandomUsername();
    const findRandomUser = await User.findOne({
      where: {
        username,
      },
    });
    while (findRandomUser) {
      username = createRandomUsername();
    }
    const user = await User.create({
      appleId: !req.body.appleId ? null : req.body.appleId,
      email: !req.body.email ? null : req.body.email,
      username,
    });
    res.status(200).json(user);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.removeAccount = async (req, res) => {
  try {
    let emailOrAppleId = req.params.id;
    await User.destroy({
      where: {
        [Op.or]: [
          { email: emailOrAppleId ?? "null" }, // Buscar por email
          { appleId: emailOrAppleId ?? "null" }, // Buscar por appleId
        ],
      },
    });
    res.status(200).json({ message: "User deleted" });
  } catch (e) {
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
