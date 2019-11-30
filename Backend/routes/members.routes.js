const express = require('express');
const validate = require('express-validation');
const Joi = require('joi');
const membersController = require('../controller/members.controller');

const router = express.Router();

const paramValidation = {

    getUser:{
        params: {
            id: Joi.number().integer().required(),
        },
    }
};

router.route('/')
// GET /api/usrs/status/. all the status.
    .get(membersController.getAll);

router.route('/:id')
// GET /api/users/status/:userId. only status from user.
    .get(validate(paramValidation.getUser),membersController.getById);
 
module.exports = router;