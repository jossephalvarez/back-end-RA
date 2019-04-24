'use strict';
module.exports = (sequelize, DataTypes) => {
  const supplies = sequelize.define('supplies', {
    date: DataTypes.STRING
  }, {});
  supplies.associate = function(models) {
    // associations can be defined here
  };
  return supplies;
};