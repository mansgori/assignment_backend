const Note = require('../models/task');
const asyncHandler = require('express-async-handler')

const getAlltasks = asyncHandler(async (req, res)=>{
    const task = await Note.find().lean()
    
    if(!task?.length){
        return res.status(400).json({message:'No task found'})
    }
    res.json(task)
})


const createNewtask = asyncHandler(async (req, res)=>{
    const {title, text} = req.body

    if(!title || !text){
        return res.status(400).json({message:"All field require"})
    }
    const task = await Note.create({title, text})

    if(task){
        return res.status(201).json({message:'new task created'})
    }else{
        return res.status(400).json({message:'Invalid task data'})
    }
})

const updateTask = asyncHandler(async (req, res) =>{
    const {_id, title, text, completed} = req.body
    
    if(!_id || !title || !text ){
        return res.status(400).json({message:'All fiels are require'})
    }

    const task = await Note.findById(_id).exec()

    if(!task){
        return res.status(400).json({message:'task note found'})
    }
    task.title = title
    task.text = text
    task.completed = completed

    const updatedTask = await task.save()
    res.json(`'${updatedTask.title}' updated`)

})

 const deleteTask = asyncHandler(async (req, res) =>{
    const { id } = req.body

    if(!id){
        return res.status(400).json({message:'Note ID requires'})
    }

    const task = await Note.findById(id).exec()
    if(!task){
        return res.status(400).json({message: 'Task not found'})
    }

    const result = await task.deleteOne()
const reply = `Task '${result.title}' with ID ${result._id} deleted`

res.json(reply)

 })

 module.exports = {
    getAlltasks,
    createNewtask,
    updateTask,
    deleteTask
 }