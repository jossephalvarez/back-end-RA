'use strict';
module.exports = (sequelize, DataTypes) => {
  const Supply = sequelize.define('Supply', {
    date: DataTypes.STRING,
    provider_id: DataTypes.INTEGER,
    location_id: DataTypes.INTEGER
  }, {});
  Supply.associate = function(models) {
    // associations can be defined here
      Supply.belongsTo(models.Location,{
          foreignKey:{
              allowNull:false
          }
      });
      Supply.belongsTo(models.People, {
          foreignKey: {
              allowNull: false
          }
      });
      Supply.belongsTo(models.Product, {
          through: 'SuplyProduct',
          as: 'products',
          foreignKey: 'supply_id',
      })
  };
  return Supply;
};