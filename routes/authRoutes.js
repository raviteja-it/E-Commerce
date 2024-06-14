const express = require("express");
const router = express.Router();
const {createUser, getUsers, loginUser, getUserById, deleteUserById, updateUser, blockUser, unBlockUser} = require("../controller/userController");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleware");


router.post('/signup', createUser)
router.post('/login', loginUser)
router.get('/getUsers', getUsers)
router.get('/getUser/:id', authMiddleware, isAdmin, getUserById);
router.delete('/deleteUser/:id', deleteUserById);
router.put('/updateUser/:id', authMiddleware, updateUser);
router.put('/blockUser/:id', authMiddleware, isAdmin, blockUser);
router.put('/unblockUser/:id', authMiddleware, isAdmin, unBlockUser);

module.exports = router;