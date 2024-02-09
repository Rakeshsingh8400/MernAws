const express = require('express');
const sandboxController = require('../controllers/sandboxController');
const authenticate = require('../middleware/authenticate');

const router = express.Router();

router.post('/run', authenticate, sandboxController.runCode);
router.post('/save', authenticate, sandboxController.saveSandbox);
router.get('/mysandboxes', authenticate, sandboxController.getMySandboxes);

module.exports = router;
