const User = require("../models/userModel")
const asyncHandler = require("express-async-handler");

//user signin
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

//user login
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

//get all users
const getUsers = asyncHandler(async (req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        throw new Error(err);
    }
})

//get single use by ID
const getUserById = asyncHandler(async (req,res)=>{
    const { id }= req.params;
    try{
        const user = await User.findById(id);
        res.json(user);
    }catch(error){
        throw new Error(error);
    }
})

//delete user by ID
const deleteUserById = asyncHandler(async (req,res)=>{
    const {id} = req.params;
    console.log(id);
    try{
        const deleteUser = await User.findByIdAndDelete(id);
        res.send({deleteUser});
    }catch(err){
        throw new Error(err);
    }
})

//update the user
const updateUser = asyncHandler(async (req,res)=>{
    const {id} = req.params;
    try{
        const updatedUser = await User.findByIdAndUpdate(id, {
            firstname: req?.body?.firstname,
            lastname: req?.body?.lastname,
            email: req?.body?.email,
            mobile: req?.body?.mobile
        },{
            new:true,
        });
        res.json({updatedUser});
    }catch(err){
        throw new Error(err);
    }
})
module.exports = {createUser, getUsers, loginUser, getUserById, deleteUserById, updateUser}