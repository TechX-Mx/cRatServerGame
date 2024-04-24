const { DataTypes } = require("sequelize");
const sequelize = require("./../../config/db");

const User = sequelize.define("users", {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  username: {
    type: DataTypes.STRING,
  },
  appleId: {
    type: DataTypes.STRING,
  },
});

module.exports = User;
