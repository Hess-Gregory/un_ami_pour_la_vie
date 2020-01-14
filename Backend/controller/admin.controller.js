const bcrypt = require("bcrypt-nodejs");
const httpStatus = require("http-status");
const APIError = require("../helper/APIError");
const Register = require("../controller/user.controller");
const db = require("../models");
const _ = require("lodash");
const user = db.user;
const admin = db.admin;
const members = db.members;
const login = db.login;
const userandrole = db.userandrole;
const role = db.role;
const user_active = db.user_active;
const user_not_active = db.user_not_active;
const adressbook = db.adressbook;

module.exports = {
  // List all users :

  getAllUser(req, res, next) {
    return user
      .findAll({
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"]
        }
      })
      .then(users => res.json(users))
      .catch(e => next(e));
  },

  // List adress :

  getAllAdress(req, res, next) {
    return adressbook
      .findAll({
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"]
        }
      })
      .then(adressbooks => res.json(adressbooks))
      .catch(e => next(e));
  },

  // List all admins :

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

  // List all users :

  getAllUserActive(req, res, next) {
    return user_active
      .findAll({
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"]
        }
      })
      .then(usersActive => res.json(usersActive))
      .catch(e => next(e));
  },

  // List all users :

  getAllUserNotActive(req, res, next) {
    return user_not_active
      .findAll({
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"]
        }
      })
      .then(usersNotActive => res.json(usersNotActive))
      .catch(e => next(e));
  },

  // List userandrole :

  getAllUserAndRole(req, res, next) {
    return userandrole
      .findAll({
        attributes: {
          exclude: ["password", "createdAt", "updatedAt"]
        }
      })
      .then(userandroles => res.json(userandroles))
      .catch(e => next(e));
  },

  // Get one user by ID :

  getById(req, res, next) {
    return user
      .findOne({
        where: { id: req.params.id },
        attributes: { exclude: ["createdAt", "updatedAt", "password"] }
      })
      .then(uniqueUser => {
        if (!uniqueUser) {
          return res
            .status(httpStatus.NOT_FOUND)
            .send({ message: "Ce membre n'existe pas!" });
        }
        return res.json(uniqueUser);
      });
  },

  // update a user:

  updateUser(req, res, next) {
    console.log("Les données a envoyer vers MySQL : ", req.body);
    if (!req.body.username) {
      console.log("username n'existe pas");
    }

    if (req.body.username == null) {
      console.log("username est  null");
    }

    if (req.body.username == "") {
      console.log("username est vide ");
    }
    if (req.body.username == undefined) {
      console.log("username est undefined");
    }
    if (req.body.username) {
      console.log("username nexiste ");
    }

    if (req.body.username != null) {
      console.log("username est pas null");
    }

    if (req.body.username != "") {
      console.log("username est pas vide ");
    }
    if (req.body.username != undefined) {
      console.log("username est pas undefined");
    }
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
          newRegister: req.body.newRegister,
          longDesc: req.body.longDesc,
          pachMedia: req.body.pachMedia
        },
        { where: { id: req.params.id } }
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

  // Delete a user:

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

  // Add a user:
  addUser(req, res, next) {
    console.log("req.body: ", req.body);

    Register.getByEmail(req.body.email || req.body.username)
      .then(foundUser => {
        if (foundUser) {
          //console.log('Register.create().catch():', Register.create(userdata));
          return Promise.reject(
            new APIError(
              `- L'email: "${req.body.email}" \n ou \n - Le nom d'utilisateur : "${req.body.username}" \n existe déjà dans notre base de données !`,
              httpStatus.CONFLICT,
              true
            )
          );
        }
        req.body.password = Register.generatePassword(req.body.password);
        return Register.create(req.body);
      })
      .then(savedUser => {
        // const token = jwt.sign(savedUser.safeModel(), config.jwtSecret, {
        //     expiresIn: config.jwtExpiresIn,
        // });
        if (!savedUser.id) {
          return res.status(200).send({
            message: savedUser.message
          });
        } else {
          return res.status(200).send({
            message:
              "La création du nouveau membre est introduit dans la base de données.",
            id: savedUser.id,
            username: savedUser.username,
            email: savedUser.email
          });
        }
      })
      .catch(e => next(e));
  },
  // Activated a user:
  putActivateUser(req, res, next) {
    console.log("Les données a envoyer vers MySQL : ", req.body);

    return user
      .update(
        {
          isActive: req.body.isActive
        },
        { where: { id: req.params.id } }
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

  // getByEmail(email) {
  //     return admin.findOne({
  //         where: {
  //             email:email
  //         }
  //     }
  //     )

  // },

  // getById(req, res, next) {
  //     return admin.findOne({
  //         where: {
  //             id: req.params.id,
  //         },
  //         attributes:{
  //             exclude:['createdAt','updatedAt','password']
  //         }
  //     })
  //     .then((uniqueAdmin) => {
  //         if (!uniqueAdmin) {
  //         return res.status(httpStatus.NOT_FOUND).send({message:'Un tel utilisateur n\'existe pas!'})
  //         }
  //         return res.json(uniqueAdmin);
  //     })
  // },

  // update(req, res, next) {;
  //     console.log('Les données a envoyer vers MySQL : ', req.body);
  //     return admin.update({
  //             email: req.body.email,
  //             username: req.body.username,
  //             role: req.body.role,
  //             firstName: req.body.firstName,
  //             lastName: req.body.lastName
  //         },
  //         {
  //             where: {
  //                 id: req.params.id
  //             }
  //     })
  //     .then((result) => {
  //         if(result) {
  //             return res.status(200).send({message: "Mis à jour avec succés", data: req.body});
  //         }else{
  //             return res.status(httpStatus.BAD_REQUEST).send('Erreur lors de la mise à jour');
  //         }
  //     })
  //     .catch(() => {
  //         return res.status(httpStatus.NOT_FOUND).send('Utilisateur non trouvé');
  //     })
  // },

  // getByEmail(email) {
  //     return user.findOne({ where: { email:email } })
  // },
  // getById(req, res, next) {
  //     return user.findOne({
  //         where: { id: req.params.id, },
  //         attributes:{ exclude:['createdAt','updatedAt','password'] } })
  //     .then((uniqueUser) => {
  //         if (!uniqueUser) {
  //         return res.status(httpStatus.NOT_FOUND).send({message:'Un tel utilisateur n\'existe pas!'})
  //         }
  //         return res.json(uniqueUser);
  //     })
  // },
  // register(req, res, next) {
  //     getByEmail(req.body.email)
  //         .then((foundUser) => {
  //             if (foundUser) {
  //                 return Promise.reject(new APIError('Un membre avec la méme adresse mail existe déjà', httpStatus.CONFLICT, true));
  //             }
  //             return Register.create(req.body);
  //         })
  //         .then((savedUser) => {
  //             if(!savedUser.id){
  //                 return res.status(200).send({  message: savedUser.message });
  //             }else {
  //                 return res.status(200).send({
  //                     id: savedUser.id,
  //                     username: savedUser.username,
  //                     email: savedUser.email
  //                 });
  //             }
  //         })
  //         .catch(e => next(e));
  // },
  // create(userdata) {
  //     console.log('Les données suivantes sont envoyé vers MySQL pour la création d\'un nouveau membre: ', userdata);
  //     return user.create({
  //         firstName: userdata.firstName,
  //         lastName: userdata.lastName,
  //         username: userdata.username,
  //         email: userdata.email,
  //         password: userdata.password,
  //         isActive: userdata.isActive,
  //         role: userdata.role,
  //         asbl: userdata.asbl,
  //         firstName: userdata.firstName,
  //         lastName: userdata.lastName,
  //         birthday: userdata.birthday,
  //         sexGenre: userdata.sexGenre,
  //         adressbook: userdata.adressbook,
  //         adPvStreet: userdata.adPvStreet,
  //         adPvNum: userdata.adPvNum,
  //         adPvZip: userdata.adPvZip,
  //         adPvCity: userdata.adPvCity,
  //         adPvCountry: userdata.adPvCountry,
  //         firm: userdata.firm,
  //         tva: userdata.tva,
  //         adProStreet: userdata.adProStreet,
  //         adProNum: userdata.adProNum,
  //         adProZip: userdata.adProZip,
  //         adProCity: userdata.adProCity,
  //         adProCountry: userdata.adProCountry,
  //         contPhonePro: userdata.contPhonePro,
  //         contPhonePv: userdata.contPhonePv,
  //         contPhoneGsm: userdata.contPhoneGsm,
  //         contFacebook: userdata.contFacebook,
  //         contWebsite: userdata.contWebsite,
  //         shortDesc: userdata.shortDesc,
  //         longDesc: userdata.longDesc,
  //         pachMedia:  userdata.pachMedia
  //     })
  //     .then((savedUser) => {return savedUser;})
  //     .catch((error) => {
  //     console.log('Erreur : status "',httpStatus.BAD_REQUEST,'" - Quelque chose ne va pas dans l\'inscription, vérifiez ceci: ', userEdit);
  //     return res.status(httpStatus.BAD_REQUEST).send('Something wrong in Registration');
  //     })
  // },

  // add(req, res, next) {
  //     console.log("getByEmail: ", req.body);

  //     Register.getByEmail(req.body.email)
  //         .then((foundUser) => {
  //             if (foundUser) {
  //                 return Promise.reject(new APIError('L\'email doit être unique', httpStatus.CONFLICT, true));

  //             }
  //             req.body.password = Register.generatePassword(req.body.password);
  //             console.log('req.body:', req.body);
  //             return Register.create(req.body);
  //         })
  //         .then((savedUser) => {
  //             // const token = jwt.sign(savedUser.safeModel(), config.jwtSecret, {
  //             //     expiresIn: config.jwtExpiresIn,
  //             // });
  //             if(!savedUser.id){
  //                 return res.status(200).send({
  //                     message: savedUser.message,
  //                 });
  //             }else {
  //                 return res.status(200).send({
  //                     // token: token,
  //                     id: savedUser.id,
  //                     username: savedUser.username,
  //                     email: savedUser.email,
  //                 });
  //             }
  //         })
  //         .catch(e => next(e));
  // },

  // getByEmail(email) {
  //     return admin.findOne({
  //         where: {
  //             email:email
  //         }
  //     }
  //     )

  // },
};
