
const userController = require('../controller').user;
//const authController = require('../controller').auth;
var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

module.exports = (app) => {

    app.get('/api',(req,res) => {
        res.status(200).send({
            data : "Welcome Node Sequlize API v1"
        })
    })

   //app.post('/api/auth',authController.getAuth);
    app.get('/api/users',userController.getUsers);

    app.post('/api/user/create',userController.create);

    // app.put('/api/user/:userId',userController.update);

    // app.get('/api/:userId/posts',postController.getAllPostsOfUser);

    // app.post('/api/post/create',postController.createPost);

    // app.put('/api/:postId',postController.update);

}