const Location=require('../models').Location;
const Supply=require('../models').Supply;
const SupplyProduct=require('../models').SupplyProduct;

module.exports = {
    add(req, res) {
        return Location
            .create(Location)
            .then(location => res.status(201).send(location))
            .catch(error => res.status(400).send(error));
    },
    list(req, res) {
        return Location
            .all()
            .then((locations) => res.status(200).send(locations))
            .catch((error) => { res.status(400).send(error); });
    }, listWithSupplies(req, res) {
        return Location
            .findAll({
                include: [{
                    model: Supply,
                    as: 'supplies'
                }],
            })
            .then((locations) => res.status(200).send(locations))
            .catch((error) => { res.status(400).send(error); });
    },
};