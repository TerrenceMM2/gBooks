var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    authors: {
        type: [String],
        required: true
    },
    description: String,
    image: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    }
});

var Book = mongoose.model("Book", BookSchema);

module.exports = Book;