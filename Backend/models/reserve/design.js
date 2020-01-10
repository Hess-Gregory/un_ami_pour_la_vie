/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "design",
    {
      logo: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      backgroundPathImg: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      backgroundColor: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      backgroundPosition: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      backgroundSize: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      JumbostronGradientType: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      AFontPolice: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      JumbostronGradientColor1: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      JumbostronGradientOpacity1: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      JumbostronGradientColor2: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      JumbostronGradientOpacity2: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      contenBackgroundtColor: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      ContentBorderColor: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      A: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      P: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      H1: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      H2: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      H3: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      H4: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      H5: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      H6: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      span: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      PFontPolice: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      H1FontPolice: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      H2FontPolice: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      H3FontPolice: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      H4FontPolice: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      H5FontPolice: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      H6FontPolice: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      spanFontPolice: {
        type: DataTypes.STRING(255),
        allowNull: true
      }
    },
    {
      tableName: "design"
    }
  );
};
