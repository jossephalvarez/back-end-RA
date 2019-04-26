var express = require('express');
var router = express.Router();

const locationController = require('../controllers').location;
const peopleController = require('../controllers').people;
const typeController = require('../controllers').type;

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

/* Location Router */
router.get('/api/location', locationController.list);
router.post('/api/location', locationController.add);

/*People Router*/
router.get('/api/people', peopleController.list);

/*TypeProduct Router*/
router.get('/api/type', typeController.list);



module.exports = router;
