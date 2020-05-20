const express = require("express");
const uploadController = require("../controller/upload.controller");
const expressJWT = require("express-jwt");
const config = require("../config/index");
const router = express.Router();
const db = require("../models");
const pictureUser = db.pictureUser;
const multer = require("multer");
const DIR = "./public/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    cb(null, fileName);
  }
});

var upload = multer({
  storage: storage,
  // limits: {
  //   fileSize: 1024 * 1024 * 5
  // },
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(
        new Error("Seulement formats .png, .jpg and .jpeg  autorisés!")
      );
    }
  }
});

router.route("/userpicture/").get(uploadController.getAllUserPicture); // GET /api/fileupload/userpicture
router.route("/userpicture/:id").get(uploadController.getByIdAllPicture); // GET /api/fileupload/userpicture/:id
router
  .route("/userpicture/disable/:id")
  .get(uploadController.getByIdDisablePicture) // GET /api/fileupload/userpicture/disable/:id
  .put(uploadController.disableByIdPicture); // PUT /api/fileupload/userpicture/disable/:id
router
  .route("/userpicture/active/:id")
  .get(uploadController.getByIdActivePicture); // GET /api/fileupload/userpicture/active/:id
router
  .route("/userpicture/actives/:id")
  .get(uploadController.getByIdActivePictures); // GET /api/fileupload/userpicture/actives/:id

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
      router
        .route("/userpicture/enable/:id")
        .put(uploadController.enableByIdPicture); // PUT /api/fileupload/userpicture/enable/:id
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
