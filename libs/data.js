//create async function for write json file, if the file not exist, create it, parameter ruta, filename

const fs = require("fs");
const path = require("path");

exports.writeJsonFile = async function (ruta, filename, data) {
  const filePath = path.join(ruta, filename);
  fs.writeFileSync(filePath, JSON.stringify(data));
};

exports.readJsonFileAsObject = async function (ruta, filename) {
  const filePath = path.join(ruta, filename);
  if (!fs.existsSync(filePath)) {
    return null;
  }
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
};
