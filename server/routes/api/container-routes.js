const router = require('express').Router();

const {
    getContainerById,
    createContainer
} = require('../../controllers/container-controller');

router.route("/:id").get(getContainerById);
router.route("/").post(createContainer);

module.exports = router;