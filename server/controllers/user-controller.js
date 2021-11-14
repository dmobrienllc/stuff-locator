const { User, Location } = require('../models');
const bcrypt = require('bcrypt');

module.exports = {
    async createUser(req, res) {
        console.log('user-controller.createUser');
        //USE findOrCreate here instead.
        let userData = await User.findOne({ where: { email: req.body.email } });

        if (!userData) {
            req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
            userData = await User.create(req.body);
        }

        if (!userData) {
            return res.status(400).json({ message: "Unable to create user." })
        }
        return res.status(200).json(userData);
    },
    async getUserById(req, res) {
        console.log('user-controller.getUserById');

        const userData = await User.findByPk(req.params.id,{include:{all:true}})
                                                            .catch((err) => {
                                                                return res.status(400).json(err);
                                                            });
        return res.status(200).json(userData);
    },
    async updateUser(req,res){
        console.log('user-controller.updateUser')

        let userData = await User.update(req.body,{
            where: {id: req.params.id}
        })
        .catch((err) => {
            console.log(err);
            return res.status(400).json({message: `Could not update user id: ${req.params.id}`});
        });
        //doesn't give updated user, just number of rows returned.
        return res.status(200).json(userData);
    },
    async deleteUser(req, res) {
        console.log('user-controller.deleteUser')

        await User.destroy({ where: { id: req.params.id } })
            .catch((err) => {
                console.log(err);
                return res.status(400).json(err);
            });
        return res.status(200).json({message: 'User Deleted.'});
    }
}