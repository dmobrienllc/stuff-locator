const router = require('express').Router();

const {
    createItem,
    getItemById,
    deleteItem
} = require('../../controllers/item-controller');

router.route('/:id').get(getItemById);
router.route('/').post(createItem);
router.route('/:id').delete(deleteItem);

module.exports = router;