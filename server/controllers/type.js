const Type = require('../models').Type;

module.exports = {
    list(req, res) {
        return Type
            .all()
            .then((type) => res.status(200).send(type))
            .catch((error) => {
                res.status(400).send(error);
            });
    },
};