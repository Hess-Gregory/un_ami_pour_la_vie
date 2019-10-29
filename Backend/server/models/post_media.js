/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('post_media', {
    MEDIA_idMEDIA: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'media',
        key: 'idMEDIA'
      }
    },
    POST_id_post: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'post',
        key: 'id_post'
      }
    }
  }, {
    tableName: 'post_media'
  });
};
