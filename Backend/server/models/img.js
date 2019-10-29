/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('img', {
    backgroundPathId: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    LogoPathId: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    tableName: 'img'
  });
};
