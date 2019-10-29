const express = require('express');
const validate = require('express-validation');
const Joi = require('joi');
const authController = require('../controller/auth.controller');


const router = express.Router();


const paramValidation = {
    login: {
        body: {
            email: Joi.string().email().required(),
            password: Joi.string().required(),
        }
    },
 
    registerUser: {
        body: {
            username: Joi.string().required(),
            email: Joi.string().email().required(),
            password: Joi.string().required(),
            role: Joi.number().integer().min(1).max(6).required(),
            isActive: Joi.number().integer().min(0).max(1).required(),
        }
        
        
    }
}


router.route('/login')
// POST /api/auth/login Pour connecter au système.
    .post(validate(paramValidation.login), authController.login);

router.route('/register')
// POST /api/auth/register S'inscrire dans le système.
    .post(validate(paramValidation.registerUser), authController.register);

  

module.exports = router;