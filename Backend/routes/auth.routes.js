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
                    firstName: Joi.string().required(),
                    lastName: Joi.string().required(),
                    username: Joi.string().required(),
                    email: Joi.string().email().required(),
                    password: Joi.string().required(),
                    isActive:  Joi.number().min(0).max(1).required(),
                    role: Joi.number().min(1).max(6).required()
                }  
            }
        }  
// POST /api/auth/register S'inscrire dans le système.
router.route('/register')
    .post(validate(paramValidation.registerUser), authController.register);
// // POST /api/auth/register S'inscrire dans le système.
// router.route('/register')
//     .post(validate(paramValidation.registerUser), authController.register);        
// POST /api/auth/login Pour connecter au système.
router.route('/login')
    .post(validate(paramValidation.login), authController.login);

    

module.exports = router;