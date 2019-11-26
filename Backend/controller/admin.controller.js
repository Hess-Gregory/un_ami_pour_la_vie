const db = require('../models');
const admin = db.admin;
const bcrypt = require('bcrypt-nodejs');
const httpStatus = require('http-status');
const APIError = require('../helper/APIError');
const _ = require('lodash');

module.exports = {
    getByEmail(email) { 
        return admin.findOne({
            where: {
                email:email
            } 
        }
        )
        
    },
    getAll(req, res, next) {
        return admin.findAll({
            attributes:{
                exclude: ['password','createdAt', 'updatedAt']
            }
        })
        .then(admins => res.json(admins) ) 
        .catch(e => next(e),); 
        console.log(admin.findAll());
    },



    getById(req, res, next) {
        return admin.findOne({
            where: {
                id: req.params.id,
            },
            attributes:{
                exclude:['createdAt','updatedAt','password']
            }
        })
        .then((uniqueAdmin) => {
            if (!uniqueAdmin) {
            return res.status(httpStatus.NOT_FOUND).send({message:'Un tel utilisateur n\'existe pas!'})
            }
            return res.json(uniqueAdmin);
        })
    },

    update(req, res, next) {;
        console.log('Les données a envoyer vers MySQL : ', req.body);
        return admin.update({
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
        })
        .then((result) => {
            if(result) {
                return res.status(200).send({message: "Mis à jour avec succés", data: req.body});
            }else{
                return res.status(httpStatus.BAD_REQUEST).send('Erreur lors de la mise à jour');
            }
        })
        .catch(() => {
            return res.status(httpStatus.NOT_FOUND).send('Utilisateur non trouvé');
        })
    },



}