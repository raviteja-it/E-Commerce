const User = require("../models/userModel")


const createUser = async (req,res)=>{
    try{
        //check if user already exist
        const email = req.body.email;
        const findUser = await User.findOne({email : email});
        console.group(findUser);
        if(!findUser){
            //create a new user
            const newUser = await User.create(req.body);
            res.json(newUser);
        }
        else{
            res.json({
                "message":"user already exist",
                "status":"success"
            })
        }
    }catch(error){
        console.log(err);
    }
}

const getUsers = async (req,res)=>{
    try{
        const users = await User.find();
        res.json(users);
    }catch(err){
        console.log(err);
    }
}

module.exports = {createUser, getUsers}