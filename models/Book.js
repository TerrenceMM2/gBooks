var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BookSchema = new Schema ({
    title : {
        type : String,
        require : true
    },
    authors : [
        {
            author : {
                type : String,
                required : true
            }
        }
    ],
    description : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    },
    link : {
        type : String,
        required: true
    }
});

module.exports = BookSchema;