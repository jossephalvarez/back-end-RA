'use strict';
module.exports = (sequelize, DataTypes) => {
  const Provider = sequelize.define('Provider', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    dni: DataTypes.STRING,
    nickname: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    adress: DataTypes.STRING
  }, {});
  Provider.associate = function(models) {
    // associations can be defined here
  };
  return Provider;
};