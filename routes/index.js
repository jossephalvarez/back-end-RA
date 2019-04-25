var express = require('express');
var router = express.Router();

const locationController = require('../controllers').location;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Location Router */
router.get('/api/company', locationController.list);
router.get('/api/company/:id', companyController.getById);
router.post('/api/company', companyController.add);
router.put('/api/company/:id', companyController.update);
router.delete('/api/company/:id', companyController.delete);

/* Advance Router */


module.exports = router;
