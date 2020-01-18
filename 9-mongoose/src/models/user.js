const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
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

userSchema.statics.findByCredentials =async (email,password)=>{
    const user = await User.findOne({email}) //{email:email} shorthand

    if(!user){
        throw new Error('Unable to login')
}

    const isMatch = await bcrypt.compare(password,user.password)

    if(!isMatch){
        throw new Error('Unable to login')

        
    }
    return user
}
  


// Hash the plain text password before saving // can not use arrow function! **
userSchema.pre('save',async function(next){
    const user = this
    
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password,8)

    }

    next()
})


const User = mongoose.model('User',userSchema)

 module.exports = User