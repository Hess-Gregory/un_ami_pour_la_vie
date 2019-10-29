const User = require('../models').User;

module.exports = {

    async getAuth(req,res) {
        try {
            const body = req.body;    
            const user = USERS.find(user => user.username == body.username);
            if(!user || body.password != 'todo') {
            const userCollection = await User.find({});
            res.status(201).send(userCollection);                
            }

        }
        catch(e){
            console.log(e);
            res.status(401).send(e);
        }
    },




}