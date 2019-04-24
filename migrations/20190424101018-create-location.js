'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('locations', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            adress: {
                type: Sequelize.STRING
            },
            city: {
                type: Sequelize.STRING
            },
            province: {
                type: Sequelize.STRING
            }

        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('locations');
    }
};