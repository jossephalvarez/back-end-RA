'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('locations', [{
          name: 'Chiclayo',
          city:'Chiclayo',
          province:'Lambayeque'
      },
          {
              name: 'Salas',
              city:'Chiclayo',
              province:'Lambayeque'
          }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('locations', null, {});
  }
};
