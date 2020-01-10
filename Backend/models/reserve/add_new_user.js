/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "add_new_user",
    {
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
        allowNull: false
      },
      password: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      role: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      isActive: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: "0"
      }
    },
    {
      tableName: "add_new_user"
    }
  );
};
