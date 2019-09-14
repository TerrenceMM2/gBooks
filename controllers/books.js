const Book = require('../models/Book');
const axios = require('axios');

module.exports = {
    get: function (req, res) {
        Book.find({})
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).send(err);
            })
    },
    find: function (req, res) {
        // Search Google for book based on search term
        axios({
            url: "https://www.googleapis.com/books/v1/volumes?q=" + req.body.search,
            method: "GET"
        }).then(response => {
            res.status(200).json(response.data.items);
        }).catch(err => {
            res.json(err);
        })
    },
    post: function (req, res) {
        Book.create(req.body)
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).send(err);
            })
    },
    delete: function (req, res) {
        // Deletes book from the database.
        Book.remove({_id : req.params.id})
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                res.status(500).json(err)
            });
    }
};