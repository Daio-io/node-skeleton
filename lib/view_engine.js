module.exports = function (app) {
    //create handlebars instance and set main.handlebars as the default layout
    var handlebars = require('express-handlebars')
        .create({
            defaultLayout: 'main'
        }); // This will use the main.handlebars file by default for any view unless specified otherwise
    app.engine('handlebars', handlebars.engine);

    app.set('view engine', 'handlebars');


};