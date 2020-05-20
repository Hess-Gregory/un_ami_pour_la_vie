const db = require("../models");
const pictureUser = db.pictureUser;
const httpStatus = require("http-status");
const multer = require("multer");
const DIR = "/public/";

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
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  }
});

module.exports = {
  getAllUserPicture(req, res) {
    return pictureUser
      .findAll({
        raw: true,
        attributes: { exclude: ["createdAt", "updatedAt", "password"] }
      })
      .then(result => res.json(result))
      .catch(e => next(e));
  },

  getByIdAllPicture(req, res) {
    return pictureUser
      .findAll({
        where: {
          id_user: req.params.id
        },
        raw: true,
        attributes: { exclude: ["createdAt", "updatedAt", "password"] }
      })
      .then(uniqueUser => {
        if (!uniqueUser) {
          return res.status(httpStatus.NOT_FOUND).send({
            message:
              "Aucune image dans la base de donnée pour cet utilisateur !"
          });
        }
        return res.json(uniqueUser);
      });
  },

  getByIdDisablePicture(req, res) {
    return pictureUser
      .findAll({
        where: { id_user: req.params.id, active: 0 },
        attributes: { exclude: ["createdAt", "updatedAt", "password"] }
      })
      .then(uniqueUser => {
        if (!uniqueUser) {
          return res.status(httpStatus.NOT_FOUND).send({
            message:
              "Aucune image active dans la base de donnée pour cet utilisateur !"
          });
        }
        return res.json(uniqueUser);
      });
  },
  getByIdActivePicture(req, res) {
    const url = req.protocol + "://" + req.get("host");
    return pictureUser
      .findOne({
        where: { id_user: req.params.id, active: 1 }
      })
      .then(uniqueUser => {
        if (!uniqueUser) {
          return res.json({
            id: 1,
            id_user: req.params.id,
            active: 1,
            url: url + DIR + "default.png",
            description: "default"
          });

          // res.status(200)
          // .send({ id:1, id_user: req.params.id, active: 1, url : url + DIR + 'default.png', description: 'default' });
        }
        return res.json(uniqueUser);
      });
  },

  enableByIdPicture(req, res) {
    console.log("enable", req.params.id);
    // return pictureUser
    //   .update({ active: 1 }, { where: { id: req.params.id } })
    //   .then(result => {
    //     if (result) {
    //       return res
    //         .status(200)
    //         .send({ message: "image activé", data: req.body });
    //     } else {
    //       return res
    //         .status(httpStatus.BAD_REQUEST)
    //         .send("Erreur lors de la mise à jour");
    //     }
    //   })
    //   .catch(() => {
    //     return res.status(httpStatus.NOT_FOUND).send("Image non trouvé");
    //   });

    return pictureUser
      .update(
        {
          active: 1
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
      .then(result => {
        if (result) {
          return res.status(200).send({ message: "Mis à jour avec succés" });
        } else {
          return res
            .status(httpStatus.BAD_REQUEST)
            .send("Erreur lors de la mise à jour");
        }
      })
      .catch(() => {
        return res.status(httpStatus.NOT_FOUND).send("Image non trouvé");
      });
  },

  disableByIdPicture(req, res) {
    console.log("disable:", req.params.id);
    return pictureUser
      .update({ active: 0 }, { where: { id: req.params.id } })
      .then(result => {
        if (result) {
          return res
            .status(200)
            .send({ message: "image desactivé", data: req.body });
        } else {
          return res
            .status(httpStatus.BAD_REQUEST)
            .send("Erreur lors de la mise à jour");
        }
      })
      .catch(() => {
        return res.status(httpStatus.NOT_FOUND).send("Image non trouvé");
      });
  },

  getByIdActivePictures(req, res) {
    return pictureUser
      .findAll({
        where: { id_user: req.params.id, active: 1 },

        attributes: { exclude: ["createdAt", "updatedAt", "password"] }
      })
      .then(uniqueUser => {
        if (!uniqueUser) {
          return res.status(httpStatus.NOT_FOUND).send({
            message:
              "Aucune image active dans la base de donnée pour cet utilisateur !"
          });
        }
        return res.json(uniqueUser);
      });
  },

  addUserPicture(req, res, next) {
    // console.log("test 1");
    // upload.array('avatar', 6);
    // const reqFiles = []
    // const url = req.protocol + '://' + req.get('host')
    // console.log("test 2");
    // console.log("req.files", req.files[0].filename);

    // for (var i = 0; i < req.files.length; i++) {
    //    console.log("test 3");
    // reqFiles.push(url + '/public/' + req.files[i].filename)
    // let name = req.files[i].filename;
    // console.log('name1:', name);
    // console.log('reqFiles 1:', reqFiles);
    // return name;
    // }
    // console.log('name2:', name);

    console.log("reqFiles 2:", reqFiles);

    return pictureUser
      .create({
        id_user: req.params.id
      })
      .then(result => {
        //console.log(result);
        res.status(201).json({
          message: "Done upload!",
          PictureCreated: {
            id: result.id,
            avatar: result.poster,
            name: result.name,
            id_user: req.params.id
          }
        });
      })
      .catch(err => {
        console.log(err),
          res.status(500).json({
            error: err
          });
      });
  }
};
