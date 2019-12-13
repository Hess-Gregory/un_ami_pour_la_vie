/* jshint indent: 2 */
'use strict';
const bcrypt = require('bcrypt-nodejs');
const _ = require('lodash');

module.exports = function(sequelize, DataTypes) {
  const members =  sequelize.define('members',{
    id: {
      type: DataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
      defaultValue: '0'
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
    isActive: {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      defaultValue: '0'
    },
    status: {
      type: DataTypes.STRING(6),
      allowNull: false,
      defaultValue: ''
    },
    idROLE: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    roleName: {
      type: DataTypes.STRING(60),
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'members'
  });
  

  members.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  members.prototype.safeModel = function() {
      return _.omit(this.toJSON(), ['password']);
  };

  return members;
};