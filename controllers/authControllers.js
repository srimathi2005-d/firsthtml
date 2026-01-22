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
    const status='new'; 
    
    const user=await User.create({
        name,
        email,  
        password:hashedPassword,
        
    })
    
    res.status(201).send({msg:"User created successfully"})
}

exports.login=async (req,res)=>{
    try{
        const{email,password}=req.body;
        const exist=await User.findOne({email});
        if(!exist){
            res.status(400).send("email not registered");
        }   
        const ismatch=await bcrypt.compare(password,exist.password);
        if(!ismatch){
            res.status(400).send("invalid password");
        }
        const token=jwt.sign(
            {id:exist._id},
            process.env.JWT_SECRET,
            {expiresIn:'1d'}
        )
        res.status(200).json({msg:"login successful",token});
    }
    catch(error){
        res.status(500).send(error);
    }
}