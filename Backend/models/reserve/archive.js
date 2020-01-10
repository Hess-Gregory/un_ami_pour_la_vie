/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "archive",
    {
      id_lang: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      id_post: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      CATEGORYLANG_id_categorylang: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      CHOISELANG_idCHOISELANG: {
        type: DataTypes.INTEGER(11),
        allowNull: false
      },
      title: {
        type: DataTypes.STRING(120),
        allowNull: true
      },
      subTitle: {
        type: DataTypes.STRING(120),
        allowNull: true
      },
      content: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      dateCreation: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
      },
      dateUpdate: {
        type: DataTypes.DATE,
        allowNull: true
      }
    },
    {
      tableName: "archive"
    }
  );
};
