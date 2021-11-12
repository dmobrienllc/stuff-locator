const { User, Location } = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
    async createUser(req, res) {
        console.log('user-controller.createUser');
        //USE findOrCreate here instead.
        let userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
            user = await User.create(req.body);
        }

        if (!userData) {
            return res.status(400).json({ message: "Unable to create user." })
        }
        return res.status(200).json(user);
    },
    async getUserById(req, res) {
        console.log('user-controller.getUserById');

        const userData = await User.findByPk(req.params.id,{include:{all:true}})
                                                            .catch((err) => {
                                                                return res.status(400).json(err);
                                                            });
        return res.status(200).json(userData);
    }
}