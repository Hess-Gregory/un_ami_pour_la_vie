"use strict";
const _ = require("lodash");
const auth = require("basic-auth");
const bodyParser = require("body-parser");
const cors = require("cors");
const crypto = require("crypto");
const express = require("express");
const expressJwt = require("express-jwt");
const expressValidation = require("express-validation");
const helmet = require("helmet");
const http = require("http");
const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const logger = require("morgan");
const methodOverride = require("method-override");
const Sequelize = require("sequelize");
const multer = require("multer");
const fileUpload = require("express-fileupload");
const util = require("util");
// const appRoot = require('app-root-path');
const app = express();
const server = http.createServer(app);

const config = require("./config");
const routes = require("./routes/routes");
const APIError = require("./helper/APIError");

if (config.env === "development") {
  console.log("Serveur tourne en mode: ", config.env);

  app.use(logger("dev"));
}
global.appRoot = __dirname;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(helmet());
app.use(methodOverride());
app.use(cors());
app.use(fileUpload());

app.use("/api", routes);

app.use((err, req, res, next) => {
  if (err instanceof expressValidation.ValidationError) {
    // erreur de validation contient des erreurs qui est un tableau d'erreur contenant chaque message[]
    const unifiedErrorMessage = err.errors
      .map(error => error.messages.join(". "))
      .join(" and ");
    const error = new APIError(unifiedErrorMessage, err.status, true);
    return next(error);
  } else if (!(err instanceof APIError)) {
    const apiError = new APIError(
      err.message,
      err.status,
      err.name === "UnauthorizedError" ? true : err.isPublic
    );
    return next(apiError);
  }
  return next(err);
});

app.use((req, res, next) => {
  const err = new APIError(
    "ERREUR 404 : Oh Zut Alors !  Le serveur n'a trouvée aucune ressource à l'adresse demandée.",
    httpStatus.NOT_FOUND,
    true
  );
  return next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status).json({
    message: err.isPublic ? err.message : httpStatus[err.status]
  });
});

const PORT = 4000;
app.listen(PORT, () => {
  console.log(
    "La magie se passe sur le port : ",
    PORT,
    " ! Nous sommes maintenant tous condamnés!"
  );
});

module.exports = server;
