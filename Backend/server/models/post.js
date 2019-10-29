/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('post', {
    id_post: {
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
    id_category: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'category',
        key: 'id_category'
      }
    },
    creatDate: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    dateOnline: {
      type: DataTypes.DATE,
      allowNull: true
    },
    isOnline: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    classDiv: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    IdDiv: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'post'
  });
};
