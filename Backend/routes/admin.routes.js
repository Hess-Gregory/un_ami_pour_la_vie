const express = require("express");
const validate = require("express-validation");
const Joi = require("joi");
const adminController = require("../controller/admin.controller");
const expressJWT = require("express-jwt");
const config = require("../config/index");

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
      id: Joi.number().integer()
    }
  }
};
router.use(expressJWT({ secret: config.jwtSecret }));
router.use((req, res, next) => {
  const authorization = req.header("Authorization");
  if (authorization === undefined) {
    next();
  } else {
    res.locals.session = JSON.parse(
      Buffer.from(
        authorization.split(" ")[1].split(".")[1],
        "base64"
      ).toString()
    );

    if (res.locals.session.role >= 1) {
    }

    if (res.locals.session.role >= 2) {
    }

    if (res.locals.session.role >= 3) {
    }

    if (res.locals.session.role >= 4) {
      router.route("/adressbook").get(adminController.getAllAdress); // GET /api/admins/user
      router.route("/adminlist").get(adminController.getAllAdmin); // GET /api/admins/adminlist2
      router.route("/userandrole").get(adminController.getAllUserAndRole); // GET /api/admins/user
      router
        .route("/user/:id")
        .get(validate(paramValidation.getUser), adminController.getById); // GET /api/admins/user/activate/:id
      router.route("/user/activate/:id").put(adminController.putActivateUser); // GET /api/admins/user/activate/:id
    }

    if (res.locals.session.role >= 5) {
    }

    if (res.locals.session.role >= 6) {
      router.route("/user").get(adminController.getAllUser); // GET /api/admins/user
      router
        .route("/user/:id")
        .get(validate(paramValidation.getUser), adminController.getById) // GET /api/admins/user/activate/:id
        .put(validate(paramValidation.updateUser), adminController.updateUser); // PUT /api/admins/user/:id
      router.route("/list_users_active").get(adminController.getAllUserActive); // GET /api/admins/user
      router
        .route("/list_users_not_active")
        .get(adminController.getAllUserNotActive); // GET /api/admins/user
      router.route("/user/activate/:id").put(adminController.putActivateUser); // GET /api/admins/user/activate/:id
    }

    if (res.locals.session.role >= 7) {
      router.route("/user/add").post(adminController.addUser); // POST /api/admins/user/add
      router
        .route("/user/:id")
        .delete(validate(paramValidation.getUser), adminController.deleteUser); // DELETE /api/admins/user/:id
    }

    next();
  }
});

module.exports = router;
