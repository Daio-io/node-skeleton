//**- Middleware --**
module.exports = function (app, express) {
    var bodyParser = require('body-parser');
    app.use(express.static(__dirname + '/public')); // serve this content to the client without special handling (static)

    app.use(bodyParser.urlencoded({
        extended: true
    })); // bodyParser is used for request (req) object

    app.use(bodyParser.json());

};