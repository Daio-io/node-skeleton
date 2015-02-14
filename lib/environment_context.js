'use strict';

module.exports = function (app) {
    // creating a switch to add environment specifics such as different logging in this case
    switch (app.get('env')) {
    case 'development':
        //compact colorful dev logging
        app.use(require('morgan')('dev'));
        break;
    case 'production':

        // add production setups here

        break;
    }

};