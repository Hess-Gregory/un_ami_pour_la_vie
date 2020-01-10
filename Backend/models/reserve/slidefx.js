/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "slidefx",
    {
      pictureFX: {
        type: DataTypes.STRING(25),
        allowNull: true
      },
      pictureDELAY: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      pictureDURATION: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      pictureDIRECTION: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      pictureENDDELAY: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      title1FX: {
        type: DataTypes.STRING(25),
        allowNull: true
      },
      tilte1DELAY: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      title1DURATION: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      title1DIRECTION: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      title1ENDDELAY: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      title1PositionTOP: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      title2FX: {
        type: DataTypes.STRING(25),
        allowNull: true
      },
      title2DELAY: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      title2DURATION: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      title2DIRECTION: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      title2ENDDELAY: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      },
      title2PositionTOP: {
        type: DataTypes.INTEGER(11),
        allowNull: true
      }
    },
    {
      tableName: "slidefx"
    }
  );
};
