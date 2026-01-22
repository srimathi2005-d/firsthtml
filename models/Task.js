const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
    
    title:{
        type:String,
    },
    description:{       
        type:String,
        required:true,
        maxlength:100,
    },
    status:{
        type:String,
        required:true, 
        default:'pending', 
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users',
    },

})

module.exports=mongoose.model('Tasks',taskSchema)