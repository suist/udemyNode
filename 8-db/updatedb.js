const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
        if(error){
            return console.log(' Unable to connect to database!')
        }
    
        const db = client.db(databaseName)

        // db.collection('users').updateOne({_id: new ObjectID("5e1d35fb037c0a9050c5927b")},
        // {$inc:{age:1}}).then((result)=>{
        //     console.log(result)
        // }).catch((error)=>{
        //     console.log(error)
        // })

        db.collection('users').updateMany({age:31},{$inc:{age:1}}).then((result)=>{
            console.log(result)
        }).catch((error)=>{
            console.log(error)
        })
    }
)