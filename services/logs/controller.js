const Log = require("./model");

exports.postLog = async (req, res) => {
  const { content } = req.body;
  const log = await Log.create({ content });
  res.json(log);
};

exports.getLogs = async (req, res) => {
  const logs = await Log.findAll();
  res.json(logs);
};
