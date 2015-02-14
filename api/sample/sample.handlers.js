'use strict';

// Here we can add handlers for our Sample api
// It uses our Mongoose sample.model to save and get samples

var sampleModel = require('./sample.model'); // Require our Mongoose model;

exports.getAllSamples = function (req, res) {

    sampleModel.find(null, function (err, sample) {

        if (err) {
            res.status(404).json({
                status: 'error',
                message: 'No Samples found'
            }).end();
        }
        else {
            res.json(sample.map(function (sample) {
                return {
                    id: sample._id,
                    name: sample.name,
                    numbers: sample.numbers,
                    tags: sample.tags,
                    boo: sample.boo
                };
            }));
        }
    });

};

exports.postSample = function (req, res) {

    var sample = new sample({
        title: req.body.name,
        numbers: req.body.numbers,
        tags: req.body.tags,
        boo: req.body.boo
    });

    sample.save(function (err, saved) {
        if (err) {
            res.status(500).json({
                status: 'error',
                message: 'failed saving sample'
            }).end();
        }
        else {
            res.json({
                id: saved._id
            });
        }
    });
};