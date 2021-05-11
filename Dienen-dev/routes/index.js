"use strict";

const express = require('express');
const router = express.Router();
const ctrl = require('../routes/control');

router.get('/login', ctrl.output.login);
router.get('/signup', ctrl.output.signup);
router.get('/main', ctrl.output.main);

router.post("/login", ctrl.process.login);

module.exports = router;