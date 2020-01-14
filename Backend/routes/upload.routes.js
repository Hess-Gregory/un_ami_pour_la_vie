const express = require("express");
const uploadApi = require("../controller/upload.controller");
const expressJWT = require("express-jwt");
const config = require("../config/index");
const multer = require("multer");
const upload = multer({ dest: "/tmp/" });
const router = express.Router();

router.route("/userpicture/").get(uploadApi.getAllUserPicture); // GET /api/fileupload/userpicture
router.route("/userpicture/:id").get(uploadApi.getByIdAllPicture); // GET /api/fileupload/userpicture
router.route("/userpicture/active/:id").get(uploadApi.getByIdActivePicture); // GET /api/fileupload/userpicture/active

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
      router.route("/userpicture/enable/:id").put(uploadApi.enableByIdPicture); // PUT /api/fileupload/userpicture/:iduser

      router
        .route("/userpicture/disable/:id")
        .put(uploadApi.disableByIdPicture); // PUT /api/fileupload/userpicture/:iduser

      router
        .route("/userpicture/:iduser")
        .post(upload.single("file"), uploadApi.addUserPicture); // PUT /api/admins/user/:id
    }

    if (res.locals.session.role >= 3) {
    }

    if (res.locals.session.role >= 4) {
    }

    if (res.locals.session.role >= 5) {
    }

    if (res.locals.session.role >= 6) {
    }

    if (res.locals.session.role >= 7) {
    }

    next();
  }
});

module.exports = router;
