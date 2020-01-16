const mongoose = require('mongoose')


mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true,
    useFindAndModify:false
})



// const toDo = new Task({
//     description:'       was   h your hands !',
   
// })

// toDo.save().then(()=>{
//     console.log(toDo)
// }).catch((error)=>{
//     console.log(error)
// })
// const me = new User({

// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('error',error)
// })