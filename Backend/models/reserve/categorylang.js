/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('categorylang', {
    id_categorylang: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tags: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    id_category: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'category',
        key: 'id_category'
      }
    },
    CHOISELANG_idCHOISELANG: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'choiselang',
        key: 'idCHOISELANG'
      }
    },
    catSlug: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    title: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dateCreation: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'categorylang'
  });
};
