/* jshint indent: 2 */
"use strict";
const bcrypt = require("bcrypt-nodejs");
const _ = require("lodash");

module.exports = function(sequelize, DataTypes) {
  const user_is_active = sequelize.define(
    "user_is_active",
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
      firstName: {
        type: DataTypes.STRING(60),
        allowNull: true
      },
      lastName: {
        type: DataTypes.STRING(60),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: true
      },
      created_date: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP")
      },
      newRegister: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: "1"
      },
      isActive: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: "0"
      },
      status: {
        type: DataTypes.STRING(6),
        allowNull: false,
        defaultValue: ""
      },
      idROLE: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "0"
      },
      roleName: {
        type: DataTypes.STRING(60),
        allowNull: true
      }
    },
    {
      timestamps: false,
      tableName: "user_is_active"
    }
  );

  return user_is_active;
};
