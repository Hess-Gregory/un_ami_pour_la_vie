const express = require("express");
const expressJWT = require("express-jwt");
const config = require("../config/index");
const userRoutes = require("../routes/user.routes");
const adminRoutes = require("../routes/admin.routes");
const membersRoutes = require("../routes/members.routes");
const roleRoutes = require("../routes/role.routes");
const authRoutes = require("../routes/auth.routes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger/swagger");
const userController = require("../controller/user.controller");

// Tous les itinéraires sont définis ici.
const router = express.Router();

router.get("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use("/api-paths", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use("/auth", authRoutes);

//valider toutes les API avec le token jwt. (a commenter en cas de probléme de token)
router.use(expressJWT({ secret: config.jwtSecret }));

//router.use('/users', userRoutes);
// Si jwt est valide, stocker les données de l'utilisateur dans une session locale.
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
    const current_time2 = Date.now() / 1000;
    const current_time = Math.round(current_time2);

    if (current_time < res.locals.session.exp) {
      if (res.locals.session.role >= 1) {
      }
      if (res.locals.session.role >= 2) {
        router.route("/users/profile").get(userController.getProfile);
        //router.use("/users/image", userRoutes);
      }
      if (res.locals.session.role >= 3) {
        router.use("/admins", adminRoutes);
      }
      if (res.locals.session.role >= 4) {
        router.use("/users/status", membersRoutes);
        router.use("/users/role", roleRoutes);
      }
      if (res.locals.session.role >= 5) {
      }
      if (res.locals.session.role >= 6) {
      }
      if (res.locals.session.role >= 7) {
        router.use("/users", userRoutes);
      }
      if (res.locals.session.role >= 8) {
      }
      if (res.locals.session.role >= 9) {
      }
    }
    next();
  }
});
// Charger des itinéraires utilisateur

module.exports = router;
