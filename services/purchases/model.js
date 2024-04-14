const { DataTypes } = require("sequelize");
const sequelize = require("./../../config/db");

const Purchase = sequelize.define("Purchase", {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  productId: {
    type: DataTypes.INTEGER,
  },
  product_key: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
  },
  user_email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Purchase;
