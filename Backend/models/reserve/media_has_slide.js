/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "media_has_slide",
    {
      MEDIA_idMEDIA: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: "media",
          key: "idMEDIA"
        }
      },
      SLIDE_idSLIDE: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        references: {
          model: "slide",
          key: "idSLIDE"
        }
      }
    },
    {
      tableName: "media_has_slide"
    }
  );
};
