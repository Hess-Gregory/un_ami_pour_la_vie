const fs = require("fs");
const db = require("../models");
const pictureUser = db.pictureUser;
const httpStatus = require("http-status");
var path = require("path");

module.exports = {
  getAllUserPicture(req, res) {
    return pictureUser
      .findAll({
        raw: true,
        attributes: { exclude: ["createdAt", "updatedAt", "password"] }
      })
      .then(result => res.json(result))
      .catch(e => next(e));
  },

  getByIdAllPicture(req, res) {
    return pictureUser
      .findAll({
        where: {
          id_user: req.params.id
        },
        raw: true,
        attributes: { exclude: ["createdAt", "updatedAt", "password"] }
      })
      .then(uniqueUser => {
        if (!uniqueUser) {
          return res.status(httpStatus.NOT_FOUND).send({
            message:
              "Aucune image dans la base de donnée pour cet utilisateur !"
          });
        }
        return res.json(uniqueUser);
      });
  },

  getByIdActivePicture(req, res) {
    return pictureUser
      .findAll({
        where: { id_user: req.params.id, active: 1 },
        raw: true,
        attributes: { exclude: ["createdAt", "updatedAt", "password"] }
      })
      .then(uniqueUser => {
        if (!uniqueUser) {
          return res.status(httpStatus.NOT_FOUND).send({
            message:
              "Aucune image active dans la base de donnée pour cet utilisateur !"
          });
        }
        return res.json(uniqueUser);
      });
  },

  enableByIdPicture(req, res, next) {
    return pictureUser
      .update({ active: 1 }, { where: { id: req.params.id, active: 0 } })
      .then(result => {
        if (result) {
          return res
            .status(200)
            .send({ message: "image activé", data: req.body });
        } else {
          return res
            .status(httpStatus.BAD_REQUEST)
            .send("Erreur lors de la mise à jour");
        }
      })
      .catch(() => {
        return res.status(httpStatus.NOT_FOUND).send("Utilisateur non trouvé");
      });
  },

  disableByIdPicture(req, res, next) {
    return pictureUser
      .update({ active: 0 }, { where: { id_user: req.params.id, active: 1 } })
      .then(result => {
        if (result) {
          return res
            .status(200)
            .send({ message: "image desactivé", data: req.body });
        } else {
          return res
            .status(httpStatus.BAD_REQUEST)
            .send("Erreur lors de la mise à jour");
        }
      })
      .catch(() => {
        return res.status(httpStatus.NOT_FOUND).send("Utilisateur non trouvé");
      });
  },

  addUserPicture(req, res) {
    console.log("test 1");
    console.log("global.appRoot + /uploads/", global.appRoot + "/uploads/");
    const file = global.appRoot + "/uploads/" + req.file.filename;
    console.log("test 2");
    fs.rename(req.file.path, file, function(err) {
      console.log("test 3");
      if (err) {
        console.log("test 4");
        console.log(err);
        res.send(500);
      } else {
        console.log("test 5");
        return pictureUser
          .create({
            id_user: req.body.id,
            poster: req.file.filename
          })
          .then(r => {
            res.send(r.get({ plain: true }));
          });
      }
    });
  }
};
