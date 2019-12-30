/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "setuppicture",
    {
      size: {
        type: DataTypes.STRING(20),
        allowNull: false
      },
      width: {
        type: DataTypes.INTEGER(4),
        allowNull: false
      },
      height: {
        type: DataTypes.INTEGER(4),
        allowNull: false
      }
    },
    {
      tableName: "setuppicture"
    }
  );
};
