'use strict';

// Add all middleware in here
module.exports = function (app) {

    // ** Middleware ** //
    app.use(bodyParser.urlencoded({
        extended: true
    })); // bodyParser is used for request (req) object

    app.use(bodyParser.json());

};