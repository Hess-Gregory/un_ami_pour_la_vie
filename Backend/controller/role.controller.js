const db = require("../models");
const role = db.role;
const httpStatus = require("http-status");

module.exports = {
  getByRole(roleName) {
    return role.findOne({
      where: {
        roleName: roleName
      }
    });
  },
  getById(req, res, next) {
    return role
      .findOne({
        where: {
          idROLE: req.params.idROLE
        }
      })
      .then(uniquerole => {
        if (!uniquerole) {
          return res
            .status(httpStatus.NOT_FOUND)
            .send({ message: "Un tel role n'existe pas!" });
        }
        return res.json(uniquerole);
      });
  },

  getAll(req, res, next) {
    return role
      .findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        }
      })
      .then(roles => res.json(roles))
      .catch(e => next(e));
  },

  deleteRole(req, res, next) {
    return role
      .destroy({
        where: {
          idROLE: req.params.idROLE
        }
      })
      .then(result => {
        return res.status(200).send({ message: "Role supprimé" });
      })
      .catch(() => {
        return res.status(httpStatus.NOT_FOUND).send("Role non trouvé");
      });
  },

  create(roledata) {
    console.log("Les données suivante sont a envoyer vers MySQL : ", roledata);
    return role
      .create({
        roleName: userdata.roleName
      })

      .then(savedRole => {
        console.log("Le nouveau role est inscrit : ", savedRole);
        return savedRole;
      })
      .catch(error => {
        console.log(
          'Erreur : status "',
          httpStatus.BAD_REQUEST,
          '" - Quelque chose ne va pas dans la création du role'
        );
        return res
          .status(httpStatus.BAD_REQUEST)
          .send("Something wrong in New role");
      });
  },

  update(req, res, next) {
    console.log("Les données a envoyer vers MySQL : ", req.body);
    return role
      .update(
        {
          roleName: req.body.roleName
        },
        {
          where: {
            idROLE: req.params.idROLE
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
