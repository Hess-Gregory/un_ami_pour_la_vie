const User = require('../models').User;
var express = require('express')
var bodyParser = require('body-parser')
 
var app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


module.exports = {

    async getUsers(req,res) {
        try {
            const userCollection = await User.find({});
            res.status(201).send(userCollection);
        }
        catch(e){
            console.log(e);
            res.status(500).send(e);
        }
    },

    async create(req,res) {

        try {
            const userCollection = await User

            
            .create({
                username : req.body.username,
                email : req.body.email,
                password : req.body.password,
                role : 6,
                isActive : 0

            });

            res.status(201).send(userCollection);
        }
        catch(e){
            console.log(e);
            res.status(400).send(e);
        }
                    
    },

    async update(req,res) {

        try{
            const userCollection = await User.find({
                id : req.params.userId
            });

            if(userCollection){

                const updatedUser = await User.update({
                    id : req.body.email
                });

                res.status(201).send(updatedUser)

            }
            else{

                res.status(404).send("User Not Found");
            }

        }
        catch(e){
            console.log(e);

            res.status(500).send(e);

        }
    } 


}