var express = require("express");
var router = express.Router();

router.get('/', function(req, res){
    res.json({
        message: "You connected to app.js"
    })
});

module.exports = router;