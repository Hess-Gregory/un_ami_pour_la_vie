const db = require("../models");
const user = db.user;
const admin = db.admin;
//const userEdit = db.user_details;
//const user = db.connect_jwt; //Lecture des noms de role
const bcrypt = require("bcrypt-nodejs");
const httpStatus = require("http-status");
const APIError = require("../helper/APIError");
const _ = require("lodash");

module.exports = {
  getByEmail(email) {
    return user.findOne({
      where: {
        email: email,
        isActive: 1
      }
    });
  },

  getAll(req, res, next) {
    return user
      .findAll({
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"]
        }
      })
      .then(users => res.json(users))
      .catch(e => next(e));
  },

  getAllAdmin(req, res, next) {
    return admin
      .findAll({
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"]
        }
      })
      .then(admins => res.json(admins))
      .catch(e => next(e));
  },

  getProfile(req, res, next) {
    const id = res.locals.session.id;
    return user
      .findOne({
        where: {
          id: id
        },
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"]
        }
      })
      .then(uniqueUser => {
        if (uniqueUser) {
          return res.json(uniqueUser);
        }
        return res
          .status(httpStatus.NOT_FOUND)
          .send({ message: "Un tel utilisateur n'existe pas!" });
      });
  },

  getById(req, res, next) {
    return user
      .findOne({
        where: {
          id: req.params.id
        },
        attributes: {
          exclude: ["createdAt", "updatedAt", "password"]
        }
      })
      .then(uniqueUser => {
        if (!uniqueUser) {
          return res
            .status(httpStatus.NOT_FOUND)
            .send({ message: "Un tel utilisateur n'existe pas!" });
        }
        return res.json(uniqueUser);
      });
  },

  update(req, res, next) {
    //console.log('Les données a envoyer vers MySQL : ', req.body);
    return user
      .update(
        {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          username: req.body.username,
          email: req.body.email,
          //password: User.generatePassword(req.body.password),
          isActive: req.body.isActive,
          role: req.body.role,
          asbl: req.body.asbl,
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          birthday: req.body.birthday,
          sexGenre: req.body.sexGenre,
          adressbook: req.body.adressbook,
          adPvStreet: req.body.adPvStreet,
          adPvNum: req.body.adPvNum,
          adPvZip: req.body.adPvZip,
          adPvCity: req.body.adPvCity,
          adPvCountry: req.body.adPvCountry,
          firm: req.body.firm,
          tva: req.body.tva,
          adProStreet: req.body.adProStreet,
          adProNum: req.body.adProNum,
          adProZip: req.body.adProZip,
          adProCity: req.body.adProCity,
          adProCountry: req.body.adProCountry,
          contPhonePro: req.body.contPhonePro,
          contPhonePv: req.body.contPhonePv,
          contPhoneGsm: req.body.contPhoneGsm,
          contFacebook: req.body.contFacebook,
          contWebsite: req.body.contWebsite,
          shortDesc: req.body.shortDesc,
          longDesc: req.body.longDesc,
          pachMedia: req.body.pachMedia
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
  },

  deleteUser(req, res, next) {
    return user.findOne({ where: { id: req.params.id } }).then(uniqueUser => {
      if (!uniqueUser) {
        return res
          .status(httpStatus.NOT_FOUND)
          .send({ message: "Utilisateur non trouvé !" });
      }
      return user
        .destroy({ where: { id: req.params.id } })
        .then(result => {
          return res.status(200).send({ message: "Utilisateur supprimé" });
        })
        .catch(() => {
          return res.status(httpStatus.NOT_FOUND).send("Zut un problème !");
        });
    });
  },

  generatePassword(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
  },

  create(userdata) {
    // console.log("userdata: ", userdata);
    // console.log('Les données suivantes sont envoyé vers MySQL pour la création d\'un nouveau membre ');
    return (
      user
        .create({
          firstName: userdata.firstName,
          lastName: userdata.lastName,
          username: userdata.username,
          email: userdata.email,
          password: userdata.password,
          isActive: userdata.isActive,
          role: userdata.role,
          asbl: userdata.asbl,
          firstName: userdata.firstName,
          lastName: userdata.lastName,
          birthday: userdata.birthday,
          sexGenre: userdata.sexGenre,
          adressbook: userdata.adressbook,
          adPvStreet: userdata.adPvStreet,
          adPvNum: userdata.adPvNum,
          adPvZip: userdata.adPvZip,
          adPvCity: userdata.adPvCity,
          adPvCountry: userdata.adPvCountry,
          firm: userdata.firm,
          tva: userdata.tva,
          adProStreet: userdata.adProStreet,
          adProNum: userdata.adProNum,
          adProZip: userdata.adProZip,
          adProCity: userdata.adProCity,
          adProCountry: userdata.adProCountry,
          contPhonePro: userdata.contPhonePro,
          contPhonePv: userdata.contPhonePv,
          contPhoneGsm: userdata.contPhoneGsm,
          contFacebook: userdata.contFacebook,
          contWebsite: userdata.contWebsite,
          shortDesc: userdata.shortDesc,
          longDesc: userdata.longDesc,
          pachMedia: userdata.pachMedia
        })
        //     .then((userdata) => {
        //         res.status(200).send({database:'L\'inscription est OK'});
        // })
        .then(savedUser => {
          return savedUser;
        })

        .catch(error => {
          // `- L'email: "${req.body.email}
          // "',httpStatus.BAD_REQUEST,'" - Quelque chose ne va pas dans l\'inscription, vérifiez ceci: ', userEdit);

          //console.log('Erreur :', error);
          console.log("Erreur :", error.parent.sqlMessage);
          //console.log('Erreur :', error);
          console.log("Type erreur :", httpStatus.BAD_REQUEST);
          // console.log('Quelque chose ne va pas dans l\'inscription, vérifiez ceci :', userEdit);
          return res
            .status(httpStatus.BAD_REQUEST)
            .send("Something wrong in Registration");
        })
    );
  }
};
