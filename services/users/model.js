const { DataTypes } = require("sequelize");
const sequelize = require("./../../config/db");

const User = sequelize.define("User", {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});
return User;

module.exports = User;
