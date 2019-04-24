'use strict';
module.exports = (sequelize, DataTypes) => {
  const Location = sequelize.define('Location', {
    name: DataTypes.STRING,
    adress: DataTypes.STRING,
    city: DataTypes.STRING,
    province: DataTypes.STRING
  }, {});
  Location.associate = function(models) {
    // associations can be defined here
  };
  return Location;
};