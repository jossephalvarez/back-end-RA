'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('Types', [{
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
        return queryInterface.bulkDelete('Types', null, {});
    }
};
