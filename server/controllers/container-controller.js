const Container = require('../models/Container');

module.exports = {
    async getContainerById(req,res){
        console.log('container-controller.getLocationById');

        let containerData = await Container.findByPk(req.params.id,{include:{all:true}}).catch((err) => {
            return res.status(400).json(err);
        });

        if(!containerData){
            return res.status(400).json({message: "Unable to find user by id."});
        }
        return res.status(200).json(containerData);
    },
    async createContainer(req,res){
        console.log('container-controller.createLocation');

        //use findOrCreate
        let containerData = await Container.create(req.body);

        if(!containerData){
            return res.status(400).json({message: "Unable to create container."});
        }

        return res.status(200).json(containerData);
    }
}