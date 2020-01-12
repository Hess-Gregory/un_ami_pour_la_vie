/* jshint indent: 2 */
"use strict";
const bcrypt = require("bcrypt-nodejs");
const _ = require("lodash");

module.exports = function(sequelize, DataTypes) {
  const adressbook = sequelize.define(
    "adressbook",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      firm: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      asbl: {
        type: DataTypes.STRING(80),
        allowNull: true
      },
      lastName: {
        type: DataTypes.STRING(60),
        allowNull: true
      },
      firstName: {
        type: DataTypes.STRING(60),
        allowNull: true
      },
      contPhonePv: {
        type: DataTypes.STRING(12),
        allowNull: true
      },
      contPhoneGsm: {
        type: DataTypes.STRING(12),
        allowNull: true
      },
      contPhonePro: {
        type: DataTypes.STRING(12),
        allowNull: true
      },
      email: {
        type: DataTypes.STRING(100),
        allowNull: true,
        unique: true
      }
    },
    {
      timestamps: false,
      tableName: "adressbook"
    }
  );

  return adressbook;
};
