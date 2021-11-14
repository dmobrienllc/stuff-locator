const router = require('express').Router();

const {
    getLocationById,
    createLocation,
    updateLocation,
    deleteLocation
} = require('../../controllers/location-controller');

router.route('/:id').get(getLocationById);
router.route('/').post(createLocation);
router.route('/:id').put(updateLocation);
router.route('/').delete(deleteLocation);

module.exports = router;