'use strict';
const bcrypt = require('bcrypt-nodejs');
const _ = require('lodash');

module.exports = function(sequelize, DataTypes) {
  const connect_jwt = sequelize.define('connect_jwt', {
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
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isActive: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    role: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '6'
    }
  }, {
    timestamps: false,
    tableName: 'connect_jwt'
  });


  connect_jwt.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
  };
  connect_jwt.prototype.safeModel = function() {
        return _.omit(this.toJSON(), ['password']);
  };
  return connect_jwt;
};
