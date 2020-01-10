/* jshint indent: 2 */
"use strict";
const bcrypt = require("bcrypt-nodejs");
const _ = require("lodash");

module.exports = function(sequelize, DataTypes) {
  const login = sequelize.define(
    "login",
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
      password: {
        type: DataTypes.STRING(255),
        allowNull: true
      },
      isActive: {
        type: DataTypes.INTEGER(1),
        allowNull: true,
        defaultValue: "0"
      },
      role: {
        type: DataTypes.INTEGER(11),
        allowNull: true,
        defaultValue: "1",
        references: {
          model: "role",
          key: "idROLE"
        }
      },
      firstName: {
        type: DataTypes.STRING(60),
        allowNull: true
      },
      lastName: {
        type: DataTypes.STRING(60),
        allowNull: true
      },
      pachMedia: {
        type: DataTypes.STRING(255),
        allowNull: true
      }
    },
    {
      timestamps: false,
      tableName: "user"
    }
  );

  login.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  login.prototype.safeModel = function() {
    return _.omit(this.toJSON(), ["password"]);
  };

  return login;
};
