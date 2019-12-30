const db = require("../models");
const members = db.members;
const bcrypt = require("bcrypt-nodejs");
const httpStatus = require("http-status");
const APIError = require("../helper/APIError");
const _ = require("lodash");

module.exports = {
  getByEmail(email) {
    return members.findOne({
      where: {
        email: email
      }
    });
  },
  getAll(req, res, next) {
    return members
      .findAll({
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"]
        }
      })
      .then(memberss => res.json(memberss))
      .catch(e => next(e));
    console.log(members.findAll());
  },

  getById(req, res, next) {
    return members
      .findOne({
        where: {
          id: req.params.id
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"]
        }
      })
      .then(uniquemembers => {
        if (!uniquemembers) {
          return res
            .status(httpStatus.NOT_FOUND)
            .send({ message: "Un tel utilisateur n'existe pas!" });
        }
        return res.json(uniquemembers);
      });
  },

  update(req, res, next) {
    console.log("Les données a envoyer vers MySQL : ", req.body);
    return members
      .update(
        {
          email: req.body.email,
          username: req.body.username,
          role: req.body.role,
          firstName: req.body.firstName,
          lastName: req.body.lastName
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(result => {
        if (result) {
          return res
            .status(200)
            .send({ message: "Mis à jour avec succés", data: req.body });
        } else {
          return res
            .status(httpStatus.BAD_REQUEST)
            .send("Erreur lors de la mise à jour");
        }
      })
      .catch(() => {
        return res.status(httpStatus.NOT_FOUND).send("Utilisateur non trouvé");
      });
  }
};
