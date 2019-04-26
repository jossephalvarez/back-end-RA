var express = require('express');
var router = express.Router();

const locationController = require('../controllers').location;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* Location Router */
router.get('/api/location', locationController.list);
router.post('/api/location', locationController.add);

/* Advance Router */


module.exports = router;
