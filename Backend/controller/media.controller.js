const DIRUsers = "/public/users/";
const DIRArticles = "/public/articles/";
const DIRDogs = "/public/dogs/";
const multer = require("multer");
const fs = require("fs");
const { promisify } = require("util");
const unlinkAsync = promisify(fs.unlink);

let storageUsers = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "." + DIRUsers);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    cb(null, fileName);
  }
});

let storageArticles = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "." + DIRArticles);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    cb(null, fileName);
  }
});

let storageDogs = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "." + DIRDogs);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname
      .toLowerCase()
      .split(" ")
      .join("-");
    cb(null, fileName);
  }
});

exports.DIRUsers = DIRUsers;
exports.DIRArticles = DIRArticles;
exports.DIRDogs = DIRDogs;

exports.uploadUsers = multer({
  storage: storageUsers,
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
exports.uploadArticles = multer({
  storage: storageArticles,
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
exports.uploadDogs = multer({
  storage: storageDogs,
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
