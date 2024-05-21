const express = require("express");
const router = express.Router();
const {createUser, getUsers} = require("../controller/userController");


router.post('/register', createUser)
router.get('/getUsers', getUsers)

module.exports = router;