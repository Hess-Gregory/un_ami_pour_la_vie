"use strict";

module.exports = function(sequelize, DataTypes) {
  const role = sequelize.define(
    "role",
    {
      idROLE: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      roleName: {
        type: DataTypes.STRING(60),
        allowNull: false
      }
    },
    {
      timestamps: false,
      tableName: "role"
    }
  );
  return role;
};
