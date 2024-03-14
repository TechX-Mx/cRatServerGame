const userModel = require("./model");
const { createRandomUsername } = require("./utils.js");

exports.signing = async function (req, res) {
  const { email, username } = req.body;
  const user = {
    email: email?.toLowerCase(),
    username,
  };
  try {
    if (!email) return res.status(400).send("Email is required"); //el email es requerido
    if (!username) user.username = createRandomUsername();
    const foundUser = await userModel.findUserByEmail(email);
    if (foundUser) return res.status(201).send(foundUser); //enviar el usuario encontrado
    const newUser = await userModel.createUser(user);
    return res.status(201).send(newUser); //enviar el usuario creado
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return res.status(500).send(error.message);
    }
  }
};
