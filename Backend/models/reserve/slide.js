/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "slide",
    {
      idSLIDE: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      order: {
        type: DataTypes.INTEGER(25),
        allowNull: true
      },
      title1: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      title2: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      isActif: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: "0"
      }
    },
    {
      tableName: "slide"
    }
  );
};
