const express = require("express");
const http = require("http");
const cors = require("cors");
const morgan = require("morgan");

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
server.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
