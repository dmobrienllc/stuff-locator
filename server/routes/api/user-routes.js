const router = require('express').Router();

const {
    createUser,
    getUserById
} = require('../../controllers/user-controller');

router.route('/:id').get(getUserById);
router.route('/').post(createUser);

module.exports = router;