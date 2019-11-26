const express = require('express');
const validate = require('express-validation');
const Joi = require('joi');
const adminController = require('../controller/admin.controller');

const router = express.Router();

const paramValidation = {
    updateadmin: {
        body: {
            email: Joi.string().email(),
            username: Joi.string(),  
            role: Joi.string(),
            firstName: Joi.string(),
            lastName: Joi.string(),
        },
        params: {
            id: Joi.string().required(),
        },
    },
    getadmin:{
        params: {
            id: Joi.number().integer().required(),
        },
    }
};

router.route('/')
// GET /api/admins. all the admins.
    .get(adminController.getAll);

// router.route('/profile')
// // GET /api/admins/profile. all the admins.
//     .get(adminController.getProfile);

// router.route('/:id')
// // GET /api/admins/:adminId. all the admins.
//     .get(validate(paramValidation.getadmin),adminController.getById)
//     .put(validate(paramValidation.updateadmin), adminController.update)
//     .delete(validate(paramValidation.getadmin), adminController.deleteadmin);

module.exports = router;