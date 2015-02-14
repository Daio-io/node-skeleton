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
// require('./database_connection.js')(app); // uncomment when added connection string

    // ** ENVIRONMENT SWITCH ** //
    require('./environment_context.js')(app);

    // ** Middleware ** //
    require('./middleware');

    // ** ROUTES ** //
    var homeRouter = require( global.appRoot + '/app/home/home.router' );
    app.use('/', homeRouter);


};