'use strict';

// Handlers files are used to group your routes logically
// Require your handlers and add each route to the *.router.js file
exports.index = function (req, res) {

    res.render('home', {
        welcomeMessage: 'Welcome!'
    });

};

exports.anotherPage = function(req, res) {

    res.render('page', {
        message: 'Yey!! another page!'
    });

};