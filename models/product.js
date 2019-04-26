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
        Product.belongsTo(models.Supply, {
            through: 'SuplyProduct',
            as: 'supplies',
            foreignKey: 'product_id',
        })
    };
    return Product;
};