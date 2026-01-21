const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../models/User');

exports.register=async(req,res)=>{
    const{name,email,password}=req.body;
    const existing=await User.findOne({email})
    if(existing){
        res.status(400).json({message:"User already exists"});  
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const user=await User.create({
        name,
        email,  
        password:hashedPassword
    })
    res.status(201).send({msg:"User created successfully"})

}