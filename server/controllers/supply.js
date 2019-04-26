const Supply = require('../models').Supply;

module.exports = {
    list(req, res) {
        return Supply
            .all()
            .then((supplies) => res.status(200).send(supplies))
            .catch((error) => {
                res.status(400).send(error);
            });
    },
};