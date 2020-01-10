/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "choiselang",
    {
      idCHOISELANG: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      nameLang: {
        type: DataTypes.STRING(45),
        allowNull: false,
        primaryKey: true
      }
    },
    {
      tableName: "choiselang"
    }
  );
};
