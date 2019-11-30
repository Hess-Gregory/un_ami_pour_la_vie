/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usernotactive', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    username: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    isActive: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    roleName: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    tableName: 'usernotactive'
  });
};
