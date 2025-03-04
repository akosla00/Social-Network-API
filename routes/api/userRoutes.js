const router = require('express').Router();
const {
    getUsers,
    createUser,
    getUserById,
    updateUser,
    deleteUser,
    removeFriend,
    addFriend
} = require('../../controllers/userController')

router.route('/').get(getUsers).post(createUser)

router.route('/:userId')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

router.route('/:userId/friends')
    .post(addFriend)

router.route('/:userId/friends/:friendId')
    .delete(removeFriend);

module.exports = router;
