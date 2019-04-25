'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('supplies_has_products', [{
            quantity: 10,
            supplyId: 1,
            productId: 1,

        },
            {
                quantity: 20,
                supplyId: 2,
                productId: 1
            },
            {
                quantity: 30,
                supplyId: 1,
                productId: 1
            },
            {
                quantity: 40,
                supplyId: 2,
                productId: 2
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('supplies_has_products', null, {});
    }
};
