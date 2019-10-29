'use strict';
const bcrypt = require('bcrypt-nodejs');
const _ = require('lodash');

module.exports = function(sequelize, DataTypes) {
  const User =  sequelize.define('User', {
    
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
      allowNull: false,
      unique: true
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
      references: {
        model: 'role',
        key: 'idROLE'
      }
    },
    asbl: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    sexGenre: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    adPvStreet: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    adPvNum: {
      type: DataTypes.CHAR(9),
      allowNull: true
    },
    adPvZip: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    adPvCity: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    adPvCountry: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    firm: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tva: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    adProStreet: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    adProNum: {
      type: DataTypes.CHAR(9),
      allowNull: true
    },
    adProZip: {
      type: DataTypes.INTEGER(5),
      allowNull: true
    },
    adProCity: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    adProCountry: {
      type: DataTypes.STRING(60),
      allowNull: true
    },
    contPhonePro: {
      type: DataTypes.STRING(12),
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
    contFacebook: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    contWebsite: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    shortDesc: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    longDesc: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    timestamps: false,
    tableName: 'user'
  });
  
  
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  User.prototype.safeModel = function() {
      return _.omit(this.toJSON(), ['password']);
  };

  return User;
};