const express=require('express');
const router=express.Router()

const{createTask,getTask,getTaskById,updateTask,updateTaskPatch,deleteTask}=require('../controllers/taskController');
const {protect}=require('../middleware/authmiddleware');

//protect function is used to verify token before creating task and it will allow only authorized users to create task ,it must be present in
// the middle 
router.post('/createTask',protect,createTask);
router.get('/getTask',protect,getTask)
router.get('/getTask/:id',protect,getTaskById)
router.put('/updateTask/:id',protect,updateTask)
router.patch('/updateTaskPatch/:id',protect,updateTaskPatch)
router.delete('/deleteTask/:id',protect,deleteTask)
module.exports=router;




 