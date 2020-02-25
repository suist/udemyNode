const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL,{
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