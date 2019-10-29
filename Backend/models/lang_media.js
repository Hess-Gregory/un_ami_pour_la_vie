/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lang_media', {
    LANG_id_lang: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'lang',
        key: 'id_lang'
      }
    },
    MEDIA_idMEDIA: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'media',
        key: 'idMEDIA'
      }
    }
  }, {
    tableName: 'lang_media'
  });
};
