require('./src/db/mongoose')
const Task = require('./src/models/task')

// Task.findOneAndDelete("5e1ec3b062f1aaae1d20f3bc").then(()=>{
//     return Task.countDocuments({completed :true})
// }

// ).then((result)=>{
// console.log(result)

// }).catch((e)=>{
//     console.log(e)
// })

const deleteTaskAndCount = async (id) => {

    const deleteId = await Task.findByIdAndRemove(id) // const deleteId 생략가능
    const countId = await Task.countDocuments({completed: false})
    return countId

}

deleteTaskAndCount("5e1fbc358e6a95b7f31ee357").then((countId)=>{
    console.log(countId)

}).catch((e)=>{
    console.log(e)
})