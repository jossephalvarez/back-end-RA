'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.bulkInsert('people', [{
            name: 'Josseph',
            surname: 'Alvarez',
            dni: '77934544',
            nickname: 'Zino',
            phone: '615224558',
            email: 'jjsj@gmail.com',
            type: 'employee',
            password: '123456'
        }], {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete('people', null, {});
    }
};
