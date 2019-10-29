/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('connect_jwt', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(60),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isActive: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    role: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '6'
    }
  }, {
    tableName: 'connect_jwt'
  });
};
