require('./src/db/mongoose')
const User = require('./src/models/user')

User.findByIdAndUpdate('5e1ebea5ce2801acfe1e06df',{age :1 }).then((user)=>{
    console.log(user)
    return User.countDocuments({age :1})
}).then((result)=>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})