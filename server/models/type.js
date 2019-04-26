'use strict';
module.exports = (sequelize, DataTypes) => {
  const Type = sequelize.define('Type', {
    name: DataTypes.STRING
  }, {
      timestamps: false
  });
  Type.associate = function(models) {
    // associations can be defined here
      Type.hasMany(models.Product)

};
return Type;
};