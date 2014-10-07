var http = require('http');

module.exports = function (app) {

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
};