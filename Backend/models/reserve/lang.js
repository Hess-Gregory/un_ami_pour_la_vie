/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "lang",
    {
      id_lang: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      id_post: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "post",
          key: "id_post"
        }
      },
      CATEGORYLANG_id_categorylang: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        references: {
          model: "categorylang",
          key: "id_categorylang"
        }
      },
      CHOISELANG_idCHOISELANG: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "choiselang",
          key: "idCHOISELANG"
        }
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
      }
    },
    {
      tableName: "lang"
    }
  );
};
