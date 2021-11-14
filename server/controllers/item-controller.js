const Item = require('../models/Item');

module.exports = {
    async createItem(req, res) {
        console.log('item-controller.createItem')

        //just get it going, then do FindAndCreate
        let itemData = await Item.create(req.body)
            .catch((err) => {
                console.log(err);
                return res.status(400).json(err);
            });
        return res.status(200).json(itemData);
    },
    async getItemById(req, res) {
        console.log('item-controller.getItemById')

        let itemData = await Item.findByPk(req.params.id)
            .catch((err) => {
                console.log(err);
                return res.status(400).json(err);
            });

        if (!itemData) {
            return res.status(400).json({ message: `Could not create item ${req.body}` });
        }
        return res.status(200).json(itemData);
    },
    async updateItem(req,res){
        console.log('item-controller.updateItem');

        let numRowsUpdated = await Item.update(req.body,{
            where : {id: req.params.id}
        })
        .catch((err) => {
            return res.status(400).json({message: `Could not update Item with id: ${req.params.id}`})
        })
        return res.status(200).json({NumberRowsUpdated: numRowsUpdated});
    },
    async deleteItem(req, res) {
        console.log('item-controller.deleteItem')

        Item.destroy({ where: { id: req.params.id } })
            .catch((err) => {
                console.log(err);
                return res.status(400).json(err);
            });
        return res.status(200).json({message: 'Item Deleted.'});
    }
}