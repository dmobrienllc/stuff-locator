const router = require('express').Router();

const {
    getContainerById,
    createContainer,
    updateContainer,
    deleteContainer
} = require('../../controllers/container-controller');

router.route('/:id').get(getContainerById);
router.route('/').post(createContainer);
router.route('/:id').put(updateContainer);
router.route('/').delete(deleteContainer);

module.exports = router;