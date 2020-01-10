/* jshint indent: 2 */
"use strict";
const bcrypt = require("bcrypt-nodejs");
const _ = require("lodash");

module.exports = function(sequelize, DataTypes) {
  const userandrole = sequelize.define(
    "userandrole",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING(60),
        allowNull: false,
        primaryKey: true
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: true
      },
      firstName: {
        type: DataTypes.STRING(60),
        allowNull: true
      },
      lastName: {
        type: DataTypes.STRING(60),
        allowNull: true
      },
      isActive: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: "0"
      },
      newRegister: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: "1"
      },
      created_date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
      },
      roleName: {
        type: DataTypes.STRING(60),
        allowNull: true
      }
    },
    {
      timestamps: false,
      tableName: "userandrole"
    }
  );

  return userandrole;
};
