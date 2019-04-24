'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('supplies', [{
            date: '13/04/2019',
            locationId: 1,
            providerId: 2

        },
            {
                date: '20/04/2019',
                locationId: 2,
                providerId: 2

            },
            {
                date: '13/04/2019',
                locationId: 2,
                providerId: 3
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('supplies', null, {});
    }
};
