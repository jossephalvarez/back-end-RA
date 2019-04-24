'use strict';
module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('supplies_has_products', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            quantity: {
                allowNull: false,
                type: Sequelize.INTEGER
            },
            supplyId: {
                type: Sequelize.INTEGER,
                references: {model: 'Supplies', key: 'id'},
                onDelete: 'CASCADE',
                allowNull: false,
            },
            providerId: {
                type: Sequelize.INTEGER,
                references: { model: 'People', key: 'id' },
                onDelete: 'CASCADE',
                allowNull: false,
            },
            createdAt: {
                type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            },
            updatedAt: {
                type: Sequelize.DATE, defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
                allowNull: false
            }
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('supplies_has_products');
    }
};