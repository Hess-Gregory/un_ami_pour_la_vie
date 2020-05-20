const express = require("express");
const expressJWT = require("express-jwt");
const config = require("../config/index");
const userRoutes = require("../routes/user.routes");
const adminRoutes = require("../routes/admin.routes");
const membersRoutes = require("../routes/members.routes");
const roleRoutes = require("../routes/role.routes");
const authRoutes = require("../routes/auth.routes");
const uploadRoutes = require("../routes/upload.routes");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger/swagger");
const userController = require("../controller/user.controller");
const mediaController = require("../controller/media.controller");
const db = require("../models");
const pictureUser = db.pictureUser;
const router = express.Router();

// Tous les itinéraires sont définis ici:

router.get("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use("/api-paths", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
router.use("/auth", authRoutes);
router.use("/fileupload", uploadRoutes);

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
        router.post(
          "/userpicture/:id",
          mediaController.uploadUsers.array("avatar", 6),
          (req, res, next) => {
            const url = req.protocol + "://" + req.get("host");

            var allPicture = [];
            for (var i = 0; i < req.files.length; i++) {
              var pictureObj = {
                id_user: req.params.id,
                url: url + mediaController.DIRUsers + req.files[i].filename,
                name: req.files[i].filename
              };

              allPicture.push(pictureObj);
            }
            return pictureUser
              .bulkCreate(allPicture, {
                returning: true
              })
              .then(function(dbPictures) {
                // res.status(201).json({
                //   message: "Téléchargement terminé!",
                //   PictureCreated: {
                //     id: result.id,
                //     id_user: req.params.id,
                //     name: result.name,
                //     url: result.url,
                //     description: result.description,
                //     active: req.body.active
                //   }
                res.json(dbPictures);
              })
              .catch(function(err) {
                console.log(err),
                  res.status(500).json({
                    error: err
                  });
              });
          }
        );
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
