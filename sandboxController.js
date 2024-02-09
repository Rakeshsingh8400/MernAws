const Sandbox = require('../models/Sandbox');
const codeRunner = require('../utils/codeRunner');

exports.runCode = async (req, res) => {
  try {
    const { code, language } = req.body;
    const output = await codeRunner.executeCode(code, language);
    res.status(200).json({ output });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.saveSandbox = async (req, res) => {
  try {
    const { code, output, language } = req.body;
    const userId = req.user.id; // Assuming you have a middleware to attach the user to the request
    const sandbox = await Sandbox.create({ code, output, language, createdBy: userId });
    res.status(201).json({ sandbox });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.getMySandboxes = async (req, res) => {
  try {
    const userId = req.user.id; // Assuming you have a middleware to attach the user to the request
    const sandboxes = await Sandbox.find({ createdBy: userId });
    res.status(200).json({ sandboxes });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
