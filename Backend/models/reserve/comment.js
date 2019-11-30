/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('comment', {
    idCOMMENT: {
      type: DataTypes.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    idReponse: {
      type: DataTypes.BIGINT,
      allowNull: false,
      references: {
        model: 'comment',
        key: 'idCOMMENT'
      }
    },
    author_IP: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    fullname: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    mail: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    content: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    isOnline: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    IsDelete: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    raisonDelete: {
      type: DataTypes.STRING(160),
      allowNull: true
    },
    classDiv: {
      type: DataTypes.STRING(65),
      allowNull: true
    },
    IdDiv: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    id_post: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'post',
        key: 'id_post'
      }
    }
  }, {
    tableName: 'comment'
  });
};
