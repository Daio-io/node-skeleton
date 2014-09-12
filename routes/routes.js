module.exports = function (app) {

    app.get('/', function (req, res) {

        res.render('home', {
            welcomeMessage: 'Welcome!'
        });

    });
    
    // custom 505 error
    app.use(function (err, req, res, next) {
        // pass in err to log the error to the console
        console.error(err.stack);
        res.status(500);
        res.render('500');
    });

    app.use(function (req, res) {
        res.status(404); // you have to explicitly set status to 404 otherwise express defaults to 200
        res.render('404');

    });

};