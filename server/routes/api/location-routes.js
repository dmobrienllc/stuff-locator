const router = require('express').Router();

const {
    getLocationById,
    createLocation
} = require('../../controllers/location-controller');

router.route('/:id').get(getLocationById);
router.route('/').post(createLocation);

module.exports = router;