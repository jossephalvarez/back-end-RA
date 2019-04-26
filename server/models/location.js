'use strict';
module.exports = (sequelize, DataTypes) => {
    const Location = sequelize.define('Location', {
        name: DataTypes.STRING,
        address: DataTypes.STRING,
        city: DataTypes.STRING,
        province: DataTypes.STRING
    },{
        timestamps: false
    });
    Location.associate = function (models) {
        Location.hasMany(models.Supply,{
            foreignKey: 'supply_id',
            as: 'supplies'
        });
    };
    return Location;
};