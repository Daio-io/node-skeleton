'use strict';

// Set up the routes using express router
var router = require('express').Router();
var handlers = require('./home.handlers');

router.get('/', handlers.index);
router.get('/another', handlers.anotherPage);

module.exports = router;
