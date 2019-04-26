'use strict';
module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define('Product', {
        name: DataTypes.STRING,
        price: DataTypes.FLOAT,
        TypeId:DataTypes.STRING
    }, {
        timestamps: false
    });
    Product.associate = function (models) {
        Product.belongsTo(models.Type, {
            foreignKey:'TypeId',
            as:'type'
        });
        Product.belongsToMany(models.Supply, {
            through: 'SuplyProduct',
            as: 'supplies',
            foreignKey: 'product_id',
        })
    };
    return Product;
};