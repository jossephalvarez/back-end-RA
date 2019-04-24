'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('products', [{
          name: 'Primera',
          price: 1.2,
          TypeId:'OVN'
      },
          {
              name: 'Segunda',
              price: 1.0,
              TypeId:'OVN'
          }], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('products', null, {});
  }
};
