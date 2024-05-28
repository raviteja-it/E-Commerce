const express = require("express");
const router = express.Router();
const {createUser, getUsers, loginUser, getUserById, deleteUserById, updateUser} = require("../controller/userController");


router.post('/signup', createUser)
router.post('/login', loginUser)
router.get('/getUsers', getUsers)
router.get('/getUser/:id', getUserById);
router.delete('/deleteUser/:id', deleteUserById);
router.put('/updateUser/:id', updateUser)

module.exports = router;