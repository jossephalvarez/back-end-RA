'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('supplies', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            date: {
                allowNull: false,
                type: Sequelize.STRING
            },
            createdAt: {
                type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            },
            locationId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                allowNull: false,
                references: {
                    model: 'Locations',
                    key: 'id'
                }
            }
            , providerId: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                allowNull: false,
                references: {
                    model: 'People',
                    key: 'id'
                }
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('supplies');
    }
};