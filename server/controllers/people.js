const People = require('../models').People;

module.exports = {
    list(req, res) {
        return People
            .all()
            .then((people) => res.status(200).send(people))
            .catch((error) => {
                res.status(400).send(error);
            });
    },
};