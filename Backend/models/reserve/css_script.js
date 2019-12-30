/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "css_script",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true
      }
    },
    {
      tableName: "css_script"
    }
  );
};
