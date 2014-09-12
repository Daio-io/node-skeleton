var express = require('express');
var http = require('http');
var credentials = require('./lib/credentials.js');
var app = express();

var viewEngine = require('./lib/view_engine.js')(app); // set the view engine in here

//Set the port as the env set variable or default to 3000 if it does not exist
app.set('port', process.env.PORT || 3000);

var domain = require('./lib/domain.js')(app); // set up a domain for the app

var middleware = require('./lib/middleware.js')(app, express); // app middleware in here

// creating a switch to add environment specifics such as different logging in this case
switch (app.get('env')) {
case 'development':
    //compact colorful dev logging
    app.use(require('morgan')('dev'));
    break;
case 'production':
    //module express-logger supo=ports daily rotations
    app.use(require('express-logger')({
        path: __dirname + '/log/requests.log'
    }));
    break;
}

// var database = require('./lib/database_connection.js')(app, credentials); - uncomment this once you have added connection string

var routes = require('./routes/routes.js')(app); // add app routes here

function startServer() {
    http.createServer(app).listen(app.get('port'), function () {
        console.log('Express started on localhost:' + app.get('port') +
            'app running in ' + app.get('env') +
            '; press ctrl + c to quit');

    });
}

if (require.main === module) {
    //application run directly then start the server
    startServer();

} else {
    // if the application is imported via require export fucntion 
    // to create server add to exports
    module.exports = startServer();

}




