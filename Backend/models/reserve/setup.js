/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "setup",
    {
      visibleGoogle: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: "0"
      },
      titleWebsite: {
        type: DataTypes.STRING(60),
        allowNull: true
      },
      NewsMax: {
        type: DataTypes.INTEGER(3),
        allowNull: true
      },
      excerpt: {
        type: DataTypes.INTEGER(1),
        allowNull: true
      },
      excerptSize: {
        type: DataTypes.INTEGER(3),
        allowNull: true
      },
      slogan: {
        type: DataTypes.STRING(60),
        allowNull: true
      },
      registerPublic: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: "1"
      },
      CHOISELANG_idCHOISELANG: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        defaultValue: "1",
        references: {
          model: "choiselang",
          key: "idCHOISELANG"
        }
      }
    },
    {
      tableName: "setup"
    }
  );
};
