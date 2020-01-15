const mongoose = require('mongoose')
const validator = require('validator')
mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api',{
    useNewUrlParser:true,
    useCreateIndex:true
})

const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    // email:{
    //     type:String,
    //     validate(value){
    //         if(validator.isEmail(value)){
    //             throw new Error ('Email is invaild')

    //         }
    //     },
    //     lowercase:true

    // },
    // age: {
    //     type:Number,
    //     validate(value){
    //         if(value <0){
    //             throw new Error('Age must be a postive number')
    //         }
    //     }
    // },
    password: {
        required:true,
        type: String,
        trim: true,
        // minlength:7,
        validate(value){
            // if(value.length<6){
            //     throw new Error ('password length is greater than 6')
            // }else if(validator.contains(value,'password')){
            //     throw new Error ('password must not contain letter"passwod"')
                if(value.toLowerCase().includes('password')){
                throw new Error ('password must not contain letter"passwod"')
        }
    
}}
})

// const me = new User({
//     name:'susu',
//     password:'Passs  word'


// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=> {
//     console.log(error)
// })

const Task = mongoose.model('Task',{
    description:{
        type:String,
        trim:true
    },
    completed:{
        type: Boolean,
        default:false
    }
    

})


const toDo = new Task({
    description:'       was   h your hands !',
   
})

toDo.save().then(()=>{
    console.log(toDo)
}).catch((error)=>{
    console.log(error)
})
// const me = new User({

// })

// me.save().then(()=>{
//     console.log(me)
// }).catch((error)=>{
//     console.log('error',error)
// })