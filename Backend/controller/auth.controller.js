const jwt = require("jsonwebtoken");
const httpStatus = require("http-status");
const APIError = require("../helper/APIError");
const config = require("../config");
const Login = require("../controller/login.controller");
const Register = require("../controller/user.controller");

module.exports = {
  /**
   * Envoyez le token et les détails de l'utilisateur si l'adresse e-mail et le mot de passe sont valides.
   * @property req.body.email = L'email de l'utilisateur.
   * @property res.body.password = le mot de passe de l'utilisateur.
   * @returns token et l'utilisateur.
   */
  login(req, res, next) {
    //console.log(User.generatePassword(req.body.password));

    Login.getByEmail(req.body.email)
      .then(foundUser => {
        if (!foundUser) {
          const err = new APIError(
            "Utilisateur non trouvé ou compte inactif",
            httpStatus.UNAUTHORIZED,
            true
          );
          return next(err);
        }
        if (!foundUser.validPassword(req.body.password)) {
          const err = new APIError(
            "Mot de passe incorrect",
            httpStatus.UNAUTHORIZED,
            true
          );
          return next(err);
        }

        const token = jwt.sign(foundUser.safeModel(), config.jwtSecret, {
          expiresIn: config.jwtExpiresIn
        });
        return res.json({
          token,
          user: foundUser.safeModel()
        });
      })
      .catch(err => next(new APIError(err.message, httpStatus.NOT_FOUND)));
  },
  // deleteValueIfNull(req, res next) {

  // }

  register(req, res, next) {
    console.log("req.body: ", req.body);

    Register.getByEmail(req.body.email || req.body.username)
      .then(foundUser => {
        if (foundUser) {
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
          console.log("message: savedUser:", savedUser);
          console.log("message: savedUser.message:", savedUser.message);
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
  }
};
