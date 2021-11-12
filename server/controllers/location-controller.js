const Location = require('../models/Location');

module.exports = {
    async getLocationById(req,res){
        console.log('location-controller.getLocationById');

        let locationData = await Location.findByPk(req.params.id,{include:{all:true}}).catch((err) => {
            return res.status(400).json(err);
        });

        if(!locationData){
            return res.status(400).json({message: "Unable to find user by id."});
        }
        return res.status(200).json(locationData);
    },
    async createLocation(req,res){
        console.log('location-controller.createLocation');

        let locationData = await Location.findOne({where:{label:req.body.label}});

        if(!locationData){
            locationData = await Location.create(req.body);
        }

        if(!locationData){
            return res.status(400).json({message: "Unable to create user."});
        }

        return res.status(200).json(locationData);
    }
}