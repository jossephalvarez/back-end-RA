const People = require('../models').People;
const Supply = require('../models').Supply;
const SupplyProduct=require('../models').SupplyProduct;

module.exports = {
    list(req, res) {
        return People
            .all()
            .then((people) => res.status(200).send(people))
            .catch((error) => {
                res.status(400).send(error);
            });
    },
    list(req, res) {
        return People
            .findAll({
                include: [{
                    model: Supply,
                    as: 'supplies'
                }],
            })
            .then((people) => res.status(200).send(people))
            .catch((error) => {
                res.status(400).send(error);
            });
    },
};