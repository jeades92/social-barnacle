const router = require('express').Router();
const {
    newUser,
    getAllUsers,
    getSingleUser
} = require('../../controllers/userController')

// router.post('/users', (req, res) => {
//     res.send('User creation success')
// })

router.post('/', newUser);
router.get('/', getAllUsers);
router.get('/:id', getSingleUser);



module.exports = router;