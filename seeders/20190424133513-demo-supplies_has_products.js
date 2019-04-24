'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('supplies_has_products', [{
            quantity: 10,
            supplyId: 1,
            providerId: 1,

        },
            {
                quantity: 20,
                supplyId: 2,
                providerId: 1
            },
            {
                quantity: 30,
                supplyId: 1,
                providerId: 1
            },
            {
                quantity: 40,
                supplyId: 2,
                providerId: 2
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('supplies_has_products', null, {});
    }
};
