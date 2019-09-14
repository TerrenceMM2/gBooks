var express = require("express");
var router = express.Router();
var bookController = require("../../controllers/books");

// URLs that come in from the /articles path will be routed to the appropriate controller based on the path the follows and the method used.
router.get('/', bookController.get);
router.post('/search', bookController.find);
router.post('/', bookController.post);
router.delete('/:id', bookController.delete);

module.exports = router;