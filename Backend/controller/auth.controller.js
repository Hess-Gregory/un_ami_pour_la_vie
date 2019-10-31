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
    //console.log(User.getByEmail(req.body.token));
    
        User.getByEmail(req.body.email)
            .then((foundUser) => {
                if (!foundUser) { 
                    console.log("Un utilisateur tente de se connecter avec l'email : \"",req.body.email , "\" mais celui-ci n'existe pas !" );
                    const err = new APIError('Utilisateur non trouvé !', httpStatus.UNAUTHORIZED, true);
                    return next(err);
                }
                if (!foundUser.validPassword(req.body.password)) { 
                    console.log("Un utilisateur tente de se connecter avec l'email : \"",req.body.email , "\" mais son mot de passe n'est pas valable !" );
                    const err = new APIError('Mot de passe incorrect !', httpStatus.UNAUTHORIZED, true);
                    return next(err);
                }
                const token = jwt.sign(foundUser.safeModel(), config.jwtSecret,
                console.log("L'utilisateur: ",foundUser.safeModel() , " s'est identifié avec sucés !" ),
                 {
                    expiresIn: config.jwtExpiresIn,
                });
                return res.json({
                    Msg: "Vous étes connecté avec succès !",
                    token,
                    utilisateur: foundUser.safeModel()
                })
            })
            .catch(err => next(new APIError( err.message, httpStatus.NOT_FOUND)));
    },

    register(req, res, next) {
        console.log("fichier auth.controller ligne 39, req.body.email: ", req.body.email); 
        console.log("fichier auth.controller ligne 40, req.body.password: ", req.body.password);
        console.log("fichier auth.controller ligne 41, req.body.username: ", req.body.username);   
        console.log("fichier auth.controller ligne 42, req.body.role: ", req.body.role);  
        console.log("fichier auth.controller ligne 43, req.body.isActive: ", req.body.isActive);       

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