'use strict';
module.exports = (sequelize, DataTypes) => {
  const Supply = sequelize.define('Supply', {
    date: DataTypes.STRING,
    provider_id: DataTypes.INTEGER,
    location_id: DataTypes.INTEGER
  }, { timestamps: false});
  Supply.associate = function(models) {
    // associations can be defined here
      Supply.belongsTo(models.Location,{
          foreignKey: 'location_id',
      });
      Supply.belongsTo(models.People, {
          foreignKey: 'provider_id',
      });
      Supply.belongsToMany(models.Product, {
          through: 'SupplyProducts',
          as: 'products',
          foreignKey: 'supply_id',
      })
  };
  return Supply;
};