const mongoose = require("mongoose");

const dbConnect = ()=>{
    try{
        const con = mongoose.connect(process.env.MONGODB_URL);
        console.log("Db connected")
    }catch(err){
        console.log(err);
    }
}

module.exports = dbConnect;