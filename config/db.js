require("dotenv").config();
const { Sequelize } = require("sequelize");
const pg = require("pg");
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
let stringConn = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5432/${DB_NAME}`;
console.log(stringConn);

const sequelize = new Sequelize(stringConn, {
  logging: false,
  native: false,
  dialectOptions: {
    ssl: true,
  },
  dialect: pg,
});

async function validateConnection() {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

validateConnection();

module.exports = sequelize;
