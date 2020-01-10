"use strict";
const bcrypt = require("bcrypt-nodejs");
const _ = require("lodash");

module.exports = function(sequelize, DataTypes) {
  const admin = sequelize.define(
    "admin",
    {
      id: {
        type: DataTypes.INTEGER(11),
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      username: {
        type: DataTypes.STRING(60),
        allowNull: false
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
        allowNull: false
      },
      roleName: {
        type: DataTypes.STRING(60),
        allowNull: true
      }
    },
    {
      timestamps: false,
      tableName: "listadmin"
    }
  );

  admin.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  admin.prototype.safeModel = function() {
    return _.omit(this.toJSON(), ["password"]);
  };

  return admin;
};
