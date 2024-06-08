const mongoose = require('mongoose'); // Erase if already required
const bcrypt = require("bcrypt")

// Declare the Schema of the Mongo model
var userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
        //unique:true,
        index:true,
    },
    lastname:{
        type:String,
        required:true,
        //unique:true,
        index:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    mobile:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    role:{
        type:String,
        default: "user"
    },
    cart:{
        type: Array,
        default: []
    },
    address: [{type: mongoose.Schema.Types.ObjectId, ref:"Address"}],
    wishlist: [{type: mongoose.Schema.Types.ObjectId, ref:"product"}],
    isBlocked:{
        type: Boolean,
        default: false
    }
},{
    timestamps: true,
});

userSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10)
    this.password = hash;
});

userSchema.methods.isPasswordMatch = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
}

//Export the model
module.exports = mongoose.model('User', userSchema);