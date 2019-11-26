const jwt = require('jsonwebtoken');
const httpStatus = require('http-status');
const APIError = require('../helper/APIError');
const config = require('../config');
const User = require('../controller/user.controller');

module.exports = {

    /**
     * Envoyez le token et les détails de l'utilisateur si l'adresse e-mail et le mot de passe sont valides.
     * @property req.body.email = L'email de l'utilisateur.
     * @property res.body.password = le mot de passe de l'utilisateur.
     * @returns token et l'utilisateur.
     */
    login(req, res, next) { 
    //console.log(User.generatePassword(req.body.password));

        User.getByEmail(req.body.email)
            .then((foundUser) => {

                if (!foundUser) { 
                    const err = new APIError('Utilisateur non trouvé ou compte inactif', httpStatus.UNAUTHORIZED, true);
                    return next(err);
                }
                if (!foundUser.validPassword(req.body.password)) { 
                    const err = new APIError('Mot de passe incorrect', httpStatus.UNAUTHORIZED, true);
                    return next(err);
                }

                const token = jwt.sign(foundUser.safeModel(), config.jwtSecret, {
                    expiresIn: config.jwtExpiresIn,
                });
                return res.json({
                    token,
                    user: foundUser.safeModel()
                })
            })
            .catch(err => next(new APIError( err.message, httpStatus.NOT_FOUND)));
    },

    register(req, res, next) {
        console.log("getByEmail: ", req.body);       

        User.getByEmail(req.body.email)
            .then((foundUser) => {
                if (foundUser) {
                    return Promise.reject(new APIError('L\'email doit être unique', httpStatus.CONFLICT, true));
                  
                }
                req.body.password = User.generatePassword(req.body.password);
                return User.create(req.body);  
            })
            .then((savedUser) => {
                const token = jwt.sign(savedUser.safeModel(), config.jwtSecret, {
                    expiresIn: config.jwtExpiresIn,
                });
                if(!savedUser.id){
                    return res.status(200).send({
                        message: savedUser.message,
                    });
                }else {
                    return res.status(200).send({
                        token: token,
                        id: savedUser.id,
                        username: savedUser.username,
                        email: savedUser.email,
                    });
                }
            })
            .catch(e => next(e));
    }
};