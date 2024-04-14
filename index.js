const express = require("express");
const http = require("http");
const cors = require("cors");
const morgan = require("morgan");
const sequelize = require("./config/db");

//models
require("./services/products/model");
require("./services/users/model");
require("./services/purchases/model");
require("./services/logs/model");

//server
const app = express();
const server = http.createServer(app);

//morgan
app.use(morgan("dev"));

//excute init script
const init = require("./init");

init();

//expres middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//cors
app.use(cors());

//router
app.use("/api", require("./router"));

const PORT = process.env.PORT || 3000;

async function main() {
  try {
    await sequelize.sync({ force: true });
    console.log("All models were synchronized successfully.");
    server.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Unable to synchronize the models:", error);
  }
}

main();
