'use strict';

var router = require('express').Router();
var sampleHandlers = require('./sample.handlers');

router.get('/', sampleHandlers.getAllSamples);
router.post('/', sampleHandlers.postSample);

module.exports = router;
