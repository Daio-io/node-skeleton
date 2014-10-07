var main = require('./handlers/main.js');

module.exports = function (app) {

    //** Routes **//
    app.get('/', main.index);
    app.get('/page', main.anotherPage);
    // redirect all others to the index
    app.get('*', main.index);
    app.use(main.error500);
    app.use(main.error404);

};