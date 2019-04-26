'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('supplies', [{
            date: '13/04/2019',
            location_id: 1,
            provider_id: 2

        },
            {
                date: '20/04/2019',
                location_id: 2,
                provider_id: 2

            },
            {
                date: '13/04/2019',
                location_id: 2,
                provider_id: 3
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('supplies', null, {});
    }
};
