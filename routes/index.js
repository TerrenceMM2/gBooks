  
var express = require('express');
var router = express.Router();

// URLs that come in from the the room path ("/") will be routed to the appropriate controller based on the path the follows and the method used.
router.use('/', require('./app'));
router.use('/api/books', require('./api/books'));
// If any other URL path is entered, the browser will display a 404 page.
// router.use('*', function(req, res){
//     res.json({
//         message : "Whoops ... 404."
//     });
// });

module.exports = router;