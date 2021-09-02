const express = require('express');
const router = express.Router();

const statusRouter = require('./Status');
router.use('/status', statusRouter);

const settingsRouter = require('./Settings');
router.use('/settings', settingsRouter);

module.exports = router