const express = require('express')
require('./db/mongoose')

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT || 3000

// app.use((req,res,next)=> {
//     if(req.method ==='GET'){
//         res.send('GET requests are disabled')
//     }else {
//         next()
//     }

// })

// app.use((req,res,next)=>{
//     res.status(503).send('site is currently down. Check back soon')
//     next()
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)




app.listen(port, () =>{
    console.log('Server is up on port ' + port)

    
})

// const jwt = require('jsonwebtoken')

// const myFunction = async () =>{
//     const token = jwt.sign({_id:'asd'},'su_secretkey',{expiresIn:'7 days'})
//     console.log(token)
//     // head.body&payload&secretkey   by base64 language

//     const data = jwt.verify(token,'su_secretkey')
//     console.log(data)

// }

// myFunction()


// const bcrypt = require('bcryptjs')

// const myFunction = async () =>{
//     const password = 'Su1004'
//     const hashedPassword = await bcrypt.hash(password,8)

//     console.log(password)  
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('Su1004',hashedPassword)
//     console.log(isMatch)
// }
//myFunction()


