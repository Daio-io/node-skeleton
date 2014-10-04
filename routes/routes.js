module.exports.index = function (req, res) {

    res.render('home', {
        welcomeMessage: 'Welcome!'
    });

};

module.exports.error500 = function (err, req, res, next) {
    // pass in err to log the error to the console
    console.error(err.stack);
    res.status(500);
    res.render('500');

};

module.exports.error404 = function (req, res) {
    // you have to explicitly set status to 404 otherwise express defaults to 200
    res.status(404);
    res.render('404');

};