const express = require("express");
const validate = require("express-validation");
const userController = require("../controller/user.controller");
const Joi = require("joi");

const router = express.Router();

const paramValidation = {
  updateUser: {
    body: {},
    params: {
      id: Joi.string().required()
    }
  },
  getUser: {
    params: {
      id: Joi.number()
        .integer()
        .required()
    }
  }
};
router.route("/").get(userController.getAll);
// GET /api/users. all the users.
// router.route('/admins')
// // GET /api/users/admins. all the users.
//     .get(userController.getAllAdmin);

// router.route('/profile')
// // GET /api/users/profile. all the users.
//     .get(userController.getProfile);

// router.route('image/:id')
// // GET /api/users/:userId. all the users.
//     .get(validate(paramValidation.getUser),userController.getImageById)
//     .put(validate(paramValidation.updateUser), userController.updateImage)
//     .delete(validate(paramValidation.getUser), userController.deleteImageUser);

router
  .route("/:id")
  // GET /api/users/:userId. all the users.
  .get(validate(paramValidation.getUser), userController.getById)
  .put(validate(paramValidation.updateUser), userController.update)
  .delete(validate(paramValidation.getUser), userController.deleteUser);

module.exports = router;
