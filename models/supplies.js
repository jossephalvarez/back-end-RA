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
      })
  };
  return supplies;
};