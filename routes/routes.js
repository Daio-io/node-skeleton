var main = require('./handlers/main.js');
var errors = require('./handlers/errors.js');

module.exports = function (app) {

    //** Routes **//
    app.get('/', main.index);
    app.get('/page', main.anotherPage);
    // redirect all others to the index
    app.get('*', main.index);
    app.use(errors.error500);
    app.use(errors.error404);

};