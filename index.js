var express = require('express');
var credentials = require('./lib/credentials.js');
var app = express();
require('./routes/routes.js')(app); // add app routes here

var viewEngine = require('./lib/view_engine.js')(app); // set the view engine in here

//Set the port as the env set variable or default to 3000 if it does not exist
app.set('port', process.env.PORT || 3000);

var domain = require('./lib/domain.js')(app); // set up a domain for the app

app.use(express.static(__dirname + '/public')); // serve this content to the client without special handling (static)
require('./lib/middleware.js')(app); // app middleware in here

require('./lib/environment_context.js')(app);

// ** UNCOMMENT BELOW ONCE YOU HAVE ADDED CONNECTION STRINGS FOR DATABASE **
// var database = require('./lib/database_connection.js')(app, credentials);

require('./lib/server.js')(app);