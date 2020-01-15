// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'


MongoClient.connect(connectionURL,{useNewUrlParser:true }, (error,client)=>{
    if(error){
        return console.log(' Unable to connect to database!')
    }

    const db = client.db(databaseName)

    // db.collection('users').findOne({name:'suist'},(error,user)=>{
    //     if(error) {
    //         return console.log('Unable to fetch')
    //     }

    //     console.log(user)
    // })

    // db.collection('users').find({age:30}).toArray((error,users)=>{
    //     console.log(users)
    // })

    // db.collection('users').find({age:30}).count((error,count) => {
    //     console.log(count)

    db.collection('tasks').findOne({_id: new ObjectID("5e1d71717bb1da93088506c5")},(error,task)=>{
        if(error){
            return console.log('error!')
        }

        console.log(task)
    })

    db.collection('tasks').find({completed:false}).toArray((error,task)=>{
        if(error){
            return console.log('error!')
        }
        console.log(task)
    })


    
})
// const id = new ObjectID()
// console.log(id.id.length)    12 자리 buffer 
// console.log(id)
// console.log(id.toHexString().length)
// console.log(id.getTimestamp())

