const express = require('express');
const validate = require('express-validation');
const Joi = require('joi');
const userController = require('../controller/user.controller');

const router = express.Router();

const paramValidation = {
    updateUser: {
        body: {
            email: Joi.string().email(),
            username: Joi.string(),
            password: Joi.string(),
            isActive: Joi.number(),
            role: Joi.string(),
            asbl: Joi.string(),
            firstName: Joi.string(),
            lastName: Joi.string(),
            birthday: Joi.date(),
            sexGenre: Joi.string(),
            adPvStreet: Joi.string(),
            adPvNum: Joi.string(),
            adPvZip: Joi.number(),
            adPvCity: Joi.string(),
            adPvCountry: Joi.string(),
            firm: Joi.string(),
            tva: Joi.string(),
            adProStreet: Joi.string(),
            adProNum: Joi.string(),
            adProZip: Joi.number(),
            adProCity: Joi.string(),
            adProCountry: Joi.string(),
            contPhonePro: Joi.string(),
            contPhonePv: Joi.string(),
            contPhoneGsm: Joi.string(),
            contFacebook: Joi.string(),
            contWebsite: Joi.string(),
            shortDesc: Joi.string(),
            longDesc: Joi.string(),
        },
        params: {
            id: Joi.string().required(),
        },
    },
    getUser:{
        params: {
            id: Joi.number().integer().required(),
        },
    }
};

router.route('/')
// GET /api/users. all the users.
    .get(userController.getAll);

router.route('/profile')
// GET /api/users/profile. all the users.
    .get(userController.getProfile);

router.route('/:id')
// GET /api/users/:userId. all the users.
    .get(validate(paramValidation.getUser),userController.getById)
    .put(validate(paramValidation.updateUser), userController.update)
    .delete(validate(paramValidation.getUser), userController.deleteUser);

module.exports = router;