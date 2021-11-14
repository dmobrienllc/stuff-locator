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
    },
    //TODO: Support updating array of containers?
    async updateLocation(req,res){
        console.log('location-controller.updateLocation');

        let locationData = await Location.update(req.body,{
            where: { id: req.params.id}
        })
        .catch((err) => {
            return res.status(400).json({message: `Could not update Location with id: ${req.params.id}`});
        })
        return res.status(200).json({numRowsAffected: locationData})
    },
    async deleteLocation(req, res) {
        console.log('location-controller.deleteLocation')

        Location.destroy({ where: { id: req.params.id } })
            .catch((err) => {
                console.log(err);
                return res.status(400).json(err);
            });
        return res.status(200).json({message: 'Location Deleted.'});
    }
}