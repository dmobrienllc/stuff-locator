const router = require('express').Router();
const userRoutes = require('./user-routes');
const locationRoutes = require('./location-routes');
const containerRoutes = require('./container-routes');
const itemRoutes = require('./item-routes');

router.use('/user',userRoutes);
router.use('/location',locationRoutes);
router.use('/container',containerRoutes);
router.use('/item',itemRoutes);

module.exports = router;