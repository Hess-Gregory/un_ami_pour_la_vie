/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "tag",
    {
      tagId: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      tagText: {
        type: DataTypes.TEXT,
        allowNull: false
      },
      idMEDIA: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: "media",
          key: "idMEDIA"
        }
      },
      id_categorylang: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: "categorylang",
          key: "id_categorylang"
        }
      },
      id_lang: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: "lang",
          key: "id_lang"
        }
      }
    },
    {
      tableName: "tag"
    }
  );
};
