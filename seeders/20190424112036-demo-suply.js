'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('supplies', [{
            date: '13/04/2019'
        },
            {
                date: '13/05/2019'
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('supplies', null, {});
    }
};
