const user= require('../models/User');
const Task = require('../models/Task');
const { request } = require('express');

exports.createTask = async (req, res) => {
    const { title, description,status,user} = req.body;
    try {   
        const task = await Task.create({
            title: req.body.title,
            description: req.body.description,
            status: req.body.status || 'pending',
            user:req.user.id,
        });  
        res.status(201).json({ msg: "Task created successfully", task });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getTask = async (req, res) => {
    try {   
        const tasks = await Task.find({user: req.user.id});
        // console.log(tasks);
        
        res.json(tasks)
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const mongoose = require("mongoose");

exports.getTaskById = async (req, res) => {
  try {
    const taskId = req.params.id?.trim();

    // ✅ Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(taskId)) {
      return res.status(400).json({ message: "Invalid Task ID" });
    }

    const task = await Task.findOne({
      _id: taskId,
      user: req.user.id, // ensures task belongs to user
    });

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.updateTask=async(req,res)=>{
    const task=await Task.findOneAndUpdate({
        _id: req.params.id,
        user: req.user.id,
    },
    {
        title: req.body.title,
        description: req.body.description,
        status: req.body.status,
    },{new:true})

    if(!task){
        res.json({msg:"no task exit"})
    }
    res.json(task)
}
exports.updateTaskPatch =async(req,res)=>{
  try{
      const task=await Task.findOneAndUpdate(
        {
        _id: req.params.id,
        user: req.user.id,
       },
      req.body,
    { new: true})
    if(!task){
      res.json({msg:"no task exit"})
    }
    res.json(task)
    }catch(err){
    res.json(err)
}
}

exports.deleteTask=async(req,res)=>{
   try{
    const task=await Task.findOneAndDelete({
       _id: req.params.id,
        user: req.user.id, 
    })
    res.json(task)
   }catch(err){
    res.json(err)
   }
}
