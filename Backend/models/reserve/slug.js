/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "slug",
    {
      idSLUG: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      slugText: {
        type: DataTypes.STRING(255),
        allowNull: false
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
      },
      idMEDIA: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: "media",
          key: "idMEDIA"
        }
      }
    },
    {
      tableName: "slug"
    }
  );
};
