'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.addColumn(
        'Products', // name of Source model,
        'TypeId',//name of the key we're adding
        {
            type: Sequelize.STRING,
            references: {
                model: 'Type', // name of Target model
                key: 'id', // key in Target model that we're referencing
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL',
        }

    )
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.removeColumn(
          'Product', // name of Source model
          'TypeId' // key we want to remove
      );
  }
};
