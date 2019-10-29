/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('picture', {
    id_picture: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    USER_idUSER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    addDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    AltPicture: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    Path: {
      type: DataTypes.STRING(45),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'picture'
  });
};
