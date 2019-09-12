var Book = require('../models/Book');

module.exports = {
    get: function(req, res) {
        // Finds all books
        // Book.find({}).then(function (data) {
        //     console.log(data)
        // }).catch(function (err) {
        //     res.status(500).send(err);
        // })
        res.json({
            message: "You made a GET to Books"
        })
    },
    post: function(req, res) {
        // Finds all books
        // Book.find({}).then(function (data) {
        //     console.log(data)
        // }).catch(function (err) {
        //     res.status(500).send(err);
        // })
        res.json({
            message: "You made a POST to Books"
        })
    },
    delete: function(req, res) {
        // Finds all books
        // Book.find({}).then(function (data) {
        //     console.log(data)
        // }).catch(function (err) {
        //     res.status(500).send(err);
        // })
        res.json({
            message: "You made a DELETE to Books"
        })
    },
};