const mongoose = require('mongoose')
const validator = require('validator')

const User = mongoose.model('User',{
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required: true,
        trim: true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error ('Email is invaild')

            }
        },
       

    },
    age: {
        type:Number,
        validate(value){
            if(value <0){
                throw new Error('Age must be a postive number')
            }
        }
    },
    password: {
        required:true,
        type: String,
        trim: true,
        minlength:7,
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

 module.exports = User