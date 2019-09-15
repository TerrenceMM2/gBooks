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
            let bookArr = response.data.items;
            let newArr = [];
            bookArr.forEach(book => {
                let obj = {
                    id: book.id,
                    title: book.volumeInfo.title,
                    authors: book.volumeInfo.authors,
                    description: book.volumeInfo.description,
                    image: book.volumeInfo.imageLinks.smallThumbnail,
                    link: book.volumeInfo.infoLink
                }
                newArr.push(obj);
            })
            res.status(200).json(newArr);
        }).catch(err => {
            res.json(err);
        })
    },
    post: function (req, res) {
        Book.create(req.body)
            .then(data => {
                res.status(201).json({
                    data: data,
                    message: "Book saved!"
                })
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