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
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
      return queryInterface.bulkDelete('locations', null, {});
  }
};
