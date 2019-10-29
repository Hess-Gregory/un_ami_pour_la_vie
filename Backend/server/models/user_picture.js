/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('user_picture', {
    idUSER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'id'
      }
    },
    login: {
      type: DataTypes.STRING(60),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user',
        key: 'username'
      }
    },
    table1_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    table1_id1: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    idPICTURE_USER: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'picture',
        key: 'id_picture'
      }
    },
    mediaPath: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'user_picture'
  });
};
