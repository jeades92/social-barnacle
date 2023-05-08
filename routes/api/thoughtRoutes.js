const router = require('express').Router();
const {
    newThought,
    getAllThoughts,
} = require ('../../controllers/thoughtController')

router.post('/', newThought);
router.get('/', getAllThoughts);

module.exports = router;