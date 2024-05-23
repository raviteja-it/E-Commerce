const express = require("express");
const router = express.Router();
const {createUser, getUsers, loginUser} = require("../controller/userController");


router.post('/register', createUser)
router.get('/getUsers', getUsers)
router.post('/login', loginUser)

module.exports = router;    