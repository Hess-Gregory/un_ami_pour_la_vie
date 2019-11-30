/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('connect_is_member', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    username: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    roleName: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    tableName: 'connect_is_member'
  });
};
