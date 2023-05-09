const router = require('express').Router();
const {
    newUser,
    getAllUsers,
    getSingleUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend
} = require('../../controllers/userController')

router.route('/').get(getAllUsers).post(newUser)
router.route('/:id').get(getSingleUser).put(updateUser).delete(deleteUser)
router.route('/:id/friends/:friendId').post(addFriend).delete(removeFriend)

module.exports = router;