/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define(
    "category",
    {
      id_category: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      USER_idUSER: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        references: {
          model: "user",
          key: "id"
        }
      },
      isOnline: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: "0"
      },
      dateOnline: {
        type: DataTypes.DATE,
        allowNull: true
      },
      classDiv: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      idDiv: {
        type: DataTypes.STRING(45),
        allowNull: true
      },
      dateCreation: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
      }
    },
    {
      tableName: "category"
    }
  );
};
