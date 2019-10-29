const db = require('../models');
const user = db.connect_jwt;
const bcrypt = require('bcrypt-nodejs');
const httpStatus = require('http-status');
const APIError = require('../helper/APIError');
const _ = require('lodash');

module.exports = {
    getByEmail(email) {
        return user.findOne({
            where: {
                email:email,
            }
        })
    },

    getAll(req, res, next) {
        return user.findAll({
            attributes:{
                exclude: ['password','createdAt', 'updatedAt']
            }
        })
        .then(users => res.json(users))
        .catch(e => next(e));
    },

    getProfile(req, res, next) {
        const id = res.locals.session.id;
        return user.findOne({
            where: {
                id: id,
            },
            attributes:{
                exclude: ['password','createdAt', 'updatedAt']
            }
        })
        .then((uniqueUser) => {
            if (uniqueUser) {
                return res.json(uniqueUser);
            }
            return res.status(httpStatus.NOT_FOUND).send({message:'Un tel utilisateur n\'existe pas!'})
        })
    },

    getById(req, res, next) {
        return user.findOne({
            where: {
                id: req.params.id,
            },
            attributes:{
                exclude:['createdAt','updatedAt','password']
            }
        })
        .then((uniqueUser) => {
            if (!uniqueUser) {
            return res.status(httpStatus.NOT_FOUND).send({message:'Un tel utilisateur n\'existe pas!'})
            }
            return res.json(uniqueUser);
        })
    },

    update(req, res, next) {
        return user.update({
                email: req.body.email,
                username: req.body.username,
                password: req.body.password,
                isActive: req.body.isActive  ,
                role: req.body.role,
                asbl: req.body.asbl,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                birthday: req.body.birthday,
                sexGenre: req.body.sexGenre,
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
                longDesc: req.body.longDesc
            },
            {
                where: {
                    id: req.params.id
                }
        })
        .then((result) => {
            if(result) {
                return res.status(200).send({message: "Mis à jour avec succés", data: result});
            }else{
                return res.status(httpStatus.BAD_REQUEST).send('Erreur lors de la mise à jour');
            }
        })
        .catch(() => {
            return res.status(httpStatus.NOT_FOUND).send('Utilisateur non trouvé');
        })
    },

    deleteUser(req, res, next) {
        return user.destroy({
            where: {
                id: req.params.id,
            }
        })
        .then((result) => {
            return res.status(200).send({message:'Utilisateur supprimé'});
        })
        .catch(() => {
            return res.status(httpStatus.NOT_FOUND).send('UUtilisateur non trouvé');
        })
    },

    generatePassword(password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    },

    create(userdata) {
        return user.create({
            username: userdata.username,
            email: userdata.email,
            password: userdata.password,
            role: 5,
            isActive: 0
        })
        .then((savedUser) => {
                return savedUser;
        })
        .catch((error) => {
            return res.status(httpStatus.BAD_REQUEST).send('Quelque chose ne va pas dans l\'inscription');
        })
    }

}