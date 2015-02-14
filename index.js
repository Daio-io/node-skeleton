'use strict';
global.appRoot = require('app-root-path');

var express = require('express');
var app = express();

require('./lib/bootstrap')(app); // Bootstrap the project together

require('./lib/server.js')(app);