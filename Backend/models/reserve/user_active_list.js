/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "user_active_list",
    {
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
      firstName: {
        type: DataTypes.STRING(60),
        allowNull: true
      },
      lastName: {
        type: DataTypes.STRING(60),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: false
      },
      roleName: {
        type: DataTypes.STRING(60),
        allowNull: true
      }
    },
    {
      tableName: "user_active_list"
    }
  );
};
