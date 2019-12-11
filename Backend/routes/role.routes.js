const express = require('express');
const validate = require('express-validation');
const Joi = require('joi');
const roleController = require('../controller/role.controller');

const router = express.Router();

const paramValidation = {
    updateRole: {
        body: {

            roleName: Joi.string()
        },
        params: {
            idROLE: Joi.string().required()
        },
    },
    getRole:{
        params: {
            idROLE: Joi.number().integer().required()
        },
    }
};

router.route('/')
// GET /api/usrs/status/. all the status.
    .get(roleController.getAll);

router.route('/:idROLE')
// GET /api/users/status/:userId. only status from user.
    .get(validate(paramValidation.getRole),roleController.getById)
    .put(validate(paramValidation.updateRole), roleController.update)
    .delete(validate(paramValidation.getRole), roleController.deleteRole);
  
module.exports = router;