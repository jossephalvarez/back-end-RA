var express = require('express');
var router = express.Router();

const locationController = require('../controllers').location;
const peopleController = require('../controllers').people;
const typeController = require('../controllers').type;
const supplyController = require('../controllers').supply;
const productController = require('../controllers').product;

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
router.get('/api/typeWithProducts', typeController.listWithProducts);

/*Product Router*/
router.get('/api/product', productController.list);

/*Supply Router*/
router.get('/api/supply', supplyController.list);


module.exports = router;
