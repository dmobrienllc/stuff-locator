const User = require('../models/User');
const bcrypt = require('bcrypt');

module.exports = {
    async createUser(req,res){
        console.log('user-controller.createUser');
        let user = await User.findOne({where: {email: req.body.email}});

        if(!user){
            req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
            user = await User.create(req.body);
        }

        if(!user){
            return res.status(400).json({message: "Unable to create user."})
        }

        return res.status(200).json(user);
    },
    async getUserById(req,res){
        console.log('user-controller.getUserById');

        const user = await User.findByPk(req.params.id)
                                .catch((err) => {
                                    console.log(err);
                                    return res.status(400).json(err);
                                });
        return res.status(200).json(user);
    }
}