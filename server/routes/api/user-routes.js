const router = require('express').Router();

const {
    getUserById,
    createUser
} = require('../../controllers/user-controller');

router.route('/:id').get(getUserById);
router.route('/').post(createUser);

module.exports = router;