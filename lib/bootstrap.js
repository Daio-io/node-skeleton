'use strict';
var handlebars = require('express-handlebars');

module.exports = function (app) {

    // ** VIEW ENGINE ** //
    var hbs = handlebars.create({
        defaultLayout: 'main'
    });

    app.engine('handlebars', hbs.engine);

    app.set('view engine', 'handlebars');

    // ** CONNECT TO DATABASE ** //
    require('./database_connection.js')(app);

    // ** ENVIRONMENT SWITCH ** //
    require('./environment_context.js')(app);

    // ** Middleware ** //
    require('./middleware');

    // ** ROUTES ** //
    var homeRouter = require( global.appRoot + '/app/home/home.router' );
    app.use('/', homeRouter);

    // For your API roots you will probably want to configure a subdomain in production
    var sampleRouter = require(global.appRoot + '/api/sample/sample.router');
    app.use('/sample', sampleRouter);


};