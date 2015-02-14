module.exports = {

    mongo: {
        development: {
            // Add your connection strings here. This is just an example
            connectionString: 'mongodb://localhost/samplesite'
        },
        production: {
            connectionString: 'place your mongoose live connection string here'
        }

    }

};