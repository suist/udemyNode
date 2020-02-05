const express = require('express')
const router = new express.Router()
const Task = require('../models/task')
const auth = require('../middleware/auth')


//create task
router.post('/tasks',auth, async (req,res)=>{

    //const task =new Task(req.body)
    const task = new Task({
        ...req.body, // all object
        owner:req.user._id
    })
    try {
        await task.save()
        res.status(201).send(task)
        
    } catch (error) {
        res.status(400).send(error)
    }
 




//     task.save().then(()=>{
//         res.status(201).send(task)
//     }).catch((e)=>{
//      res.status(400).send(e)
// })

})

// GEt /tasks?completed=false
//pagination -> GET /tasks?limit=10skip=20 customizing
//tasks?limit=2
//GET /tasks?sorkBy=createdAt:desc
// asc
router.get('/tasks',auth, async (req,res)=>{
    const match ={}
    const sort = {}

    
    if(req.query.completed){
        match.completed = req.query.completed ==='true'
    }

    if(req.query.sortBy){
        const parts = req.query.sortBy.split(':')
        sort[parts[0]] = parts[1] === 'desc' ? -1: 1 // sortBy = desc 면-1 
    
    }
        try {
            await req.user.populate({
                path:'tasks',
                match,
                options :{
                    limit:parseInt(req.query.limit) // limit: 페이지에 표시할 양
                    ,skip : parseInt(req.query.skip)
                    ,sort 
                    // :{
                        // completed: -1 // descending-역순으로 -1, asceding 1 점점커지는
                    // } // skip : pagination 넘길 쪽 수
                }
            
            }).execPopulate()
            res.send(req.user.tasks)
        } catch (error) {
            res.status(500).send()
            
        }

    // Task.find({}).then((tasks)=>{
    //     res.send(tasks)

    // }).catch((e)=>{

    //     res.status(500).send()

    // })

})


//read from ID 
router.get('/tasks/:id',auth, async (req,res)=>{
    const _id =req.params.id

    try {
        
        // const tasks= await Task.findById(_id)
        const tasks = await Task.findOne({_id, owner: req.user._id})

        if(!tasks){
              return res.status(404).send()
                }
          res.send(tasks)

        
    } catch (error) {
        res.status(500).send()
        
    }


    // Task.findById(_id).then((tasks)=>{
    //     if(!tasks){
    //         return res.status(404).send
    //     }
    //     res.send(tasks)
        
    // }).catch((e)=>{
    //     res.status(500).send()
    // })
})

//update 
router.patch('/tasks/:id',async (req,res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description','completed']
    const isValidOperation = updates.every((update)=> allowedUpdates.includes(update))
    if(!isValidOperation){
        return res.status(400).send({error : "Invalid updates!"})
    }
    try {

        const task = await Task.findById(req.params.id)
        updates.forEach((update)=> user[update] = req.body[update])
        await user.save()
        
        // const task = await Task.findByIdAndUpdate(req.params.id,req.body,{new: true,runValidators:true})
        if(!task){
            return res.status(404).send()
        }
        res.send(task)

        
    } catch (error) {
        res.status(400).send(error)
        
    }
})


//delete
router.delete('/tasks/:id', async (req,res)=>{
    try {
     const task =await Task.findByIdAndDelete(req.params.id)
     
     if(!task){
         return res.status(404).send()
     }

     res.send(task)
        
    } catch (error) {

        res.status(500).send()
        
    }
})

module.exports = router