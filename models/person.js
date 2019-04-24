'use strict';
module.exports = (sequelize, DataTypes) => {
  const Person = sequelize.define('Person', {
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    dni: DataTypes.STRING,
    nickname: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    adress: DataTypes.STRING,
    type: DataTypes.ENUM,
    password: DataTypes.STRING,
    active: DataTypes.BOOLEAN
  }, {});
  Person.associate = function(models) {
    // associations can be defined here
  };
  return Person;
};