const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true },(error, client)=>{
    if(error){
        return console.log('Unable to connect to database!')
    }

    const db = client.db(databaseName)

    db.collection('users').insertMany([
        {
        name: 'suist',
        age : 30
    },{
        name:'hong',
        age:31
    }
 ], (error,result)=>{
        if(error) {
            return console.log('Unable to insert Many!')

        }

        console.log(result.ops)
    })
})

MongoClient.connect(connectionURL,{useNewUrlParser:true},(error,client)=>{
    if(error){
        return console.log('fail to connect to database')
        }

        const db = client.db(databaseName)

        db.collection('tasks').insertMany([
            {
                description: 'clean dishes',
                completed:true
            },
            {
                description: 'shopping',
                completed:false
            },
            {
                description: 'wash hands',
                completed:false
            },
        
        ],(error,result)=> {
            if(error){
                return console.log('fail to insert')
            }

            console.log(result.ops)
        })
    
})