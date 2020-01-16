require('./src/db/mongoose')
const Task = require('./src/models/task')

Task.findOneAndDelete("5e1ec3b062f1aaae1d20f3bc").then(()=>{
    return Task.countDocuments({completed :true})
}

).then((result)=>{
console.log(result)

}).catch((e)=>{
    console.log(e)
})