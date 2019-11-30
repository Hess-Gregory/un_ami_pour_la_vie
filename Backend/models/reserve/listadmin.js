/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('listadmin', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    },
    firstName: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    roleName: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    tableName: 'listadmin'
  });
};
