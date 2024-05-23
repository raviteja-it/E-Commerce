const User = require("../models/userModel")
const asyncHandler = require("express-async-handler");

const createUser = asyncHandler(async (req,res)=>{
        //check if user already exist
        const email = req.body.email;
        const findUser = await User.findOne({email : email});
        if(!findUser){
            //create a new user
            const newUser = await User.create(req.body);
            res.json(newUser);
        }
        else{
            throw new Error('User Already Exist');
        }
})

const getUsers = asyncHandler(async (req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        throw new Error(err);
    }
})

const loginUser = asyncHandler(async (req,res)=>{
    const {email,password} = req.body;
    //console.log(email, password);
    const findUser = await User.findOne({email: email})
    //console.log(findUser);
    if(findUser && await findUser.isPasswordMatch(password)){
        res.status(201).json(findUser);
    }
    else{
        throw new Error("Invalid credentials")
    }
})

module.exports = {createUser, getUsers, loginUser}