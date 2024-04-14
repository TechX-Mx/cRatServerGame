const { DataTypes } = require("sequelize");
const sequelize = require("./../../config/db");

const Log = sequelize.define("logs", {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  content: {
    type: DataTypes.STRING,
  },
});

module.exports = Log;
