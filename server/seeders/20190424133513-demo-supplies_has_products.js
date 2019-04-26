'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('supplyProducts', [{
            quantity: 10,
            supply_id: 1,
            product_id: 1
        },
            {
                quantity: 20,
                supply_id: 2,
                product_id: 1
            },
            {
                quantity: 30,
                supply_id: 1,
                product_id: 1
            },
            {
                quantity: 40,
                supply_id: 2,
                product_id: 2
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('supplyProducts', null, {});
    }
};
