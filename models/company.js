'use strict';
// 1:N relation
// 1 company have many user
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    name: DataTypes.STRING
  }, {});
  Company.associate = function(models) {
    Company.hasMany(models.User, {as: 'employes'})
  };
  return Company;
};
