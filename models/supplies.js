'use strict';
module.exports = (sequelize, DataTypes) => {
  const supplies = sequelize.define('supplies', {
    date: DataTypes.STRING
  }, {});
  supplies.associate = function(models) {
      supplies.belongsTo(models.location,{
        foreignKey:{
          allowNull:false
        }
      });
      supplies.belongsTo(models.people, {
          foreignKey: {
              allowNull: false
          }
      });
      supplies.belongsTo(models.product, {
          through: 'supplies_has_products',
          as: 'products',
          foreignKey: 'supplyId',
      })
  };
  return supplies;
};