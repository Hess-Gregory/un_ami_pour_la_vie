const mysql = require('mysql2');
const Sequelize = require('sequelize');
const debug = require('debug')('node-server:db');

const sequelize = new Sequelize('un_ami_pour_la_vie','root','',{
      host: 'localhost',
      dialect: 'mysql',
      logging: false
});

sequelize
    .authenticate()
    .then(() => {
     console.info('Sequelize - La connexion MySQL a été établie avec succès.');
    })
    .catch(err => {
     console.error('Sequelize - Impossible de se connecter à la base de données MySQL:', err);
    });

module.exports = sequelize ;