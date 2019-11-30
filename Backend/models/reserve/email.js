/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('email', {
    server: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    port: {
      type: DataTypes.INTEGER(4),
      allowNull: true
    },
    identity: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'email'
  });
};
