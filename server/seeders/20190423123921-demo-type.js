'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('types', [{
            id: 'CRD',
            name: 'Cerdo',

        }, {
            id: 'OVN',
            name: 'Ovino',
        },
            {
                id: 'BOV',
                name: 'Bovino',
            }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('types', null, {});
    }
};
