const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    email:{
        type:String,
        requirede:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,  
    },  

})
module.exports=mongoose.model('Users',userSchema)