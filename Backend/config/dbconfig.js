const mysql = require("mysql2");
const Sequelize = require("sequelize");
const debug = require("debug")("node-server:db");
const config = require("./config");

const sequelize = new Sequelize("un_ami_pour_la_vie", "root", "", {
  host: "localhost",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

sequelize
  .authenticate()
  .then(() => {
    console.info("Sequelize : La connexion MySQL a été établie avec succès.");
    debug("Sequelize : La connexion MySQL a été établie avec succès.");
  })
  .catch(err => {
    console.error(
      "Sequelize : Impossible de se connecter à la base de données MySQL"
    );
    console.error("Type erreur:", err.name);
    console.error("Détail:", err.parent);

    debug(
      "Sequelize - Impossible de se connecter à la base de données MySQL, debug:",
      err
    );
  });

module.exports = sequelize;
