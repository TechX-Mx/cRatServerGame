const { writeJsonFile, readJsonFileAsObject } = require("../../libs/data.js");
const { validateEmail } = require("./utils.js");
const path = require("path");
const userModel = {
  async findUserByEmail(email) {
    //logic to find user
    let fileName = email.split("@")[0];
    let filePath = path.join(__dirname, "./../../.data", "users");
    return readJsonFileAsObject(filePath, `${fileName}.json`);
  },
  async createUser(user) {
    if (!user.email) throw new Error("Email is required");
    if (!validateEmail(user.email)) {
      throw new Error("Invalid email");
    }
    let fileName = user.email.split("@")[0];

    let foundUser = await userModel.findUserByEmail(user.email);
    if (foundUser) {
      throw new Error("User already exists");
    }
    //logic to create user
    let filePath = path.join(__dirname, "./../../.data", "users");
    await writeJsonFile(filePath, `${fileName}.json`, user);
    return user;
  },
  async updateUser(user) {
    //logic to update user
  },
  async deleteUser(user) {
    //logic to delete user
  },
};
module.exports = userModel;
