/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "media",
    {
      idMEDIA: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      mediaPath: {
        type: DataTypes.STRING(100),
        allowNull: false,
        primaryKey: true
      },
      renameFile: {
        type: DataTypes.STRING(45),
        allowNull: false,
        primaryKey: true
      },
      USER_idUSER: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "user",
          key: "id"
        }
      },
      typeFIle: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      dateCreation: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
      },
      format: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      altAttributes: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true
      },
      tags: {
        type: DataTypes.STRING(45),
        allowNull: false,
        primaryKey: true
      }
    },
    {
      tableName: "media"
    }
  );
};
