const Log = require("./model");

exports.postLog = async (req, res) => {
  try {
    const { content } = req.body;
    const log = await Log.create({ content });
    res.json(log);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getLogs = async (req, res) => {
  try {
    const logs = await Log.findAll();
    res.json(logs);
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: "Internal server error" });
  }
};
