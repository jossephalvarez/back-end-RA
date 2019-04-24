'use strict';
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        price: DataTypes.FLOAT
    }, {});
    Product.associate = function (models) {
        Product.belongsTo(models.Type, {
            foreignKey: {
                allowNull: false
            }
        });
        Product.belongsTo(models.supplies, {
            through: 'supplies_has_products',
            as: 'supplies',
            foreignKey: 'productId',
        })
    };
    return Product;
};