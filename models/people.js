'use strict';
module.exports = (sequelize, DataTypes) => {
    const People = sequelize.define('People', {
        name: DataTypes.STRING,
        surname: DataTypes.STRING,
        dni: DataTypes.STRING,
        nickname: DataTypes.STRING,
        phone: DataTypes.STRING,
        email: DataTypes.STRING,
        adress: DataTypes.STRING,
        is_provider: DataTypes.BOOLEAN,
        password: DataTypes.STRING,
        active: DataTypes.BOOLEAN
    }, {});
    People.associate = function (models) {
        People.hasMany(models.Supply)
    };
    return People;
};