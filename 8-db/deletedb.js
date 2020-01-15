const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        console.log(error)
    }

    const db = client.db(databaseName)

    db.collection('tasks').deleteOne({description:'wash me',completed:true})
    .then((result)=>{
        console.log('succees',result)
    }).catch((error)=>
    console.log('error',error)
)
})




